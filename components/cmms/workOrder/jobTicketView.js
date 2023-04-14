const GetElement = ({ name, elements }) => {
  let executor = ''
  elements.map((element, index) =>
    index === 0 ? (executor = element) : (executor += ', ' + element)
  )
  return (
    <div className="grid grid-cols-1">
      <div className="rounded-2xl bg-slate-50 px-6 py-3 shadow-md dark:bg-gray-900">
        {name !== 'executor' ? (
          elements.map((element, index) => (
            <div key={index} className="flex flex-col">
              {element}
            </div>
          ))
        ) : (
          <div>{executor}</div>
        )}
      </div>
    </div>
  )
}
export default function JobTicketView({ jobTicket }) {
  const properties = Object.getOwnPropertyNames(jobTicket)
  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      {properties.map((property) =>
        property === 'detailTask' || property === 'SHE' || property === 'executor' ? (
          <div key={property} className="flex flex-col font-medium">
            <div className="mb-4 grid grid-cols-1">
              <div className="mb-3 mt-2 grid grid-cols-1">
                <div className="px-6 font-bold">{property}</div>
                <GetElement name={property} elements={jobTicket[property]} />
              </div>
            </div>
          </div>
        ) : property === 'id' ? (
          <div className="mb-3 mt-5 rounded-2xl bg-blue-100 px-3 py-2 text-xl font-bold shadow-md dark:bg-gray-900">
            Job Ticket Detail
          </div>
        ) : (
          <div key={property} className="font-medium">
            <div className="mb-4 grid grid-cols-3 bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className="col-span-1 px-3 font-bold">{property}</div>
              <div className="col-span-2 ">{jobTicket[property]}</div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
