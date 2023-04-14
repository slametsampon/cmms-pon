import data from '@/data/cmms/cmms-wo'

export default function getUser(userId) {
  const idInt = parseInt(userId, 10)
  return data.users.find((user) => user.id === idInt)?.name
}
