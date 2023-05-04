import CmmsLayout from '@/layouts/CmmsLayout'
import UserList from '@/components/cmms/config/userList'
import { useEffect, useReducer } from 'react'
import { getError } from '@/utils/error'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST_USER':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_USER':
      return { ...state, loading: false, users: action.payload, error: '' }
    case 'FETCH_FAIL_USER':
      return { ...state, loading: false, error: action.payload }

    default:
      state
  }
}

export default function UserListPage() {
  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    loading: true,
    users: [],
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_USER' })
        const results = await fetch('/api/cmms/organization/users')
        const data = await results.json()
        dispatch({ type: 'FETCH_SUCCESS_USER', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_USER', payload: getError(err) })
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <CmmsLayout title="User" description="User Page">
        <div className="mt-5">
          <h1 className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
            User List
          </h1>
          <UserList users={users}></UserList>
        </div>
      </CmmsLayout>
    </>
  )
}
UserListPage.auth = true
