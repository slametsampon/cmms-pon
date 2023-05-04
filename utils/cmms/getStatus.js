export default async function getStatus(statusId) {
  try {
    const results = await fetch('/api/cmms/workOrder/statuses')
    const priorities = await results.json()
    const status = priorities.find((status) => status.id === statusId)
    if (status) return status
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getStatus - error: ', error)
  }
}
