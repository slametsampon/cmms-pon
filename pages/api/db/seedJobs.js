import data from '@/data/cmms/cmms-wo'
import db from 'utils/db'
import WorkOrder from 'models/WorkOrder'
import Jobticket from 'models/JobTicket'
import Counter from 'models/Counter'

const handler = async (req, res) => {
  await db.connect()
  await WorkOrder.deleteMany()
  await WorkOrder.insertMany(data.workOrders)
  await Counter.deleteMany()
  await Counter.insertMany(data.counter)
  await Jobticket.deleteMany()
  await Jobticket.insertMany(data.jobTickets)
  await db.disconnect()
  res.send({ message: 'workorders, counter, jobtickets seeded successfully' })
}
export default handler
