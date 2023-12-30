const router = require('express').Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {protect} = require('../middleware/authMiddleware')

router.post('/register', async (req, res) => {

    const {firstname, secondname, email, password} = req.body
    console.log(firstname + ' '  + secondname +' ' + email + ' ' + password)

    if(!firstname || !secondname || !email || !password){
        res.status(400).send("Please add all fields")
        return
        // throw new Error("Please add all fields")
    }

    const userExists = await User.findOne({email})
    if(userExists)
    {
        res.status(400).send("User already exists")
        return
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
        return
    }
})


router.post('/login', async(req,res) => {
    const {email, password} = req.body
    if(!email || !password)
    {
        res.status(400).send('Please enter all the fields')
        return

    }

    const userExists = await User.findOne({email})

    if(!userExists){
        res.status(400).send('Wrong email or password')
        return
    }

    const validPass = await bcrypt.compare(password, userExists.password)

    if(!validPass){
        res.status(400).send('Wrong password')
        return
    }
    const token = generateToken(userExists.id)
    res.status(200).json({
        _id: userExists.id,
        email: userExists.email,
        token: token,
        Firstname: userExists.Firstname,
        Secondname: userExists.Secondname,
        message: "Successfully logged in"
    })})

router.get('/getuser', protect, (req, res) => {
    res.status(200).json(req.user)
})
router.put('/changepassword', async (req, res) => {
    try {
      const { email, currentPassword, newPassword } = req.body;
  
      // Find user by email
      const userExists = await User.findOne({ email });
  
      if (!userExists) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare current password hash with provided password
      const validPass = await bcrypt.compare(currentPassword, userExists.password);
  
      if (!validPass) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate salt and hash the new password
  
      
  const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update user's password
      userExists.password = hashedPassword;
      await userExists.save();
  
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1d'
    })
}
module.exports = router;