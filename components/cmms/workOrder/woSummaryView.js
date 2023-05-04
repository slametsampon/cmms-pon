import CustomLink from '@/components/Link'
import getStaticPriority from '@/utils/cmms/getStaticPriority'
import getStaticStatus from '@/utils/cmms/getStaticStatus'
import { useState } from 'react'

export default function WoSummaryView({ workOrder }) {
  const [priority, setPriority] = useState({})
  const [status, setStatus] = useState({})

  const fetchPriority = async (priorityId) => {
    const result = await getStaticPriority(priorityId)
    setPriority(result)
  }
  const fetchStatus = async (statusId) => {
    const result = await getStaticStatus(statusId)
    setStatus(result)
  }

  fetchPriority(workOrder.priorityId)
  fetchStatus(workOrder.statusId)

  return (
    <div className="mt-3 flex flex-col md:grid md:grid-cols-5">
      <div className=" col-span-2 px-6 text-left md:py-3">
        <CustomLink
          key={workOrder.woNumber}
          href={`/workOrder/detail/${workOrder.woNumber}`}
          className="link-active p-2"
        >
          {workOrder.woNumber}
        </CustomLink>
      </div>
      <div className="px-6 text-left md:py-3">{workOrder.tagnumber}</div>
      <div className="px-6 text-left md:py-3">{priority?.name}</div>
      <div className="px-6 text-left md:py-3">{status?.name}</div>
    </div>
  )
}
