const express = require('express')
const mongoose = require('mongoose')

// give access to cookies, and to tell passport to use them
const cookieSession = require('cookie-session')
const passport = require('passport')

// keys kep in gitignored folder
const keys = require('./config/keys')

// require User.js first to make sure it exists before requiring passport
require('./models/User.js')
require('./services/passport')

// connect mongoose to some database
mongoose.connect(keys.mongoURI)

// create express app
const app = express()

// apply cookiesession middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

// apply initialize and session to express app
app.use(passport.initialize())
//extracts cookie data
app.use(passport.session())

// we import the exported functionfrom
// authRoutes and immediately run it, passing in app
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT)
