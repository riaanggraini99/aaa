var express = require('express');
var router = express.Router();

// router.get('/', (req, res) => {
//     res.send({ 
//         message :`hello your user was registered`
//     })
//     console.log("why")
    
// })

router.post('/', (req, res) => {
    res.send({ 
        message :`hello ${req.body.email} your user was registered`
    })
    console.log("user added")
})


module.exports = router;