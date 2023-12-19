const mongoose = require('mongoose')
const marksSchema = mongoose.Schema({
    paperid: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Paper'
    },
    userid: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    marks: {
        type: Number,
        default: 0
    },
    attempted: {
        type: Number,
        default:0
    },
    correct: {
        type: Number,
        default:0
    },
    incorrect: {
        type: Number,
        default:0
    },
    finished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Marks', marksSchema)