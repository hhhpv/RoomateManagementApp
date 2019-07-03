//Require Modules
const express = require('express');
const router = express.Router();

//Controllers
const SignUpController = require('../Controller/SignUp');

//Handle requests
router.get('/admin', SignUpController.admin);
router.get('/user', SignUpController.user);

//exports
module.exports = router;