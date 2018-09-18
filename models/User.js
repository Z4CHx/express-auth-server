const mongoose = require('mongoose')
// pulls the property called Schema and sets it to Schema
const { Schema } = mongoose

// define the Schema
const userSchema = new Schema ({
  googleID : String,
})

// define a new collection that is populated using the userSchema
mongoose.model('users',userSchema)
