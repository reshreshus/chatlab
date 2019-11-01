const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const model = new Schema({
  name: { type: String }
})

module.exports = mongoose.model('user', model)
