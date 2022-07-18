const express = require('express');
const userController = require('../controllers/userController');
//middleware
const authUserCheck = require('../middleware/AuthCheckByLocal');

const router = express.Router();

router.get('/signup', userController.signup);
router.post('/signup/action', userController.signupAction);

router.get('/login', userController.login);
router.post('/login/action', userController.loginAction);

router.get('/user/profile',authUserCheck.authUserByStorage, userController.profile);
router.post('/user/profile/action',authUserCheck.authUserByStorage, userController.profileUpdate);

router.get('/logout',authUserCheck.authUserByStorage, userController.logout);

module.exports = router;