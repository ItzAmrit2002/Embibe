const mongoose = require('mongoose')
const goalSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please add a text value']
    },
    time: {
        type: Number,
        required: [true, 'Please add a time value']
    },
    subject: {
        type: String,
        required: [true, 'Please add a subject value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)