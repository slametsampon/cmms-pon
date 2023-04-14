import User from 'models/User'
import db from 'utils/db'

const handler = async (req, res) => {
  const query = req.query
  const { name } = query
  db.connect()
  const user = await User.findOne({ name: name }).exec()
  db.disconnect()
  res.status(200).send(JSON.stringify(user, null, 2))
}
export default handler
