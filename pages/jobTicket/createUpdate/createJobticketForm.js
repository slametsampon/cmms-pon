import { PageSEO } from '@/components/SEO'
import cmmsStatic from '@/data/cmms/cmms-static'
import CalcJTnumber from '@/utils/cmms/calcJTnumber'
import getStaticSectionsInDept from '@/utils/cmms/getStaticSectionsInDept'
import getUserSection from '@/utils/cmms/getUserSection'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useReducer, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getError } from 'utils/error'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST_PRIORITY':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_PRIORITY':
      return { ...state, loading: false, priorities: action.payload, error: '' }
    case 'FETCH_FAIL_PRIORITY':
      return { ...state, loading: false, error: action.payload }

    case 'FETCH_REQUEST_SECTION':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_SECTION':
      return { ...state, loading: false, sections: action.payload, error: '' }
    case 'FETCH_FAIL_SECTION':
      return { ...state, loading: false, error: action.payload }

    case 'FETCH_REQUEST_STATUS':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS_STATUS':
      return { ...state, loading: false, statuses: action.payload, error: '' }
    case 'FETCH_FAIL_STATUS':
      return { ...state, loading: false, error: action.payload }

    case 'CREATE_JOBTICKET_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' }
    case 'CREATE_JOBTICKET_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' }
    case 'CREATE_JOBTICKET_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload }

    default:
      state
  }
}

