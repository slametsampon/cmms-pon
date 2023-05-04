export default async function getPriority(priorityId) {
  try {
    const results = await fetch('/api/cmms/workOrder/priorities')
    const priorities = await results.json()
    const priority = priorities.find((priority) => priority.id === priorityId)
    if (priority) return priority
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getPriority - error: ', error)
  }
}
