const mongoose = require('mongoose')
const Schema = mongoose.Schema

const model = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }]
})

module.exports = mongoose.model('chat', model)
