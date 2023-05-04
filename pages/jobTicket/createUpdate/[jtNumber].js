import JobTicketView from '@/components/cmms/jobTicket/jobTicketView'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useReducer, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CalcSWPnumber from '@/utils/cmms/calcSWPnumber'
import { getError } from 'utils/error'
import cmmsStatic from '@/data/cmms/cmms-static'
import getNextUserJobticket from '@/utils/cmms/getNextUserJobticket'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST_JT':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_JT':
      return { ...state, loading: false, jobTicket: action.payload, error: '' }
    case 'FETCH_FAIL_JT':
      return { ...state, loading: false, error: action.payload }

    case 'UPDATE_REQUEST_JT':
      return { ...state, loadingUpdate: true, errorUpdate: '' }
    case 'UPDATE_SUCCESS_JT':
      return { ...state, loadingUpdate: false, errorUpdate: '' }
    case 'UPDATE_FAIL_JT':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload }

    case 'FETCH_REQUEST_STATUS':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_STATUS':
      return { ...state, loading: false, statuses: action.payload, error: '' }
    case 'FETCH_FAIL_STATUS':
      return { ...state, loading: false, error: action.payload }

    case 'FETCH_REQUEST_SWP':
      return { ...state, loadingUpdate: true, errorUpdate: '' }
    case 'FETCH_SUCCESS_SWP':
      return { ...state, loading: false, swps: action.payload, error: '' }
    case 'FETCH_FAIL_SWP':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload }

    default:
      state
  }
}

