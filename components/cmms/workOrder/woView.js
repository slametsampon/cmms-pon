import getPriority from '@/lib/cmms/getPriority';
import getSection from '@/lib/cmms/getSection';
import getStatus from '@/lib/cmms/getStatus';
import getUser from '@/lib/cmms/getUser';

export default function WoView({ workOrder }) {
  let woView = workOrder;

  woView.RespSect = getSection(workOrder.destSectionId);
  woView.Priority = getPriority(workOrder.priorityId);
  woView.Status = getStatus(workOrder.statusId);
  woView.Originator = getUser(workOrder.originatorId);
  woView.OnDesk = getUser(workOrder.currentUserId);
  woView.Executor = getUser(workOrder.executorId);

  const properties = Object.getOwnPropertyNames(woView);
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
        ) : property === 'executorId' ||
          property === 'currentUserId' ||
          property === 'originatorId' ||
          property === 'statusId' ||
          property === 'priorityId' ||
          property === 'destSectionId' ? (
          <div></div>
        ) : (
          <div
            key={property}
            className="mt-3 font-medium md:grid md:grid-cols-4"
          >
            <div className="px-6 font-bold">{property}</div>
            <div className="col-span-3 px-6">{woView[property]}</div>
          </div>
        )
      )}
    </div>
  );
}
