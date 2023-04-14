import data from '@/data/cmms/cmms-wo'

export default function getPriority(priorityId) {
  const idInt = parseInt(priorityId, 10)
  return data.priorities.find((priority) => priority.id === idInt)?.name
}
