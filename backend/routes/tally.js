const router = require("express").Router();
const Marks = require("../models/Marks");
const Paper = require('../models/Paper')
const User = require('../models/User')
const Answer = require('../models/Answer')
const Question = require('../models/Question')

router.post("/tallymarks", async (req, res) => {
    const { paper_id, user_id, checkA, checkB, checkC, checkD, question_id} = req.body
    const ques = await Question.findById(question_id);
    console.log(ques);
    if(ques.checkA == checkA && ques.checkB == checkB && ques.checkC == checkC && ques.checkD == checkD){
        const marks = await Marks.find({userid : user_id,paperid : paper_id})
        let doc = await Marks.findOneAndUpdate({userid : user_id,paperid : paper_id}, {marks : marks.marks + ques.marks}, {upsert: true}, function (err, doc) {
            if(err){
                console.log(err)
            }
            else{
                console.log(doc)
                res.status(200).send(doc)
            }
        });
    }
    else{
        res.status(400).send("wrong answer")
    }
});

module.exports = router