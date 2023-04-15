import CustomLink from '@/components/Link'
import getSection from '@/lib/cmms/getSection'

export default function UserList({ users }) {
  return (
    <div className="wo-table">
      <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-4">
        <div className="px-6 py-3 text-left">Name</div>
        <div className="px-6 py-3 text-left">Section</div>
        <div className="px-6 py-3 text-left">Level</div>
        <div className="px-6 py-3 text-left">Active</div>
      </div>
      <div className="flex flex-col">
        {users.map((user) => (
          <div key={user.id} className="mt-4 flex flex-col md:grid md:grid-cols-4">
            <div className="px-6 text-left font-bold md:py-3">
              <CustomLink
                key={user.id}
                href={`/config/user/${user.id}`}
                className="link-active p-2"
              >
                {user.name}
              </CustomLink>
            </div>
            <div className="px-6 text-left md:py-3">{getSection(user.sectionId)}</div>
            <div className="px-6 text-left md:py-3">{user.level}</div>
            <div className="px-6 text-left md:py-3">{user.isActive}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
