import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticSectionsInDept(departmentId) {
  try {
    const fisrtFilter = cmmsStatic.sections.filter(
      (section) => section.departmentId >= departmentId
    )
    const finalFilter = fisrtFilter.filter((section) => section.departmentId < departmentId + 10)
    if (!finalFilter) {
      return { name: 'no name', description: 'no name' }
    }
    return finalFilter
  } catch (error) {
    console.log('getStaticSectionsInDept - error: ', error)
  }
}
