//Require Modules
const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../Controller/authController');

//Handle requests
router.get('/', authController.auth);


//exports
module.exports = router;