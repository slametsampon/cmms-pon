export default async function getUserSectionSptd(sectionId) {
  try {
    const apiEndPoint = '/api/cmms/organization/users'
    const apiBase = process.env.API_URL ? process.env.API_URL : ''
    const url = `${apiBase}${apiEndPoint}`
    console.log('getUserSectionSptd-url : ', url)
    console.log('getUserSectionSptd-sectionId: ', sectionId)
    const results = await fetch(`${apiBase}${apiEndPoint}`)
    const users = await results.json()
    const user = users.find((user) => user.levelId === 4) //level 4 for Sptd
    console.log('getUserSectionSptd-user: ', user)
    if (user) return user
    else return { name: 'no-name' }
  } catch (error) {
    console.log('getUserSectionSptd - error: ', error)
  }
}
