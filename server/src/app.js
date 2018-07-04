const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
var cookieParser = require('cookie-parser')


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




app.listen(process.env.PORT || 8081)

module.exports = app;