import data from '@/data/cmms/cmms-wo'

export default function getDept(deptId) {
  const idInt = parseInt(deptId, 10)
  return data.depts.find((dept) => dept.id === idInt)?.name
}
