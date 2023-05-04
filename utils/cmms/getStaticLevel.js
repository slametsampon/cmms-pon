import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticLevel(levelId) {
  try {
    const result = cmmsStatic.levels.find((level) => level.id === levelId)
    if (!result) {
      return { name: 'no name', description: 'no name' }
    }
    return result
  } catch (error) {
    console.log('getStaticLevel - error: ', error)
  }
}
