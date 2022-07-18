const express = require('express');
const cronController = require('../controllers/cronCrontroller');
//middleware
const authUserCheck = require('../middleware/AuthCheckByLocal');

const router = express.Router();

router.get('/', cronController.cronBirthday);

module.exports = router;