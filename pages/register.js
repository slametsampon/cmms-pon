import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { getError } from '../utils/error'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { PageSEO } from '@/components/SEO'
import CustomLink from '@/components/Link'

export default function LoginScreen() {
  const { data: session } = useSession()

  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm()
  const submitHandler = async (data) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('register-submitHandler-response : ', response)
      const name = data.name
      const password = data.password

      const result = await signIn('credentials', {
        redirect: false,
        name: name,
        password: password,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }

  return (
    <>
      <PageSEO title="Create Account" description="Create Account" />
      <div className="mt-5 rounded-2xl bg-slate-50 px-6 pb-3 pt-3 shadow-md dark:bg-gray-900">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="mb-4 pt-4 text-xl font-bold">Create Account</h1>
          <div className="mb-4 font-medium">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="name"
              autoFocus
              {...register('name', {
                required: 'Please enter name',
                minLength: { value: 6, message: 'Name is more than 5 chars' },
              })}
            />
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="id">NIK</label>
            <input
              type="text"
              {...register('id', {
                required: 'Please enter NIK',
                minLength: { value: 8, message: 'NIK is more than 7 chars' },
              })}
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="id"
            ></input>
            {errors.id && <div className="text-red-500">{errors.id.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Please enter password',
                minLength: { value: 6, message: 'password is more than 5 chars' },
              })}
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="password"
              autoFocus
            ></input>
            {errors.password && <div className="text-red-500 ">{errors.password.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Please enter confirm password',
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

          <div className="mb-4 ">
            <button className="primary-button rounded-2xl bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-900">
              Register
            </button>
          </div>
          <div className="mb-4 ">
            Don&apos;t have an account? &nbsp;
            <CustomLink
              key="Register"
              href={`/register?redirect=${redirect || '/'}`}
              className="link-active p-2 font-medium text-blue-800 dark:text-gray-100"
            >
              Register
            </CustomLink>
          </div>
        </form>
      </div>
    </>
  )
}
