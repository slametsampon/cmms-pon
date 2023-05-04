import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getError } from '../utils/error'
import { PageSEO } from '@/components/SEO'

export default function ProfileScreen() {
  const { data: session } = useSession()

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue('name', session.user.name)
    setValue('email', session.user.email)
  }, [session.user, setValue])

  const submitHandler = async (data) => {
    console.log('ProfileScreen-submitHandler-data : ', data)
    try {
      const response = await fetch('/api/auth/update', {
        method: 'PUT', // or 'POST'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('ProfileScreen-submitHandler-response : ', response)

      const name = data.name
      const password = data.password

      const result = await signIn('credentials', {
        redirect: false,
        name: name,
        password: password,
      })
      toast.success('Profile updated successfully')
      if (result.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }

  return (
    <>
      <PageSEO title="Profile User" description="Profile User" />
      <div className="mt-5 rounded-2xl bg-slate-50 px-6 pb-3 pt-3 shadow-md dark:bg-gray-900">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="mb-4 pt-4 text-xl font-bold">Update Profile</h1>

          <div className="mb-4 font-medium">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="name"
              autoFocus
              {...register('name', {
                required: 'Please enter name',
              })}
            />
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="email"
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email',
                },
              })}
            />
            {errors.email && <div className="text-red-500">{errors.email.message}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              type="password"
              id="password"
              {...register('password', {
                minLength: { value: 6, message: 'password is more than 5 chars' },
              })}
            />
            {errors.password && <div className="text-red-500 ">{errors.password.message}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                validate: (value) => value === getValues('password'),
                minLength: {
                  value: 6,
                  message: 'confirm password is more than 5 chars',
                },
              })}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 ">{errors.confirmPassword.message}</div>
            )}
            {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}
          </div>
          <div className="mb-4">
            <button className="primary-button rounded-2xl bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-900">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

ProfileScreen.auth = true
