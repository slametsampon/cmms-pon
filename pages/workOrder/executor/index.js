import CmmsLayout from '@/layouts/CmmsLayout'
import data from '@/data/cmms/cmms-wo'
import DashboardTicket from '@/components/cmms/workOrder/dashboardTicket'

export default function DashboardPage() {
  return (
    <>
      <CmmsLayout title="Dashboard" description="Dashboard Page">
        <div className="mt-5">
          <h1 className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
            Dashboard
          </h1>
          <DashboardTicket jobTickets={data.jobTickets}></DashboardTicket>
        </div>
      </CmmsLayout>
    </>
  )
}
DashboardPage.auth = true