export default function CreateJobticket() {
  const { status, data: session } = useSession()
  const Once = useRef(false)
  const renderCount = useRef(0)
  renderCount.current++
  console.log('render-renderCount.current : ', renderCount.current)
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm()

  const [{ loading, error, priorities, sections, statuses }, dispatch] = useReducer(reducer, {
    loading: true,
    priorities: [],
    sections: [],
    statuses: [],
    error: '',
  })

  //calculate Job Ticket number
  const user = session?.user
  console.log('render-user: ', user)

  useEffect(() => {
    setValue('originator', user?.name)

    const fetchPriorities = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_PRIORITY' })
        // const results = await fetch('/api/cmms/workOrder/priorities')
        // const data = await results.json()
        const data = cmmsStatic.priorities
        dispatch({ type: 'FETCH_SUCCESS_PRIORITY', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_PRIORITY', payload: getError(err) })
      }
    }

    const fetchStatuses = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_STATUS' })
        const data = cmmsStatic.statuses
        dispatch({ type: 'FETCH_SUCCESS_STATUS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_STATUS', payload: getError(err) })
      }
    }

    const fetchSections = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST_SECTION' })
        //const data = cmmsStatic.sections
        const section = await getUserSection(user?.id)
        const data = await getStaticSectionsInDept(section.departmentId)
        dispatch({ type: 'FETCH_SUCCESS_SECTION', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL_SECTION', payload: getError(err) })
      }
    }

    const calJtNbr = async () => {
      try {
        const userId = user?.id
        if (typeof userId === 'number') {
          const calcJtNbr = await CalcJTnumber(userId)
          console.log('calcJtNbr : ', calcJtNbr?.jtNbr)
          setValue('jtNumber', calcJtNbr?.jtNbr)
          console.log('calcJtNbr-Once.current : ', Once.current)
          console.log('calcJtNbr-Once.current typeof : ', typeof Once.current)
          Once.current = true
        }
      } catch (error) {
        console.log('calJtNbr - error', error)
      }
    }

    if (!Once.current) {
      calJtNbr()
    }

    fetchPriorities()
    fetchStatuses()
    fetchSections()
  }, [user])

  const router = useRouter()

  const submitHandler = async (data) => {
    data.originatorId = user?.id
    // convert texarea to array
    const detailTask = data.detailTask.replace(/\r\n/g, '\n').split('\n')
    data.detailTask = detailTask

    const detailSHE = data.detailSHE.replace(/\r\n/g, '\n').split('\n')
    data.detailSHE = detailSHE

    //logic for currentUserId
    //1. status Finish
    //2. status Complete
    //3. status need materials, need shutdown, need MOC, need regulation

    //update JobTicket
    try {
      dispatch({ type: 'CREATE_JOBTICKET_REQUEST' })
      const response = await fetch('/api/cmms/jobTicket/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data),
      })
      console.log('CreateJobticket - submitHandler - response : ', response)
      dispatch({ type: 'CREATE_JOBTICKET_SUCCESS' })
      toast.success('Jobticket created successfully')
      router.push('/jobTicket')
    } catch (error) {
      dispatch({ type: 'CREATE_JOBTICKET_FAIL', payload: getError(error) })
      toast.error(getError(error))
    }
  }

  return (
    <>
      <PageSEO title="Create Jobticket - Page" description="Create Jobticket" />
      <div className="mt-5 rounded-2xl bg-slate-50 pb-3 pt-3 shadow-md dark:bg-gray-900">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="pb-6 pt-3 text-xl font-bold">Create Job Ticket</h1>
          <div className="mb-4 font-medium">
            <label htmlFor="jtNumber">Job Ticket Number</label>
            <div className="grid grid-cols-2">
              <input
                type="text"
                {...register('jtNumber', {
                  required: 'Please enter jtNumber',
                  minLength: { value: 6, message: 'jtNumber is more than 5 chars' },
                })}
                className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="jtNumber"
                autoFocus
                disabled
              ></input>
            </div>
            {errors.jtNumber && <div className="text-red-500">{errors.jtNumber.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="originator">Originator</label>
            <div className="grid grid-cols-2">
              <input
                type="text"
                {...register('originator', {
                  required: 'Please enter originator',
                  minLength: { value: 6, message: 'originator is more than 5 chars' },
                })}
                className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="originator"
                autoFocus
                disabled
              ></input>
            </div>
            {errors.originator && <div className="text-red-500">{errors.originator.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="ref">Reference</label>
            <div className="grid grid-cols-2">
              <input
                type="text"
                {...register('ref', {
                  required: 'Please enter ref',
                  minLength: { value: 6, message: 'ref is more than 5 chars' },
                })}
                className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="ref"
                autoFocus
              ></input>
            </div>
            {errors.ref && <div className="text-red-500">{errors.ref.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="tagnumber">Tagnumber</label>
            <div className="grid grid-cols-2">
              <input
                type="text"
                {...register('tagnumber', {
                  required: 'Please enter Tagnumber',
                  minLength: { value: 6, message: 'tagnumber is more than 5 chars' },
                })}
                className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="tagnumber"
                autoFocus
              ></input>
            </div>
            {errors.tagnumber && <div className="text-red-500">{errors.tagnumber.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              {...register('title', {
                required: 'Please enter title',
                minLength: { value: 10, message: 'title is more than 9 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="title"
              autoFocus
            ></input>
            {errors.title && <div className="text-red-500 ">{errors.title.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="priorityId">Priority</label>
            <div className="grid grid-cols-2">
              <select
                {...register('priorityId', {
                  required: 'Please select priority',
                  minLength: { value: 1, message: 'priority is more than 0 chars' },
                })}
                className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="priorityId"
                autoFocus
              >
                {priorities.map((priority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.priorityId && <div className="text-red-500 ">{errors.priorityId.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="statusId">Status</label>
            <div className="grid grid-cols-2">
              <select
                {...register('statusId', {
                  required: 'Please select status',
                  minLength: { value: 1, message: 'status is more than 0 chars' },
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
            <label htmlFor="respSectionId">Resp Section</label>
            <div className="grid grid-cols-2">
              <select
                {...register('respSectionId', {
                  required: 'Please select respSectionId',
                  minLength: { value: 1, message: 'respSectionId is more than 0 chars' },
                })}
                className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="respSectionId"
                autoFocus
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.description}
                  </option>
                ))}
              </select>
            </div>
            {errors.respSectionId && (
              <div className="text-red-500 ">{errors.respSectionId.message}</div>
            )}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              {...register('location', {
                required: 'Please enter location',
                minLength: { value: 6, message: 'location is more than 5 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="location"
              autoFocus
            ></input>
            {errors.location && <div className="text-red-500 ">{errors.location.message}</div>}
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
            <label htmlFor="scheduleDate">Schedule Date</label>
            <div className="grid grid-cols-2">
              <input
                type="date"
                {...register('scheduleDate', {
                  required: 'Please enter scheduleDate',
                  minLength: { value: 6, message: 'scheduleDate is more than 5 chars' },
                })}
                className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
                id="scheduleDate"
                autoFocus
              ></input>
            </div>
            {errors.scheduleDate && (
              <div className="text-red-500">{errors.scheduleDate.message}</div>
            )}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="detailTask">Detail Task</label>
            <textarea
              type="text"
              {...register('detailTask', {
                required: 'Please enter detailTask',
                minLength: { value: 10, message: 'detailTask is more than 9 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="detailTask"
              rows="7"
              autoFocus
            ></textarea>
            {errors.detailTask && <div className="text-red-500 ">{errors.detailTask.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="detailSHE">Detail SHE</label>
            <textarea
              type="text"
              {...register('detailSHE', {
                required: 'Please enter detailSHE',
                minLength: { value: 10, message: 'detailSHE is more than 9 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="detailSHE"
              rows="4"
              autoFocus
            ></textarea>
            {errors.detailSHE && <div className="text-red-500 ">{errors.detailSHE.message}</div>}
          </div>
          <div className="mb-4 mt-4">
            <button className="primary-button rounded-2xl bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-900">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
