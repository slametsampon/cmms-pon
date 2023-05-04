import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticStatus(statusId) {
  try {
    const result = cmmsStatic.statuses.find((status) => status.id === statusId)
    if (!result) {
      return { name: 'no name', description: 'no name' }
    }
    return result
  } catch (error) {
    console.log('getStaticStatus - error: ', error)
  }
}
