const { json } = require('body-parser')
const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()


mongoose.connect( process.env.MONGO, () => {

console.log('connected to MongoDB server')
})

const authRoute = require('./routes/auth')

const port = process.env.PORT || 3500
app.use(express.json())
app.use(express.urlencoded({extended: "false"}))


app.use('/api/user', authRoute)

app.listen(port, ()=> {
    console.log("server running on port: ", port)
})