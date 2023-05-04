import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticSection(sectionId) {
  try {
    const sec = cmmsStatic.sections.find((section) => section.id === sectionId)
    if (!sec) {
      return { name: 'no name', description: 'no name' }
    }
    return sec
  } catch (error) {
    console.log('getStaticSection - error: ', error)
  }
}
