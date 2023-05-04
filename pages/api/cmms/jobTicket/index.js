import Jobticket from 'models/JobTicket'
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
    console.log('handler - jobticket error: ', error)
  }
}

const postHandler = async (req, res) => {
  try {
    await db.connect()
    const newJobticket = new Jobticket({
      jtNumber: req.body.jtNumber,
      tagnumber: req.body.tagnumber,
      title: req.body.title,
      respSectionId: req.body.respSectionId,
      originatorId: req.body.originatorId,
      currentUserId: req.body.currentUserId,
      priorityId: req.body.priorityId,
      location: req.body.location,
      statusId: req.body.statusId,
      ref: req.body.ref,
      executor: req.body.executor,
      swpNumber: '',
      detailAction: '',
      detailTask: req.body.detailTask,
      detailSHE: req.body.detailSHE,
      scheduleDate: req.body.scheduleDate,
      executeDate: '',
    })
    const jobticket = await newJobticket.save()
    await db.disconnect()
    res.status(200).send({ message: 'Jobticket created successfully', jobticket })
  } catch (error) {
    console.log('postHandler - jobticket error: ', error)
  }
}

const getHandler = async (req, res) => {
  try {
    await db.connect()
    const jobtickets = await Jobticket.find()
    await db.disconnect()
    res.status(200).send(jobtickets)
  } catch (error) {
    console.log('getHandler - jobticket error: ', error)
  }
}

export default handler
