const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')



//Registation
const registerUser = asyncHandler(async (req, res)=> {
    const { userName, email, password} = req.body;
    if(!userName || !email|| !password){
        res.status(400)
        throw new Error('please add in all fields')
    }

    //checks if user exists
    const userExists = await User.findOne({email})
    //console.log(hashPW(req.body.password.toString()));
    
    if(userExists){
        res.status(400)
        throw new Error('user already exists, please sign in with your email')
    }

    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        userName,
        email,
        password: hashedPassword,
       
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            userName: user.userName,
            email: user.email,
            password: hashedPassword,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
   
})



const loginUser = asyncHandler(async(req, res)=> {
    const { email, password} = req.body;


    //checking for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            userName: user.userName,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
           
        })
        console.log('youre in')
    }else{
        res.status(400)
        throw new Error( "invalid Credentials")
    }
   
}) 

//gets user data
// private route

const getProfile = asyncHandler(async(req, res)=> {
    const {_id, userName, email, } = await User.findById(req.user.id)
    res.status(200).json({
        id : _id,
        userName,
        email,
    })
   
})


//Generate JW Token jtw.io

const generateToken = (id)=>{
    return jwt.sign( {id}, process.env.JWT_SECRET, {
        expiresIn: '60d'
    } )
}




module.exports = {
    registerUser,
    loginUser,
    getProfile
}