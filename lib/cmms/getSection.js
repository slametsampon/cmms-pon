import data from '@/data/cmms/cmms-wo'

export default function getSection(sectionId) {
  const idInt = parseInt(sectionId, 10)
  return data.sectionsResp.find((section) => section.id === idInt)?.name
}
