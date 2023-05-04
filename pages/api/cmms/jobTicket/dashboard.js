import Jobticket from 'models/JobTicket'
import db from 'utils/db'

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      return getHandler(req, res)
    } else {
      return res.status(400).send({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.log('handler - jobticket error: ', error)
  }
}

const getHandler = async (req, res) => {
  //get user => sectionId, levelId
  const { query } = req
  console.log('dashboard-getHandler-query : ', query)
  const userString = query.user
  console.log('dashboard-getHandler-userString : ', userString)
  const user = JSON.parse(userString)
  console.log('dashboard-getHandler-user : ', user)
  console.log('dashboard-getHandler-user?.sectionId : ', user?.sectionId)
  //building filter
  /**  
   levels: [
    { id: 0, name: 'Select...', description: 'Select Level' },
    { id: 1, name: 'FRM', description: 'Foreman' },
    { id: 2, name: 'ENG', description: 'Engineer' },
    { id: 3, name: 'SPV', description: 'Supervisor' },
    { id: 4, name: 'SPD', description: 'Superintendent' },
    { id: 5, name: 'MGR', description: 'Manager' },
  ],
  statuses: [
    { id: 0, name: 'Select...', description: 'Select status', mode_id: 2 },
    { id: 1, name: 'Close', description: 'Has been completed', mode_id: 2 },
    { id: 2, name: 'Open', description: 'Just opening', mode_id: 1 },
    { id: 3, name: 'Approve', description: 'Approved', mode_id: 1 },
    { id: 4, name: 'Reject', description: 'Rejected due to any reasons', mode_id: 2 },
    { id: 5, name: 'Cancel', description: 'Canceled during execution', mode_id: 2 },
    { id: 6, name: 'Complete', description: 'Complete', mode_id: 1 },
    { id: 7, name: 'Need shutdown', description: 'Need shutdown', mode_id: 3 },
    { id: 8, name: 'Need materials', description: 'Need materials', mode_id: 3 },
    { id: 9, name: 'Need MOC', description: 'Need MOC', mode_id: 3 },
    { id: 10, name: 'Need Regulations', description: 'Need Regulations', mode_id: 3 },
    { id: 11, name: 'Schedule', description: 'Scheduled', mode_id: 1 },
    { id: 12, name: 'In progress', description: 'In progress', mode_id: 3 },
    { id: 13, name: 'Finish', description: 'Just finishing', mode_id: 2 },
  ],
 */
  try {
    var queryFilter = {}
    switch (user.levelId) {
      case 1: //foreman
        queryFilter = {
          respSectionId: user?.sectionId,
          $and: [{ statusId: { $gte: 11 } }, { statusId: { $lte: 12 } }],
        }
        break
      case 2: //engineer
        queryFilter = { respSectionId: user?.sectionId, statusId: { $gte: 6 } }
        break
      case 3: //supervisor
        queryFilter = {
          $or: [
            {
              $and: [{ statusId: { $gte: 2 } }, { statusId: { $lte: 10 } }],
            },
            { statusId: { $gte: 13 } },
          ],
        }
        break
      case 4: //superintendent
        queryFilter = {
          $or: [
            {
              $and: [{ statusId: { $gte: 2 } }, { statusId: { $lte: 10 } }],
            },
            { statusId: { $gte: 13 } },
          ],
        }
        break
      case 5: //manager
        queryFilter = {
          $or: [
            {
              $and: [{ statusId: { $gte: 2 } }, { statusId: { $lte: 10 } }],
            },
            { statusId: { $gte: 13 } },
          ],
        }
        break
      default:
        queryFilter = { respSectionId: user?.sectionId }
    }
    await db.connect()
    const jobtickets = await Jobticket.find(queryFilter).exec()
    await db.disconnect()
    res.status(200).send(jobtickets)
  } catch (error) {
    console.log('getHandler - jobticket error: ', error)
    res.status(404).send({ message: 'jobtickets not found' })
  }
}

export default handler
