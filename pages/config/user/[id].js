import UserView from '@/components/cmms/config/userView'
import getUser from '@/utils/cmms/getUser'
import React from 'react'

export async function getServerSideProps(params) {
  const { id } = params.query
  const user = await getUser(parseInt(id))

  return {
    props: {
      user: user,
    },
  }
}

export default function UserDetail(props) {
  const { user } = props
  if (!user) {
    return <div>user Not Found</div>
  }
  return <UserView user={user}></UserView>
}
