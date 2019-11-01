const mongoose = require('mongoose')
const Schema = mongoose.Schema

const model = new Schema({
  chat: { type: Schema.Types.ObjectId, ref: 'chat' },
  sender: { type: String },
  text: { type: String }
})

module.exports = mongoose.model('message', model)
