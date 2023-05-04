import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticPriority(priorityId) {
  try {
    const result = cmmsStatic.priorities.find((priority) => priority.id === priorityId)
    if (!result) {
      return { name: 'no name', description: 'no name' }
    }
    return result
  } catch (error) {
    console.log('getStaticPriority - error: ', error)
  }
}
