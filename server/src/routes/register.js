var express = require('express');
var router = express.Router();
const { userController } = require('../controllers/register.js');
//const register = require('../controllers/register');
const { body, validationResult } = require('express-validator/check');


router.post('/',(req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(response(false, errors.array()));
      }
      userController.create(req, res);
    }
  );

module.exports = router

