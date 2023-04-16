import UserView from '@/components/cmms/config/userView'
import data from '@/data/cmms/cmms-wo'
import { useRouter } from 'next/router'
import React from 'react'

export default function UserDetail() {
  const { query } = useRouter()
  const { id } = query
  let idInt = parseInt(id, 10)
  const user = data.users.find((x) => x.id === idInt)
  if (!user) {
    return <div>user Not Found</div>
  }
  return <UserView user={user}></UserView>
}
