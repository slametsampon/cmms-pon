import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticDepartment(departmentId) {
  try {
    const result = cmmsStatic.departments.find((department) => department.id === departmentId)
    if (!result) {
      return { name: 'no name', description: 'no name' }
    }
    return result
  } catch (error) {
    console.log('getStaticDepartment - error: ', error)
  }
}
