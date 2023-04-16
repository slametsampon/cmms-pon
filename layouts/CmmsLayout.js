import helpNavLinks from '@/data/helpNavLinks'
import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import tbmNavLinks from '@/data/tbmNavLinks '
import configNavLinks from '@/data/configNavLinks'
import reportingNavLinks from '@/data/reportingNavLinks'
import WorkOrderNavLinks from '@/data/workOrderNavLinks'
import HomeNavLinks from '@/data/homeNavLinks '
import { signOut, useSession } from 'next-auth/react'
import UnauthorizeNavLinks from '@/data/unathorizeNavLinks '
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function getMenu(page) {
  if (page === 'Home') return HomeNavLinks
  else if (page === 'Help') return helpNavLinks
  else if (page === 'TBM') return tbmNavLinks
  else if (page === 'Configuration') return configNavLinks
  else if (page === 'Reporting') return reportingNavLinks
  else if (page === 'WorkOrder') return WorkOrderNavLinks
  else if (page === 'Unauthorized') return UnauthorizeNavLinks
  else return [{ href: '/', title: 'Home' }]
}
const logoutClickHandler = () => {
  signOut({ callbackUrl: '/login' })
}
export default function CmmsLayout({ title, description, children }) {
  let cmmsMenus = getMenu(title)
  const { status, data: session } = useSession()
  if (session?.user && title === 'Home') {
    cmmsMenus = [
      { href: '/logout', title: 'Logout' },
      { href: '/signin', title: 'Signin' },
    ]
  }
  return (
    <>
      <PageSEO title={`${title}-Page`} description={description} />
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-row gap-5 divide-x px-3">
        <div className="mt-5 flex flex-col">
          <div className="text-xl font-bold">
            <h2 className=" rounded-full bg-green-50 p-2 px-5 shadow-lg dark:bg-gray-900">{`${title} Menu`}</h2>
          </div>
          {session?.user ? (
            <div className="mt-3 flex flex-col rounded-2xl bg-slate-100 shadow-sm dark:bg-gray-900">
              <div className="p-2 px-5 font-bold text-gray-900 dark:text-gray-100">
                {session?.user.name}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="mt-3 flex flex-col rounded-2xl bg-blue-50 shadow-sm dark:bg-gray-900">
            {cmmsMenus.map((menu) =>
              menu.title === 'Logout' ? (
                <div key={menu.title}>
                  <a
                    href="#"
                    onClick={logoutClickHandler}
                    className="link-active p-1 px-5 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {menu.title}
                  </a>
                </div>
              ) : (
                <div key={menu.title}>
                  <CustomLink
                    key={menu.title}
                    href={menu.href}
                    className="link-active p-1 px-5 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {menu.title}
                  </CustomLink>
                </div>
              )
            )}
          </div>
        </div>
        <div className="item-center px-5">{children}</div>
      </div>
    </>
  )
}
