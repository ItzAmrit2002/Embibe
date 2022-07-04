const router = require('express').Router();
const Paper = require('../models/Paper')
router.post('/createpaper', async (req, res) => {
    const {name, time, subject} = req.body;
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
    catch(err){
        console.log(err)
        res.status(400).send(err);
        return
    }
})

router.post('/getpaper', async (req, res) => {
    const id=req.body.id;
    try {
        const papers = await Paper.findById(id);
        res.json(papers);
        return 
    }
    catch(err){
        console.log(err)
        res.status(400).send(err);
        return
    }
})

module.exports = router;