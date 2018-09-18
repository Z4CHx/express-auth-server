// these are pulled from your production environment, such as Heroku
// duplicate this with dev keys  as dev.js when starting this project
  module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID ,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
  }
