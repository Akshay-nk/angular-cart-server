const users=require('../model/userModel')
const jwt =require('jsonwebtoken')


exports.registerController=async(req,res)=>{
    const {username,email,password}=req.body;

    try {

        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(401).json("user already exists please try again")
        }
        else{
            const newUser= new users(
                {
                    username,email,password
                })
                await newUser.save()
                res.status(200).json(newUser)
            }
        
    } catch (err) {
        res.status(401).json(err)
    }
}


exports.loginController=async(req,res)=>{
    const{email,password}=req.body
   console.log("inside login");
    try {
        const existingUser=await users.findOne({email,password})

        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({token,existingUser})
        }else{
            res.status(401).json("Invalid email or password")
        }

        
    } catch (err) {
        res.status(404).json(err)
    }
}