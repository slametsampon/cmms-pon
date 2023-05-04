import User from 'models/User'
import db from 'utils/db'

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      return getHandler(req, res)
    } else if (req.method === 'POST') {
      return postHandler(req, res)
    } else {
      return res.status(400).send({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.log('handler - User error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - User error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const users = await User.find()
    await db.disconnect()
    res.status(200).send(users)
  } catch (error) {
    console.log('getHandler - User error: ', error)
  }
}

export default handler
