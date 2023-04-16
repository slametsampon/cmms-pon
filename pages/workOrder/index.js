import CmmsLayout from '@/layouts/CmmsLayout'
import WoSummaryTable from '@/components/cmms/workOrder/woSummaryTable'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { getError } from 'utils/error'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, workOrders: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }

    default:
      state
  }
}
export default function WorkOrderPage() {
  const [{ loading, error, workOrders }, dispatch] = useReducer(reducer, {
    loading: true,
    workOrders: [],
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const results = await fetch('/api/cmms/workOrders')
        const data = await results.json()
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <CmmsLayout title="WorkOrder" description="WorkOrder Page">
        <div className="mt-5">
          <h1 className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
            Work Order List
          </h1>
          {!workOrders ? (
            <div> There's no data</div>
          ) : (
            <WoSummaryTable workOrders={workOrders}></WoSummaryTable>
          )}
        </div>
      </CmmsLayout>
    </>
  )
}
WorkOrderPage.auth = true
