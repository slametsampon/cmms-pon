import data from '@/data/cmms/cmms-wo'

export default function getStatus(statusId) {
  const idInt = parseInt(statusId, 10)
  return data.actions.find((action) => action.id === idInt)?.name
}
