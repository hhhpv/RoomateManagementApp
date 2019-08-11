//Require Modules
const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../Controller/authController');

//Handle requests
router.post('/', authController.auth);


//exports
module.exports = router;