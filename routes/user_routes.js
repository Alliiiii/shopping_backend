const router=require('express').Router()
const {signup}=require('../controllers/auth_controller')

//user auth routes
router.post("/signup",signup)

module.exports=router
