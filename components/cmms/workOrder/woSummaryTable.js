import CustomLink from '@/components/Link';
import getPriority from '@/lib/cmms/getPriority';
import getStatus from '@/lib/cmms/getStatus';

export default function WoSummaryTable({ workOrders }) {
  return (
    <div className="wo-table mt-6">
      <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-4">
        <div className="px-6 py-3 text-left">WO Number</div>
        <div className="px-6 py-3 text-left">Tagnumber</div>
        <div className="px-6 py-3 text-left">Priority</div>
        <div className="px-6 py-3 text-left">Status</div>
      </div>
      <div className="flex flex-col">
        {workOrders.map((workOrder) => (
          <div
            key={workOrder.id}
            className="mt-3 flex flex-col font-normal md:grid md:grid-cols-4"
          >
            <div className=" px-6 text-left md:py-3">
              <CustomLink
                key={workOrder.woNumber}
                href={`/workOrder/detail/${workOrder.woNumber}`}
                className="link-active p-2"
              >
                {workOrder.woNumber}
              </CustomLink>
            </div>
            <div className="px-6 text-left md:py-3">{workOrder.tagnumber}</div>
            <div className="px-6 text-left md:py-3">
              {getPriority(workOrder.priorityId)}
            </div>
            <div className="px-6 text-left md:py-3">
              {getStatus(workOrder.statusId)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
