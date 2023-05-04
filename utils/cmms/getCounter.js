export default async function getCounter(sectionId) {
  try {
    const results = await fetch('/api/cmms/counter')
    const counters = await results.json()
    const counter = counters.find((counter) => counter.sectionId === sectionId)
    if (counter) return counter
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getCounter - Find counter error: ', error)
  }
}
