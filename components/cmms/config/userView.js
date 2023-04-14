import getSection from '@/lib/cmms/getSection'
import getUser from '@/lib/cmms/getUser'

export default function UserView({ user }) {
  user.ReversePath = getUser(user.reverseUser)
  user.ForwardPath = getUser(user.forwardUser)
  user.Section = getSection(user.sectionId)

  const properties = Object.getOwnPropertyNames(user)
  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      {properties.map((property) =>
        property === 'id' ? (
          <div
            key={property}
            className="mt-3 hidden rounded-3xl bg-slate-50 text-lg font-bold shadow-md dark:bg-gray-900 md:grid md:grid-cols-4"
          >
            <div className="px-6 py-3">Property</div>
            <div className="col-span-3 px-6 py-3">Description</div>
          </div>
        ) : property === 'password' ||
          property === 'sectionId' ||
          property === 'reverseUser' ||
          property === 'forwardUser' ? (
          <div></div>
        ) : (
          <div key={property} className="mt-3 font-medium md:grid md:grid-cols-4">
            <div className="px-6 font-bold">{property}</div>
            <div className="col-span-3 px-6">{user[property]}</div>
          </div>
        )
      )}
    </div>
  )
}
