import cmmsStatic from '@/data/cmms/cmms-static'
import getUser from './getUser'

export default async function getUserSection(userId) {
  const user = await getUser(userId)
  try {
    const sec = cmmsStatic.sections.find((section) => section.id === user.sectionId)
    return sec
  } catch (error) {
    console.log('getUserSection - error: ', error)
  }
}
