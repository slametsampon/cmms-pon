import UserSummaryView from './userSummaryView'

export default function UserList({ users }) {
  return (
    <div className="wo-table">
      <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-3">
        <div className="px-6 py-3 text-left">Name</div>
        <div className="px-6 py-3 text-left">Section</div>
        <div className="px-6 py-3 text-left">Level</div>
      </div>
      <div className="flex flex-col">
        {users.map((user) => (
          <div key={user.id}>
            <UserSummaryView user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}
