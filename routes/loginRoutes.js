//Require Modules
const express=require('express');
const router=express.Router();

//Controllers
const adminController=require('../Controller/loginAdmin');
const userController=require('../Controller/loginUser');

//Handle requests
router.get('/admin-login',adminController.login);
router.get('/user-login',userController.login);
router.get('/admin-logout',adminController.logout);
router.get('/user-logout',userController.logout);
router.get('/',(req,res)=>{res.end('Login test')})


//exports
module.exports=router;