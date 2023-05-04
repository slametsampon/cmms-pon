import Jobticket from 'models/JobTicket'
import db from 'utils/db'

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      return getHandler(req, res)
    } else if (req.method === 'PUT') {
      return putHandler(req, res)
    } else {
      return res.status(400).send({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.log('handler - jobTicket error: ', error)
  }
}

const putHandler = async (req, res) => {
  try {
    var rawAction = []
    await db.connect()
    const result = await Jobticket.find({ jtNumber: req.query.jtNumber })
    const jobticket = result[0]
    console.log('putHandler-req.query : ', req.query)
    console.log('putHandler-jobticket : ', jobticket)
    if (jobticket) {
      //construct detail Action
      rawAction = req.body.detailAction
      //header 2 : executor : status
      rawAction.unshift(`${req.body.executor} : ${req.body.status}`)

      //header 1 : Date : SWP put in first record
      rawAction.unshift(`${req.body.executeDate} : ${req.body.swpNumber}`)

      rawAction.push('----end----')

      //append to previous actions
      rawAction.map((action) => jobticket.detailAction.push(action))
      jobticket.executor = req.body.executor
      jobticket.executeDate = req.body.executeDate
      jobticket.swpNumber = req.body.swpNumber
      jobticket.statusId = req.body.statusId
      jobticket.currentUserId = req.body.currentUserId

      const result = await jobticket.save()
      await db.disconnect()
      res.status(200).send({ message: 'Jobticket updated successfully', result })
    } else {
      await db.disconnect()
      res.status(404).send({ message: 'Jobticket not found' })
    }
  } catch (error) {
    console.log('putHandler - jobTicket error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const jobtickets = await Jobticket.find({ jtNumber: req.query.jtNumber })
    await db.disconnect()
    res.status(200).send(jobtickets)
  } catch (error) {
    console.log('getHandler - jobTicket error: ', error)
  }
}

export default handler
