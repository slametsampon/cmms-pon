import WorkOrder from 'models/WorkOrder'
import db from 'utils/db'

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      return getHandler(req, res)
    } else if (req.method === 'PUT') {
      return postHandler(req, res)
    } else {
      return res.status(400).send({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.log('handler - wororder error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - wororder error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const workOrder = await WorkOrder.find({ woNumber: req.query.woNumber })
    await db.disconnect()
    res.status(200).send(workOrder)
  } catch (error) {
    console.log('getHandler - wororder error: ', error)
  }
}

export default handler
