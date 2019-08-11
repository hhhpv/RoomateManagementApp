//Require Modules
const express = require('express');
const router = express.Router();
const profileController = require('../Controller/profileController');
const auth = require('../routes/authorize');

//Handle requests
router.post('/get-bill-category', profileController.get_bill_category);
//router.post('/add-bill-category');    //future reference
router.post('/get-room-mates',profileController.get_room_mates);
router.post('/add-shared-expense', profileController.add_shared_expense);
router.post('/delete-shared-expense', profileController.delete_shared_expense);
router.post('/view/profile', profileController.view_profile);
router.post('/view/monthly-expense', profileController.view_monthly_expense);
router.post('/view/polls', profileController.view_polls);   //future scope
router.post('/approve-polls', profileController.approve_polls); //future scope
router.post('/', auth, (req, res) => { res.end('profile test') });


//exports
module.exports = router;