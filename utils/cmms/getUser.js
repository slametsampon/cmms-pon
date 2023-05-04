export default async function getUser(userId) {
  try {
    const apiEndPoint = '/api/cmms/organization/users'
    const apiBase = process.env.API_URL ? process.env.API_URL : ''
    const url = `${apiBase}${apiEndPoint}`
    console.log('getUser-url : ', url)
    console.log('getUser-userId: ', userId)
    const results = await fetch(`${apiBase}${apiEndPoint}`)
    const users = await results.json()
    const user = users.find((user) => user.id === userId)
    console.log('getUser-user: ', user)
    if (user) return user
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getUser - error: ', error)
  }
}
