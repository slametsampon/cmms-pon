import User from 'models/User'
import data from '@/data/cmms/cmms-wo'
import db from 'utils/db'
import Section from 'models/Section'
import Dept from 'models/Department'

const handler = async (req, res) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await Section.deleteMany()
  await Section.insertMany(data.sectionsResp)
  await Dept.deleteMany()
  await Dept.insertMany(data.depts)
  await Section.deleteMany()
  await Section.insertMany(data.sectionsResp)
  await db.disconnect()
  res.send({ message: 'users, sections, depts seeded successfully' })
}
export default handler
