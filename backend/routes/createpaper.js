const router = require('express').Router();
const Paper = require('../models/Paper')
const Question = require('../models/Question')
router.post('/createpaper', async (req, res) => {
    const { name, time, subject } = req.body;
    if (!name || !time || !subject) {
        res.status(400).send('Please enter all the fields');
        return;
    }
    try {
        const paper = new Paper({
            name: name,
            time: time,
            subject: subject
        });
        const savedPaper = await paper.save();
        res.status(201).json({
            _id: paper.id,
            name: paper.name,
            time: paper.time,
            subject: paper.subject
        });
        return
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);
        return
    }
})

router.post('/getpaper', async (req, res) => {
    const id = req.body.id;
    try {
        const papers = await Paper.findById(id);
        if (!papers) {
            res.status(404).json({ message: 'Paper not found' });
            return;
        }

        res.json(papers);

    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);
        return
    }
})


router.post('/addquestion', async (req, res) => {
    const { question_dsc, ansA, ansB, ansC, ansD, optionA, optionB, optionC, optionD, paperId, uid, marks } = req.body;

    if (!question_dsc || !ansA || !ansB || !paperId || !ansC || !ansD || !uid || !marks) {
        res.status(400).send('Please enter all the fields');
        return;
    }
    try {
        Question.findOneAndUpdate({ 'uid': uid }, { question_dsc: question_dsc, optionA: ansA, optionB: ansB, optionC: ansC, optionD: ansD, checkA: optionA, checkB: optionB, checkC: optionC, checkD: optionD, marks: marks }, { upsert: true }, function (err, doc) {
            if (err) {
                console.log(err)
                res.status(400).send(err);
                return
            }
            console.log("doc")
            console.log(doc)
        })
        const question = new Question({
            uid: uid,
            paper: paperId,
            question_dsc: question_dsc,
            optionA: ansA,
            optionB: ansB,
            optionC: ansC,
            optionD: ansD,
            checkA: optionA,
            checkB: optionB,
            checkC: optionC,
            checkD: optionD,
            marks: marks
        });
        //const savedQuestion = await question.save();
        res.status(201).json({
            _id: question.id,
            uid: question.uid,
            question: question.question_dsc,
            paperid: question.paperid
        });
        return
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);
        return
    }
})

module.exports = router;