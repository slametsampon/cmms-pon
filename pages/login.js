import { useForm } from 'react-hook-form'
import { PageSEO } from '@/components/SEO'
import CustomLink from '@/components/Link'
import Image from '@/components/Image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getError } from 'utils/error'
import { toast } from 'react-toastify'

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
    formState: { errors },
  } = useForm()

  const submitHandler = async ({ name, password }) => {
    try {
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
      <PageSEO title="Login - Page" description="Login Page for User" />
      <div className="mt-5 rounded-2xl bg-slate-50 pb-3 pt-3 shadow-md dark:bg-gray-900">
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-2 mt-3 flex flex-row">
            <Image
              src="/static/images/person.png"
              alt="person"
              width="50"
              height="50"
              className="h-48 w-48 rounded-full"
            />
            <h1 className="pt-40 text-xl font-bold">Login</h1>
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register('name', {
                required: 'Please enter name',
                minLength: { value: 6, message: 'name is more than 5 chars' },
              })}
              className="input w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="name"
              autoFocus
            ></input>
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}
          </div>
          <div className="mb-4 font-medium">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Please enter password',
                minLength: { value: 6, message: 'password is more than 5 chars' },
              })}
              className="w-full rounded-2xl bg-blue-50 dark:bg-gray-900"
              id="password"
              autoFocus
            ></input>
            {errors.password && <div className="text-red-500 ">{errors.password.message}</div>}
          </div>
          <div className="mb-4 mt-4">
            <button className="primary-button rounded-2xl bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700 dark:bg-gray-900">
              Login
            </button>
          </div>
          <div className="mb-4 ">
            Don&apos;t have an account? &nbsp;
            <CustomLink
              key="Register"
              href="/register"
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
