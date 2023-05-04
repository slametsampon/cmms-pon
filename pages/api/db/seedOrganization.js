import User from 'models/User'
import db from 'utils/db'
import SWP from 'models/SWP'
import dataJob from '@/data/cmms/cmms-wo'

const handler = async (req, res) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(dataJob.users)
  await db.disconnect()
  res.send({ message: 'users seeded successfully' })
}
export default handler
