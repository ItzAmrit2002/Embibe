const router = require("express").Router();
const Marks = require("../models/Marks");
const Paper = require("../models/Paper");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");

// router.post("/tallymarks", async (req, res) => {
// 	const { paper_id, user_id, checkA, checkB, checkC, checkD, question_id } =
// 		req.body;
// 	const ques = await Question.findById(question_id);
// 	const marks = await Marks.findOne({ userid: user_id, paperid: paper_id });
// 	console.log(ques);
// 	console.log(req.body);
// 	if (
// 		ques.checkA === checkA &&
// 		ques.checkB === checkB &&
// 		ques.checkC === checkC &&
// 		ques.checkD === checkD
// 	) {
		
// 		let doc = await Marks.findOneAndUpdate(
// 			{ userid: user_id, paperid: paper_id },
// 			{attempted: marks.attempted+1},
// 			{ marks: marks.marks + ques.marks },
// 			{correct: marks.correct+1},
// 			{ upsert: true },
// 			function (err, doc) {
// 				if (err) {
// 					throw err;
// 				} else {
// 					console.log(doc);
// 					res.status(200).send(doc);
// 				}
// 			}
// 		)
// 			.clone()
// 			.catch(function (err) {
// 				console.log(err);
// 			});
// 	} else {
// 		let doc = await Marks.findOneAndUpdate(
// 			{attempted: marks.attempted+1},
// 			{incorrect: marks.incorrect+1},
// 			{ upsert: true },
// 			function (err, doc) {
// 				if (err) {
// 					throw err;
// 				} else {
// 					console.log(doc);
// 					res.status(400).send(doc);
// 				}
// 			}
// 		)
// 			.clone()
// 			.catch(function (err) {
// 				console.log(err);
// 			});
// 		// res.status(400).send("wrong answer");
// 	}
// });
router.post("/tallymarks", async (req, res) => {
	const { paper_id, user_id, checkA, checkB, checkC, checkD, question_id } =
	  req.body;
	const ques = await Question.findById(question_id);
	const marks = await Marks.findOne({ userid: user_id, paperid: paper_id });
	console.log(ques);
	console.log(req.body);
	if (
	  ques.checkA === checkA &&
	  ques.checkB === checkB &&
	  ques.checkC === checkC &&
	  ques.checkD === checkD
	) {
		const existingDoc = await Marks.findOne({ userid: user_id, paperid: paper_id, finished:false });

		if (!existingDoc || !existingDoc.finished) {
		  // Update existing document or create a new one if not found
		  let doc = await Marks.findOneAndUpdate(
			{ userid: user_id, paperid: paper_id },
			{
			  $inc: {
				marks: ques.marks,
				attempted: 1,
				correct: 1,
			  },
			},
			{ upsert: true },
		  );
		  console.log(doc);
		  res.status(200).send(doc);
		}
		// else {
		// 	// Create a new document since the existing one is finished
		// 	const newDoc = await Marks.create({
		// 	  userid: user_id,
		// 	  paperid: paper_id,
		// 	  marks: ques.marks,
		// 	  attempted: 1,
		// 	  correct: 1,
		// 	  finished: false, // Assuming you want to start a new, unfinished document
		// 	});
		// 	console.log(newDoc);
		// 	res.status(201).send(newDoc); // Use 201 for created resource
		//   }
	} else {
	//   let doc = await Marks.findOneAndUpdate(
	// 	{ userid: user_id, paperid: paper_id },
	// 	{
	// 	  $inc: {
	// 		attempted: 1,
	// 		incorrect: 1,
	// 	  },
	// 	},
	// 	{ upsert: true },
	//   );
	//   console.log(doc);
	//   res.status(400).send(doc);
	const existingDoc = await Marks.findOne({ userid: user_id, paperid: paper_id, finished:false });

		if (!existingDoc || !existingDoc.finished) {
		  // Update existing document or create a new one if not found
		  let doc = await Marks.findOneAndUpdate(
			{ userid: user_id, paperid: paper_id },
			{
			  $inc: {
				attempted: 1,
				correct: 1,
			  },
			},
			{ upsert: true },
		  );
		  console.log(doc);
		  res.status(200).send(doc);
		}
	}
  });

// router.post("/createmarks", async (req, res) => {
// 	const { paper_id, user_id } = req.body;
// 	let doc = await Marks.findOneAndUpdate(
// 		{ userid: user_id, paperid: paper_id },
// 		{ marks: 0 },
// 		{ upsert: true },
// 		function (err, doc) {
// 			if (err) {
// 				throw err;
// 			} else {
// 				console.log(doc);
// 				res.status(200).send(doc);
// 			}
// 		}
// 	)
// 		.clone()
// 		.catch(function (err) {
// 			console.log(err);
// 		});
// });
router.post("/createmarks", async (req, res) => {
	const { paper_id, user_id } = req.body;
  
	const existingDoc = await Marks.findOne({
	  userid: user_id,
	  paperid: paper_id,
	  finished: false, // Only check for unfinished documents
	});
  
	if (!existingDoc) {
	  // Create a new document
	  const newDoc = await Marks.create({
		userid: user_id,
		paperid: paper_id,
		marks: 0,
	  });
	  console.log(newDoc);
	  res.status(201).send(newDoc); // Send 201 for created resource
	} else {
	  // Document already exists and is unfinished, no need to create a new one
	  console.log("Document already exists with finished=false:", existingDoc);
	  res.status(200).send(existingDoc); // Send 200 for existing document
	}
  });
  

router.post("/getmarks", async (req, res) => {
	const { user_id, paper_id } = req.body;
	const marks = await Marks.findOne({ userid: user_id, paperid: paper_id });
	if (marks) {
		res.status(200).send(marks);
	} else {
		res.status(400).send("No marks found");
	}
});

router.post("/countmarks", async (req, res) => {

    const {paper_id } = req.body;
    const questions = await Question.find({paper: paper_id });


    let sum = 0;
    questions.map((question) => {
        sum += question.marks;
    })
    console.log(sum, questions.length);
    // if (markstot>=0) {
    //     res.status(201).sendStatus(markstot);
    // } else {
    //     res.status(400).sendStatus("No marks found");
    // }
    res.status(200).json(sum)
})

module.exports = router;
