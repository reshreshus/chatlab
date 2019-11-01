const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Message = require('../models/messageModel')

/* GET chat messages. */
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.json({ users });
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json({ user })
})

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name
  })
  await user.save();
  res.json({ status: 'ok navernoe' });
})

module.exports = router
