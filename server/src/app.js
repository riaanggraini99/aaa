const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
var cookieParser = require('cookie-parser')
const {sequelize} = require('./models')
const config = require('./config/config')

var routes 	= 	require('./routes/index');
var register = require('./routes/register')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// load the cookie-parsing middleware
app.use(cookieParser())


app.use('/', routes);
app.use('/register', register)



sequelize.sync()
    .then(() =>{

        //app.listen(process.env.PORT || 8081)
        app.listen(config.port)
        console.log(`server started on port ${config.port}`)
    })

module.exports = app;