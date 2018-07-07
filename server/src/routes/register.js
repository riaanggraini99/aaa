var express = require('express');
var router = express.Router();
const userController  = require('../controllers/register.js');
//const register = require('../controllers/register');
//const { body, validationResult } = require('express-validator/check');


router.post('/', userController.register)



module.exports = router;

