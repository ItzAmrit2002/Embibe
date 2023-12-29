const router = require("express").Router();
const Paper = require("../models/Paper");
const Question = require("../models/Question");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Marks = require("../models/Marks");
router.get("/givepaper", async (req, res) => {
  const count = Paper.countDocuments(function (err, c) {
    console.log("Count is " + c);
    res.status(200).json(c);
    return;
  });
});

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

router.post("/getquestions", async (req, res) => {
  const { paperid } = req.body;
  try {
    const questions = await Question.find({ paper: paperid });
    if (!questions) {
      res.status(400).json({ message: "No questions found" });
      return;
    }
    res.status(200).json(questions);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    return;
  }
});

router.post("/paperinfo", async (req, res) => {
  const { paperid } = req.body;
  try {
    const paper = await Paper.findById(paperid);
    if (!paper) {
      res.status(400).json({ message: "No paper found" });
      return;
    }
    res.status(200).json(paper);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    return;
  }
});

router.get("/getpapers", async (req, res) => {
  const papers = await Paper.find();
  const questions = await Question.find();
  var marks;
  if (!papers) {
    res.status(404).json({ message: "Papers not found" });
    return;
  }
  let markstot;
  await Question.aggregate([
    { $match: {} },
    {
      $group: {
        _id: "$paper",
        total: {
          $sum: "$marks",
        },
      },
    },
  ]).then((rep) => {
    Question.aggregate([
      { $match: {} },
      { $group: { _id: "$paper", n: { $sum: 1 } } },
    ]).then((rex) => {
      papers.sort(GetSortOrder("_id"));
      rep.sort(GetSortOrder("_id"));
      rex.sort(GetSortOrder("_id"));
      res.json({ papers, rep, rex });
    });
  });

  return;
});

router.post("/postanswer", async (req, res) => {
  const { pid, sid, qid, checkA, checkB, checkC, checkD } = req.body;
  if (!pid || !sid || !qid) {
    res.status(400).send("Please enter all the fields");
    return;
  }
  try {
    const answer = new Answer({
      paper: pid,
      question: qid,
      user: sid,
      checkA: checkA,
      checkB: checkB,
      checkC: checkC,
      checkD: checkD,
    });
    const savedQues = await answer.save();
    res.status(201).json({
      _id: answer.id,
      question: answer.qid,
      user: answer.sid,
      paper: answer.pid,
    });
    return;
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    return;
  }
});

router.post("/setfinished", async (req, res) => {
  // Set the finished field of the Marks collection to true
  const { userid, paperid, count } = req.body;
  try {
    const marks = await Marks.findOneAndUpdate(
      { userid: userid, paperid: paperid, finished: false },
      { finished: true}
    );
    res.status(200).json(marks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/getmarks", async (req, res) => {
  try {
    const { userid} = req.body;

    // Query the Marks collection based on the provided userid and paperid
    const marks = await Marks.find({ userid: userid, finished: true });
    console.log(userid);
    console.log(marks);
    res.status(200).json(marks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/getpaperdetails", async (req, res) => {
  try {
    const { paperId } = req.body;

    // Use Mongoose to query the Question collection
    const questions = await Question.find({ paper: paperId });

    // Calculate the total number of questions and total marks
    const totalQuestions = questions.length;
    const totalMarks = questions.reduce(
      (sum, question) => sum + question.marks,
      0
    );

    // Create the response object
    const paperDetails = {
      paperId,
      totalQuestions,
      totalMarks,
    };

    // Send the response
    res.json(paperDetails);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//run loop to get total marks of each paper, concat that with papers response in json and send
module.exports = router;
