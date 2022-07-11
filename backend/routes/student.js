const router = require('express').Router();
const Paper = require('../models/Paper')
const Question = require('../models/Question')

router.get('/givepaper', async (req, res) => {
    const count = Paper.countDocuments(function (err, c) {
        console.log('Count is ' + c);
        res.status(200).json(c);
        return;
    });
})

router.get('/getpapers', async (req, res) => {
    const papers = await Paper.find();
    const questions = await Question.find();
    var marks;
    if (!papers) {
        res.status(404).json({ message: 'Papers not found' });
        return;
    }
    let markstot
    await Question.aggregate([{ $match: {} }, {
        $group:
        {
            _id: "$paper", total: {
                $sum: "$marks"
            }
        }
    }])
        .then((rep) => {
            markstot = rep
            Question.aggregate([
                { $match: {} },
                { $group: { _id: '$paper', n: { $sum: 1 } } }
            ]).then((rex) => {
                res.json({ papers, markstot, rex })
            })
        });


    return;
})
//run loop to get total marks of each paper, concat that with papers response in json and send
module.exports = router;