var express = require('express');
var router = express.Router();
const { registerController } = require('../controllers/register');

router.get('/', (req, res, next) => {
    res.send("hello")
    console.log('aku dis')
})


module.exports = router;