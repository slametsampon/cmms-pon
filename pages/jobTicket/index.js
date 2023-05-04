import CmmsLayout from '@/layouts/CmmsLayout'
import shift from 'utils/shift'
import { useEffect, useReducer, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getError } from 'utils/error'
import DashboardTicket from '@/components/cmms/jobTicket/dashboardTicket'
import getUser from '@/utils/cmms/getUser'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST_JT':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_JT':
      return { ...state, loading: false, jobTickets: action.payload, error: '' }
    case 'FETCH_FAIL_JT':
      return { ...state, loading: false, error: action.payload }

    case 'FETCH_REQUEST_USER':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_USER':
      return { ...state, loading: false, dashboardUser: action.payload, error: '' }
    case 'FETCH_FAIL_USER':
      return { ...state, loading: false, error: action.payload }

    default:
      state
  }
}

export default function DashboardPage() {
  const { status, data: session } = useSession()
  const [{ loading, error, jobTickets, dashboardUser }, dispatch] = useReducer(reducer, {
    loading: true,
    jobTickets: [],
    dashboardUser: {},
    error: '',
  })

  //get user from session
  const user = session?.user
  const userProfile = useRef({})

  console.log('render-user : ', user)

  useEffect(() => {
    //get dashboardUser
    const fetchDasboardUser = async (userId) => {
      console.log('RUNNING-fetchDasboardUser')
      try {
        dispatch({ type: 'FETCH_REQUEST_USER' })
        const data = await getUser(userId)
        //userProfile set after user data ready
        console.log('userProfile set')
        userProfile.current.sectionId = data.sectionId
        userProfile.current.levelId = data.levelId
        console.log('fetchDasboardUser-data : ', data)
        dispatch({ type: 'FETCH_SUCCESS_USER', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_USER', payload: getError(err) })
      }
    }

    const fetchJobtickets = async (usr) => {
      try {
        const userString = JSON.stringify(usr)
        dispatch({ type: 'FETCH_REQUEST_JT' })
        const results = await fetch(`/api/cmms/jobTicket/dashboard?user=${userString}`)
        const data = await results.json()
        dispatch({ type: 'FETCH_SUCCESS_JT', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_JT', payload: getError(err) })
      }
    }

    //collect all useEffect functions in async and put await to call each one
    //It will make synchronously for them
    const syncFunction = async () => {
      await fetchDasboardUser(user?.id)
      await fetchJobtickets(userProfile.current)
    }

    syncFunction()
  }, [user])
  const d = new Date()
  const sh = shift()
  return (
    <>
      <CmmsLayout title="Dashboard" description="Dashboard Page">
        <div className="mt-5">
          <div className="mb-3 mt-3 flex w-full flex-row justify-between rounded-2xl bg-slate-50 p-3 px-6 text-lg font-bold shadow-xl dark:bg-gray-900">
            <h1>Dashboard</h1>
            <div>{d.toDateString()}</div>
            <div>Shift : {sh}</div>
          </div>
          <DashboardTicket jobTickets={jobTickets}></DashboardTicket>
        </div>
      </CmmsLayout>
    </>
  )
}
DashboardPage.auth = true
