import CustomLink from '@/components/Link'
import getPriority from '@/lib/cmms/getPriority'
import getStatus from '@/lib/cmms/getStatus'

export default function DashboardTicket({ jobTickets }) {
  return (
    <div className="wo-table">
      <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-6">
        <div className="col-span-2 px-6 py-3 text-left">Job Title</div>
        <div className="col-span-2 px-6 py-3 text-left">Reference</div>
        <div className="px-6 py-3 text-left">Priority</div>
        <div className="px-6 py-3 text-left">Status</div>
      </div>
      <div className="flex flex-col">
        {jobTickets.map((jobTicket) => (
          <div key={jobTicket.id} className="mt-4 flex flex-col md:grid md:grid-cols-6">
            <div className=" col-span-2 px-6 text-left font-bold md:py-3">
              <CustomLink
                key={jobTicket.id}
                href={`/workOrder/executor/detail/${jobTicket.id}`}
                className="link-active p-2"
              >
                {`${jobTicket.tagnumber}:${jobTicket.title}`}
              </CustomLink>
            </div>
            <div className="col-span-2 px-6 text-left md:py-3">{jobTicket.ref}</div>
            <div className="px-6 text-left md:py-3">{jobTicket.priority}</div>
            <div className="px-6 text-left md:py-3">{jobTicket.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
