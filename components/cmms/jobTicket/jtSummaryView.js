import CustomLink from '@/components/Link'
import getStaticPriority from '@/utils/cmms/getStaticPriority'
import getStaticStatus from '@/utils/cmms/getStaticStatus'
import Link from 'next/link'
import { useState } from 'react'

export default function JtSummaryView({ jobTicket }) {
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

  fetchPriority(jobTicket.priorityId)
  fetchStatus(jobTicket.statusId)

  return (
    <div className="mt-4 flex flex-col rounded-md shadow-md md:grid md:grid-cols-7">
      <div className=" col-span-2 px-6 text-left font-bold md:py-3">
        <CustomLink
          key={jobTicket.id}
          href={`/jobTicket/detail/${jobTicket.jtNumber}`}
          className="link-active p-2"
        >
          {`${jobTicket.tagnumber}:${jobTicket.title}`}
        </CustomLink>
      </div>
      <div className="col-span-2 px-6 text-left md:py-3">{jobTicket?.ref}</div>
      <div className="px-6 text-left md:py-3">{priority?.name}</div>
      <div className="px-6 text-left md:py-3">{status?.name}</div>
      <button className="px-10">
        <Link
          href={{
            pathname: '/jobTicket/createUpdate/[jtNumber]',
            query: {
              jtNumber: jobTicket.jtNumber,
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="20" width="20">
            <g>
              <rect x="30.48" y="12.19" width="1.52" height="16.76" fill="#000000"></rect>
              <rect x="30.48" y="3.05" width="1.52" height="4.57" fill="#000000"></rect>
              <rect x="28.95" y="28.95" width="1.53" height="1.53" fill="#000000"></rect>
              <rect x="28.95" y="7.62" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="28.95" y="1.52" width="1.53" height="1.53" fill="#000000"></rect>
              <rect x="27.43" y="9.14" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="27.43" y="6.1" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="3.05" y="30.48" width="25.9" height="1.52" fill="#000000"></rect>
              <rect x="25.91" y="10.67" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="25.91" y="4.57" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="24.38" width="4.57" height="1.52" fill="#000000"></rect>
              <rect x="24.38" y="12.19" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="24.38" y="6.1" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="24.38" y="3.05" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="22.86" y="13.71" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="22.86" y="7.62" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="22.86" y="1.52" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="21.33" y="15.24" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="21.33" y="9.14" width="1.53" height="1.53" fill="#000000"></rect>
              <rect x="21.33" y="3.05" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="19.81" y="16.76" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="19.81" y="10.67" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="19.81" y="4.57" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="18.29" y="15.24" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="18.29" y="12.19" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="18.29" y="6.1" width="1.52" height="1.52" fill="#000000"></rect>
              <polygon
                points="16.76 16.76 15.24 16.76 15.24 15.24 13.71 15.24 13.71 12.19 12.19 12.19 12.19 19.81 19.81 19.81 19.81 18.29 16.76 18.29 16.76 16.76"
                fill="#000000"
              ></polygon>
              <rect x="16.76" y="13.71" width="1.53" height="1.53" fill="#000000"></rect>
              <rect x="16.76" y="7.62" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="15.24" y="12.19" width="1.52" height="1.52" fill="#000000"></rect>
              <rect x="15.24" y="9.14" width="1.52" height="1.53" fill="#000000"></rect>
              <rect x="13.71" y="10.67" width="1.53" height="1.52" fill="#000000"></rect>
              <rect x="3.05" y="1.52" width="15.24" height="1.53" fill="#000000"></rect>
              <rect x="1.52" y="28.95" width="1.53" height="1.53" fill="#000000"></rect>
              <rect x="1.52" y="3.05" width="1.53" height="1.52" fill="#000000"></rect>
              <rect y="4.57" width="1.52" height="24.38" fill="#000000"></rect>
            </g>
          </svg>{' '}
        </Link>
      </button>
    </div>
  )
}
