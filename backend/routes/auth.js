const router = require('express').Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {protect} = require('../middleware/authMiddleware')

router.post('/register', async (req, res) => {

    const {firstname, secondname, email, password} = req.body

    if(!firstname || !secondname || !email || !password){
        res.status(400).send("Please add all fields")
        // throw new Error("Please add all fields")
    }
    const userExists = await User.findOne({email})
    if(userExists)
    {
        res.status(400).send("User already exists")
        // throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try{
        const user = new User({
            Firstname: firstname,
            Secondname: secondname,
            email: email,
            password: hashedPassword
        })
        const savedUser = await user.save()
        res.status(201).json({
            _id: user.id,
            email: user.email,
            token: generateToken(user.id),
        })
        // res.status(200).send(savedUser)
    }
    catch(err){
        console.log(err)
        res.status(400).send(err);
    }
})

router.post('/login', async(req,res) => {
    const {email, password} = req.body
    if(!email || !password)
    {
        res.status(400).send('Please enter all the fields')

    }

    const userExists = await User.findOne({email})

    if(!userExists){
        res.status(400).send('Wrong email or password')
    }

    const validPass = await bcrypt.compare(password, userExists.password)

    if(!validPass){
        res.status(400).send('Wrong password')
    }
    const token = generateToken(userExists.id)
    res.json({
        _id: userExists.id,
        email: userExists.email,
        token: token,
        message: "Successfully logged in"
    })})

router.get('/getuser', protect, (req, res) => {
    res.status(200).json(req.user)
})
//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '2d'
    })
}
module.exports = router;