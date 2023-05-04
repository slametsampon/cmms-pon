import Counter from 'models/Counter'
import db from 'utils/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res)
  } else if (req.method === 'PUT') {
    return putHandler(req, res)
  } else {
    return res.status(400).send({ message: 'Method not allowed' })
  }
}

const putHandler = async (req, res) => {
  try {
    const { query, body } = req
    // res.status(200).send({ message: 'loopback test', query, body })
    await db.connect()
    if (req.query?.sectionId !== 'undefined') {
      const result = await Counter.find({ sectionId: query?.sectionId })
      const counter = result[0]
      if (counter) {
        counter.prevMonth = req.body.prevMonth
        counter.workOrder = req.body.workOrder
        counter.swp = req.body.swp
        counter.jobTicket = req.body.jobTicket
        const result = await counter.save()
        await db.disconnect()
        res.status(200).send({ message: 'counter updated successfully', result })
      } else {
        await db.disconnect()
        res.status(404).send({ message: 'putHandler - counter not found', query })
      }
    }
  } catch (error) {
    console.log('putHandler -  error: ', error)
    res.send({ message: 'updateCounter-putHandler - error : ', error })
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const counters = await Counter.find()
    await db.disconnect()
    res.status(200).send(counters)
  } catch (error) {
    console.log('getHandler - error: ', error)
    res.send({ message: 'updateCounter-getHandler - error : ' + error })
  }
}

export default handler
