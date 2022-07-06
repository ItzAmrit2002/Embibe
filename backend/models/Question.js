const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    paper: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Paper'
    },
    question_dsc: {
        type: String,
        required: [true, 'Please add a text value']
    },
    optionA: {
        type: String,
        required: [true, 'Please add a text value']
    },
    optionB: {
        type: String,
        required: [true, 'Please add a text value']
    },
    optionC: {
        type: String,
        required: [true, 'Please add a text value']
    },
    optionD: {
        type: String,
        required: [true, 'Please add a text value']
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
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Question', questionSchema)