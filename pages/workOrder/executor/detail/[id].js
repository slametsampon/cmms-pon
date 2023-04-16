import JobTicketView from '@/components/cmms/workOrder/jobTicketView'
import data from '@/data/cmms/cmms-wo'
import { useRouter } from 'next/router'
import React from 'react'

export default function JobTicketDetail() {
  let idInt = 0
  const { query } = useRouter()
  const { id } = query
  idInt = parseInt(id, 10)
  const jobTicket = data.jobTickets.find((x) => x.id === idInt)
  if (!jobTicket) {
    return <div>jobTicket Not Found</div>
  }
  return <JobTicketView jobTicket={jobTicket}></JobTicketView>
}
