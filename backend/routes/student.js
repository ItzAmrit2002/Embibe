const router = require("express").Router();
const Paper = require("../models/Paper");
const Question = require("../models/Question");
const User = require("../models/User");
const Answer = require("../models/Answer")
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
})

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
        res.status(400).send('Please enter all the fields');
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
            paper: answer.pid
        });
        return
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);
        return
    }
})
//run loop to get total marks of each paper, concat that with papers response in json and send
module.exports = router;
