//Require Modules
const express = require('express');
const router = express.Router();
const profileController = require('../Controller/profileController');
const auth = require('../routes/authorize');

//Handle requests
router.get('/get-bill-category', profileController.get_bill_category);
//router.post('/add-bill-category');    //future reference
router.get('/add-shared-expense', profileController.add_shared_expense);
router.get('/delete-shared-expense', profileController.delete_shared_expense);
router.get('/view/profile', profileController.view_profile);
router.get('/view/monthly-expense', profileController.view_monthly_expense);
router.get('/view/polls', profileController.view_polls);
router.get('/approve-polls', profileController.approve_polls);
router.get('/', auth, (req, res) => { res.end('profile test') });


//exports
module.exports = router;