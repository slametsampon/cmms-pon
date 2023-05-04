import Status from 'models/Status'
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
    console.log('handler - status error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - status error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const statuses = await Status.find()
    await db.disconnect()
    res.status(200).send(statuses)
  } catch (error) {
    console.log('getHandler - status error: ', error)
  }
}

export default handler
