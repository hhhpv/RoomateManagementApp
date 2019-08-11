//Require Modules
const express = require('express');
const router = express.Router();

//Controllers
const SignUpController = require('../Controller/SignUp');

//Handle requests
router.post('/admin', SignUpController.admin);
router.post('/user', SignUpController.user);

//exports
module.exports = router;