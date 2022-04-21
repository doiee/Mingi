const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  userID: {type: Number, required: true},
  jihearts: {type: Number, required: true} 
})

module.exports = mongoose.model('Profile', profileSchema)