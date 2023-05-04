export default async function getSection(sectionId) {
  try {
    const results = await fetch('/api/cmms/organization/sections')
    const sections = await results.json()
    const section = sections.find((section) => section.id === sectionId)
    if (section) return section
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getSection - error: ', error)
  }
}
