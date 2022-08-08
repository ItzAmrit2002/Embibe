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
    checkA: {
        type: Boolean,
        required: [true, 'Please add a Boolean value']
    },
    checkB: {
        type: Boolean,
        required: [true, 'Please add a Boolean value']
    },
    checkC: {
        type: Boolean,
        required: [true, 'Please add a Boolean value']
    },
    checkD: {
        type: Boolean,
        required: [true, 'Please add a boolean value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Answer', answerSchema)