import CustomLink from '@/components/Link'
import Link from 'next/link'
import JtSummaryView from './jtSummaryView'

export default function DashboardTicket({ jobTickets }) {
  return (
    <div className="wo-table">
      <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-7">
        <div className="col-span-2 px-6 py-3 text-left">Job Title</div>
        <div className="col-span-2 px-6 py-3 text-left">Reference</div>
        <div className="px-6 py-3 text-left">Priority</div>
        <div className="px-6 py-3 text-left">Status</div>
        <div className="px-6 py-3 text-left">Action</div>
      </div>
      <div className="flex flex-col">
        {jobTickets.map((jobTicket) => (
          <div key={jobTicket.id}>
            <JtSummaryView jobTicket={jobTicket} />
          </div>
        ))}
      </div>
    </div>
  )
}