export default function JtActionForm() {
  const router = useRouter()
  const { query } = useRouter()
  const jtNumber = query.jtNumber
  const { status, data: session } = useSession()
  const user = session?.user
  const userId = useRef(null)
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm()

  const [{ loading, error, jobTicket, statuses, swps }, dispatch] = useReducer(reducer, {
    loading: true,
    jobTicket: [],
    statuses: [],
    swps: [],
    error: '',
  })

  useEffect(() => {
    userId.current = user?.id
    console.log('useEffect-user : ', user)
    console.log('useEffect-userId : ', userId)
    console.log('useEffect-userId.current : ', userId.current)
    //get status
    const fetchStatus = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_STATUS' })
        // const results = await fetch('/api/cmms/workOrder/statuses')
        // const data = await results.json()
        const data = cmmsStatic.statuses
        dispatch({ type: 'FETCH_SUCCESS_STATUS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_STATUS', payload: getError(err) })
      }
    }

    //get swp
    const fetchSWP = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_SWP' })
        // console.log(`fetchSWP-/api/cmms/workOrder/swps`)
        // const results = await fetch('/api/cmms/workOrder/swps')
        // const data = await results.json()
        const data = cmmsStatic.swpType
        dispatch({ type: 'FETCH_SUCCESS_SWP', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_SWP', payload: getError(err) })
      }
    }
    const fetchJobTicket = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_JT' })
        console.log(`fetchJobTicket-/api/cmms/jobTicket/${jtNumber}`)
        const results = await fetch(`/api/cmms/jobTicket/${jtNumber}`)
        const data = await results.json()
        dispatch({ type: 'FETCH_SUCCESS_JT', payload: data[0] })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_JT', payload: getError(err) })
      }
    }
    fetchJobTicket()
    fetchSWP()
    fetchStatus()
  }, [jtNumber, user])

  const submitHandler = async (data) => {
    //convert to array - input
    const detailAction = data.detailAction.replace(/\r\n/g, '\n').split('\n')
    data.detailAction = detailAction

    const executor = data.executor.replace(/\r\n/g, '\n').split('\n')
    data.executor = executor

    const swpNumber = data.swpNumber.replace(/\r\n/g, '\n').split('\n')
    data.swpNumber = swpNumber

    //input for nextUser - currentUserId
    const jtSummary = {
      statusId: data.statusId,
      currentUserId: jobTicket.currentUserId,
      originatorId: jobTicket.originatorId,
      respSectionId: jobTicket.respSectionId,
    }
    data.currentUserId = await getNextUserJobticket(jtSummary)

    try {
      dispatch({ type: 'UPDATE_REQUEST_JT' })
      const response = await fetch(`/api/cmms/jobTicket/${jtNumber}`, {
        method: 'PUT', // or 'POST'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('JtActionForm-submitHandler - reponse : ', response)
      dispatch({ type: 'UPDATE_SUCCESS_JT' })
      toast.success('Jobticket updated successfully')
      router.push('/jobTicket')
    } catch (error) {
      dispatch({ type: 'UPDATE_FAIL_JT', payload: getError(error) })
      toast.error(getError(error))
    }
  }

  //handle swp calculation
  const handleOnchange = async ({ target }) => {
    console.log('handleOnchange-userId.current : ', userId.current)
    const calcSwpNbr = await CalcSWPnumber(target.value, userId.current)
    console.log('calcSwpNbr : ', calcSwpNbr?.swpNbr)
    //get value from swp and chcek
    const prevSwp = getValues('swpNumber')
    if (!prevSwp) {
      setValue('swpNumber', calcSwpNbr?.swpNbr)
    } else {
      console.log('prevSwp.length : ', prevSwp.length)
      //if there are value, add with new one
      //const newSwp = `${prevSwp}\r\n${calcSwpNbr?.swpNbr}`
      const newSwp = prevSwp.concat('\r\n', calcSwpNbr?.swpNbr)
      setValue('swpNumber', newSwp)
    }
  }

  //chack
  if (!jobTicket) {
    return <div>Loading....</div>
  }
  return (
    <div className="flex flex-col rounded-2xl bg-green-50 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      <JobTicketView jobTicket={jobTicket}></JobTicketView>
      <form className="max-w-screen-md px-6" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="pb-3 pt-6 text-xl font-bold text-blue-700">Enter Actual Action</h1>
        <div className="mb-4 font-medium">
          <label htmlFor="swp">SWP - Type</label>
          <div className="grid grid-cols-2">
            <select
              {...register('swp', {
                required: 'Please enter swp',
                minLength: { value: 3, message: 'swp is more than 2 chars' },
              })}
              onChange={handleOnchange}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="swp"
              autoFocus
            >
              {swps.map((swp) => (
                <option key={swp.id} value={swp.name}>
                  {swp.name}
                </option>
              ))}
            </select>
          </div>
          {errors.swp && <div className="text-red-500 ">{errors.swp.message}</div>}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="swpNumber">SWP Number</label>
          <div className="grid grid-cols-2">
            <textarea
              type="text"
              {...register('swpNumber', {
                required: 'Please enter swpNumber',
                minLength: { value: 6, message: 'swpNumber is more than 5 chars' },
              })}
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="swpNumber"
              rows="3"
              autoFocus
            ></textarea>
          </div>
          {errors.swpNumber && <div className="text-red-500">{errors.swpNumber.message}</div>}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="executor">Executor</label>
          <div className="grid grid-cols-2">
            <textarea
              type="text"
              {...register('executor', {
                required: 'Please enter executor',
                minLength: { value: 3, message: 'executor is more than 2 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="executor"
              rows="3"
              autoFocus
            ></textarea>
          </div>
          {errors.executor && <div className="text-red-500 ">{errors.executor.message}</div>}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="executeDate">Executed Date</label>
          <div className="grid grid-cols-2">
            <input
              type="date"
              {...register('executeDate', {
                required: 'Please enter executeDate',
                minLength: { value: 6, message: 'executeDate is more than 5 chars' },
              })}
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="executeDate"
              autoFocus
            ></input>
          </div>
          {errors.executeDate && <div className="text-red-500">{errors.executeDate.message}</div>}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="statusId">Status</label>
          <div className="grid grid-cols-2">
            <select
              {...register('statusId', {
                required: 'Please enter statusId',
                minLength: { value: 1, message: 'statusId is more than 0 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="statusId"
              autoFocus
            >
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
          {errors.statusId && <div className="text-red-500 ">{errors.statusId.message}</div>}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="detailAction">Detail Action</label>
          <textarea
            type="text"
            {...register('detailAction', {
              required: 'Please enter detailAction',
              minLength: { value: 10, message: 'detailAction is more than 9 chars' },
            })}
            className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
            id="detailAction"
            rows="7"
            autoFocus
          ></textarea>
          {errors.detailAction && (
            <div className="text-red-500 ">{errors.detailAction.message}</div>
          )}
        </div>
        <div className="mb-4 mt-4">
          <button className="primary-button rounded-2xl bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-900">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
