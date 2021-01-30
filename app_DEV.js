if(process.env.NODE_ENV != 'production'){
  require('dotenv').config();
}


var express = require('express')
var app = express();
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var cookieParser = require('cookie-parser');


// middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))


// cookies
const session_keys = process.env.SESSION_KEYS.split(',');
app.use(cookieSession({
  name: 'session',
  keys: [session_keys[0], session_keys[1]],
  maxAge: 24 * 60 * 60 * 1000 * 90 // 24 hours * 90 = 90 days (3 months)
}))

// ejs view engine.
app.set('view engine', 'ejs')


// ROUTES
const login = require('./routes/users/login');
const logout = require('./routes/users/logout');
const register = require('./routes/users/register');
const welcome = require('./routes/users/welcome');

app.use(login);
app.use(logout);
app.use(register);
app.use(welcome);




app.listen('3000', () => {
  console.log('listening')
})


