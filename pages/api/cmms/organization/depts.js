import Dept from 'models/Department'
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
    console.log('handler - dept error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - dept error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const depts = await Dept.find({ id: req.query.id })
    await db.disconnect()
    res.status(200).send(depts)
  } catch (error) {
    console.log('getHandler - dept error: ', error)
  }
}

export default handler
