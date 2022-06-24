const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    Firstname: {
        type: String,
        required: [true, 'Please add a name']
    },
    Secondname: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)