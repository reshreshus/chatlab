const express = require('express')
const router = express.Router()
const Chat = require('../models/chatModel')
const User = require('../models/userModel')
const Message = require('../models/messageModel')

/* GET chat messages. */
router.get('/', async (req, res) => {
  const chats = await Chat.find({})
  res.json({ chats });
})

router.get('/:id', async (req, res) => {
  const chat = await Chat.findById(req.params.id)
  const messages = Message.find({ chat: chat._id })
  res.json({ messages })
})

router.post('/:id', async (req, res) => {
  const chat = await Chat.findById(req.params.id)
  const user = await User.find({
    name: req.body.name
  })

  const newMsg = new Message({
    chat: chat._id,
    sender: user._id,
    text: req.body.text
  })

  await newMsg.save()
  res.json({ status: 'ok yep' })
})

module.exports = router
