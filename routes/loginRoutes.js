//Require Modules
const express=require('express');
const router=express.Router();

//Handle requests
router.get('/',(req,res)=>{res.end('Login test')})


//exports
module.exports=router;