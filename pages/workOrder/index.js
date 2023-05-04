import CmmsLayout from '@/layouts/CmmsLayout'
import { useEffect, useReducer } from 'react'
import { getError } from 'utils/error'
import WoSummaryView from '@/components/cmms/workOrder/woSummaryView'

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
        const results = await fetch('/api/cmms/workOrder')
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
            <div className="wo-table">
              <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-5">
                <div className="col-span-2 px-6 py-3 text-left">WO Number</div>
                <div className="px-6 py-3 text-left">Tagnumber</div>
                <div className="px-6 py-3 text-left">Priority</div>
                <div className="px-6 py-3 text-left">Status</div>
              </div>
              <div className="flex flex-col">
                {workOrders.map((workOrder) => (
                  <div key={workOrder.id}>
                    <WoSummaryView workOrder={workOrder} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CmmsLayout>
    </>
  )
}
WorkOrderPage.auth = true
