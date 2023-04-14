import data from '@/data/cmms/cmms-wo'
import db from 'utils/db'
import WorkOrder from 'models/WorkOrder'
import Status from 'models/Status'
import Jobticket from 'models/JobTicket'
import Priority from 'models/Priority'

const handler = async (req, res) => {
  await db.connect()
  await WorkOrder.deleteMany()
  await WorkOrder.insertMany(data.workOrders)
  await Status.deleteMany()
  await Status.insertMany(data.actions)
  await Jobticket.deleteMany()
  await Jobticket.insertMany(data.jobTickets)
  await Priority.deleteMany()
  await Priority.insertMany(data.priorities)
  await db.disconnect()
  res.send({ message: 'workorders, status, jobtickets, priorities seeded successfully' })
}
export default handler
