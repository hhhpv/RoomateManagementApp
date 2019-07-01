//Require Modules
const express=require('express');
const router=express.Router();

//Handle requests
router.get('/',(req,res)=>{res.end('poll test')})

//exports
module.exports=router;