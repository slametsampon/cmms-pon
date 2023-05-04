import getUser from './getUser'
import getStaticStatus from './getStaticStatus'
import getStaticLevel from './getStaticLevel'
import getUserSectionSptd from './getUserSectionSptd'

export default async function getNextUserJobticket(jtSummary) {
  //deconstruct input
  const { statusId, currentUserId, originatorId, respSectionId } = jtSummary

  const status = await getStaticStatus(statusId)
  if (!status || status.name === 'no name') {
    return { name: 'no name' }
  }
  const currentUser = await getUser(currentUserId)
  const currentUserLevel = await getStaticLevel(currentUser.levelId)
  switch (status.name) {
    case 'RequestToOpen':
      //forward to superordinate - from spv to sptd
      return await getUser(currentUser.forwardUserId)
    case 'Open':
      //if internal-section - to subordinate
      if (respSectionId === currentUser.sectionId) {
        if (currentUserLevel.name === 'MGR' || currentUserLevel.name === 'SPD') {
          return await getUser(currentUser.forwardUserId)
        } else {
          //if different section, internal dept
          return await getUserSectionSptd(respSectionId)
        }
      } else {
        return { name: 'no name' }
      }
    case 'Close':
      //no-change - currentUser for all level
      return currentUser
    case 'Complete':
      //no-change - currentUser for all level
      return await getUser(originatorId)
    case 'ReadyToComplete':
      //reverse to superordinate
      return await getUser(currentUser.reverseUserId)
    case 'Finish':
      //if Foreman forward to superordinate
      if (currentUserLevel.name === 'FRM') return await getUser(currentUser.reverseUserId)

      //if eng, spv, spd back to originator
      if (
        currentUserLevel.name === 'ENG' ||
        currentUserLevel.name === 'SPV' ||
        currentUserLevel.name === 'SPD'
      ) {
        return await getUser(originatorId)
      }
      break
    case 'ReadyToSchedule':
      //forward to subordinate - from Sptd to spv
      return await getUser(currentUser.forwardUserId)
    case 'Schedule':
      //if eng, spv, spd no-change - currentUser for all level & will filter on dashboard
      if (
        currentUserLevel.name === 'ENG' ||
        currentUserLevel.name === 'SPV' ||
        currentUserLevel.name === 'SPD'
      ) {
        return await getUser(currentUser.originatorId)
      }
      break
    case 'Inprogress':
      //no-change - currentUser for all level
      return currentUser
    case 'Reject':
    case 'Cancel':
    case 'NeedShutdown':
    case 'NeedMaterials':
    case 'NeedMOC':
    case 'NeedRegulations':
      //if Foreman or engineer reverse to superordinate
      if (currentUserLevel.name === 'FRM' || currentUserLevel.name === 'ENG') {
        return await getUser(currentUser.reverseUserId)
      }
      //if spv, spd no-change - currentUser for all level
      if (currentUserLevel.name === 'SPV' || currentUserLevel.name === 'SPD') {
        return await getUser(currentUser.currentUserId)
      }
      break
    default:
      return { name: 'no name' }
  }
}
