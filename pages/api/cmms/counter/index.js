import Counter from 'models/Counter'
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
    console.log('handler - counter error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - counter error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const counters = await Counter.find()
    await db.disconnect()
    res.status(200).send(counters)
  } catch (error) {
    console.log('getHandler -counters error: ', error)
  }
}

export default handler
