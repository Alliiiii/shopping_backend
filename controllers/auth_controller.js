const {User} =require('../models/user') 

//sign up
const signup=async(req,res)=>{
    console.log("epi call")
    try{
        userName=req.body.user_name    
    userEmail=req.body.user_email 
    const newUser=User({
        user_name:userName,
        user_email:userEmail
    }) 
    await newUser.save() 
    return res.status(200).json({
        status:1,
        message:"Account created sucessfully",
        data:newUser
    })
    }
    catch(e){
        return res.status(500).json({
            status:0,
            message:e.message
        })


    }
}

module.exports={signup}
