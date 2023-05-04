import WorkOrder from 'models/WorkOrder'
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
    console.log('handler - workOrder error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('postHandler - workOrder error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const workOrders = await WorkOrder.find()
    await db.disconnect()
    res.status(200).send(workOrders)
  } catch (error) {
    console.log('getHandler - workOrder error: ', error)
  }
}

export default handler
