const express = require('express');
const contactController = require('../controllers/contactController');
const authUserCheck = require('../middleware/AuthCheckByLocal');

const router = express.Router();

router.get('/',authUserCheck.authUserByStorage, contactController.index);
router.get('/add',authUserCheck.authUserByStorage, contactController.add);
router.post('/add/action',authUserCheck.authUserByStorage, contactController.addAction);
////
router.get('/temp',authUserCheck.authUserByStorage, contactController.templateSubmit);
router.post('/temp/action', contactController.templateSubmitAction);





module.exports = router;