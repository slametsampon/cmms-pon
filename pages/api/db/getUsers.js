import User from 'models/User'
import db from 'utils/db'

const handler = async (req, res) => {
  db.connect()
  const users = await User.find()
  db.disconnect()
  res.status(200).send(JSON.stringify(users, null, 2))
}
export default handler
