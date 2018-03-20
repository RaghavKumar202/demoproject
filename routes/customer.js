const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer');


/******************************Front Office*************************/
router.post('/register', customerController.register);


module.exports = router;