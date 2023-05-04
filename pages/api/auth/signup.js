import db from '@/utils/db'
import bcryptjs from 'bcryptjs'
import User from 'models/User'

async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }
  const { name, id, password } = req.body
  if (!name || !password || password.trim().length < 5) {
    res.status(422).json({
      message: 'Validation error',
    })
    return
  }

  await db.connect()

  const existingUser = await User.findOne({ id: id })
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' })
    await db.disconnect()
    return
  }

  const newUser = new User({
    name: name,
    id: id,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
    isActive: false,
  })

  const user = await newUser.save()
  await db.disconnect()
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    name: user.name,
    id: user.id,
    isAdmin: user.isAdmin,
  })
}

export default handler
