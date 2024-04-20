const monoosge=require('mongoose')

const userSchema=monoosge.Schema({
    user_name:{
        type:String,
        trim:true,
        defualt:null
    },
    user_email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true
    }})

    const User=monoosge.model("User",userSchema)
    module.exports={User}