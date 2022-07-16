const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/', contactController.index);
router.get('/add', contactController.add);
router.post('/add/action', contactController.addAction);
////
router.get('/temp', contactController.templateSubmit);
router.post('/temp/action', contactController.templateSubmitAction);




module.exports = router;