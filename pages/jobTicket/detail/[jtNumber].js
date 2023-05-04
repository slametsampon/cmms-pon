import JobTicketView from '@/components/cmms/jobTicket/jobTicketView'

export async function getServerSideProps(params) {
  const { jtNumber } = params.query
  const url = `${process.env.API_URL}/api/cmms/jobTicket/${jtNumber}`

  const results = await fetch(url)
  const jt = await results.json()
  const jobTicket = jt[0]

  //delete unnecessery properties for display
  delete jobTicket._id
  delete jobTicket.__v

  return {
    props: {
      jobTicket: jobTicket,
    },
  }
}

export default function JobTicketDetail(props) {
  const { jobTicket } = props

  if (!jobTicket) {
    return <div>jobTicket Not Found</div>
  } else {
    return (
      <>
        <JobTicketView jobTicket={jobTicket}></JobTicketView>
      </>
    )
  }
}
