//Require Modules
const express = require('express');
const router = express.Router();

//Controllers
const loginController = require('../Controller/loginController');

//Handle requests
router.get('/room-login', loginController.login);
// router.get('/room-logout', loginController.logout);//Not required while using jwt
router.get('/', (req, res) => { res.end('Login test') })


//exports
module.exports = router;