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
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Marks', marksSchema)