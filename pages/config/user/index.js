import CmmsLayout from '@/layouts/CmmsLayout'
import data from '@/data/cmms/cmms-wo'
import UserList from '@/components/cmms/config/userList'

export default function UserListPage() {
  return (
    <>
      <CmmsLayout title="User" description="User Page">
        <div className="mt-5">
          <h1 className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
            User List
          </h1>
          <UserList users={data.users}></UserList>
        </div>
      </CmmsLayout>
    </>
  )
}
UserListPage.auth = true
