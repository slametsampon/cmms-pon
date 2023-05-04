import { toast } from 'react-toastify'

export default async function updateCounter(sectionId, updateCounter) {
  try {
    const response = await fetch(`/api/cmms/counter/${sectionId}`, {
      method: 'PUT', // or 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateCounter),
    })
    toast.success('Counter updated successfully')
    console.log('updateCounter - response : ', response)
  } catch (error) {
    console.log('updateCounter - error : ', error, updateCounter)
  }
}
