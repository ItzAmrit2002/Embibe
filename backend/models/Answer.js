const mongoose = require('mongoose')
const answerSchema = mongoose.Schema({
    paper: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Paper'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    
}, {
    timestamps: true,
})

module.exports = mongoose.model('Answer', answerSchema)