const express =require("express")
const app=express()
const mongoose=require('mongoose')
const env=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')
env.config()


//mongo db conection
mongoose.connect(process.env.DB).then(()=>{
    console.log("hello mongoose connected")
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const apiRoutes=require('./routes/user_routes')
app.use('/api',apiRoutes)


const PORT=process.env.PORT||3055
app.listen(PORT,async()=>{
console.log(`server started ${PORT} `)
})

 
app.get("/",(req,res)=>{
    res.send({"message":"hello"})

})