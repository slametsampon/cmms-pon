export default function WoView({ workOrder }) {
  const properties = Object.getOwnPropertyNames(workOrder)
  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 pb-3 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      {properties.map((property) =>
        property === 'id' ? (
          <div
            key={property}
            className="mt-3 hidden rounded-3xl bg-slate-50 text-lg font-bold shadow-md dark:bg-gray-900 md:grid md:grid-cols-4"
          >
            <div className="px-6 py-3">Property</div>
            <div className="col-span-3 px-6 py-3">Description</div>
          </div>
        ) : (
          <div
            key={property}
            className="mt-3 rounded-3xl bg-slate-50 p-2 text-lg font-normal shadow-md dark:bg-gray-900 md:grid md:grid-cols-4"
          >
            <div className="col-span-1 px-6 font-bold">{property}</div>
            <div className="col-span-3 px-6">{workOrder[property]}</div>
          </div>
        )
      )}
    </div>
  )
}
