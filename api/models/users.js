const mongoose = require('mongoose')

let Users = new mongoose.Schema({

  name: String

})

module.exports = mongoose.model('Users', Users)
