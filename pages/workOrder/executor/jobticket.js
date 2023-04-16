import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getError } from 'utils/error'

export default function CreateJobticket() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = async (data) => {
    console.log('before : ', data)
    // convert texarea to array
    const detailTask = data.detailTask.replace(/\r\n/g, '\n').split('\n')
    data.detailTask = detailTask

    const detailSHE = data.detailSHE.replace(/\r\n/g, '\n').split('\n')
    data.detailSHE = detailSHE

    console.log('after : ', data)
  }

  return (
    <>
      <PageSEO title="Create Jobticket - Page" description="Create Jobticket" />
      <div className="mt-5 rounded-2xl bg-slate-50 pb-3 pt-3 shadow-md dark:bg-gray-900">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="pb-6 pt-3 text-xl font-bold">Create Job Ticket</h1>
          <div className="mb-4 font-medium">
            <label htmlFor="tagnumber">Tagnumber</label>
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
            <label htmlFor="priority">Priority</label>
            <input
              type="text"
              {...register('priority', {
                required: 'Please enter priority',
                minLength: { value: 5, message: 'priority is more than 4 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="priority"
              autoFocus
            ></input>
            {errors.priority && <div className="text-red-500 ">{errors.priority.message}</div>}
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
            <input
              type="text"
              {...register('executor', {
                required: 'Please enter executor',
                minLength: { value: 3, message: 'executor is more than 2 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="executor"
              autoFocus
            ></input>
            {errors.executor && <div className="text-red-500 ">{errors.executor.message}</div>}
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
