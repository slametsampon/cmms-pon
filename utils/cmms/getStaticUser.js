import cmmsStatic from '@/data/cmms/cmms-static'

export default async function getStaticUser(userId) {
  return cmmsStatic.users.find((user) => user.id === userId)
}
