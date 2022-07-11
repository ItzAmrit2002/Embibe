const router = require('express').Router();
const Paper = require('../models/Paper')
const Question = require('../models/Question')

router.get('/givepaper', async (req, res) => {
    const count = Paper.countDocuments( function(err, c) {
        console.log('Count is ' + c);
        res.status(200).json(c);
        return;
   });
})

router.get('/getpapers', async(req, res) => {
    const papers = await Paper.find();
    if (!papers) {
        res.status(404).json({ message: 'Papers not found' });
        return;
    }
    res.json(papers);
})

module.exports = router;