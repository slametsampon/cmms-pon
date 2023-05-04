import WoView from '@/components/cmms/workOrder/woView'
import getStaticPriority from '@/utils/cmms/getStaticPriority'
import getStaticSection from '@/utils/cmms/getStaticSection'
import getStaticStatus from '@/utils/cmms/getStaticStatus'
import getUser from 'utils/cmms/getUser'

const fetchWorkOrder = async (woNumber) => {
  const url = `${process.env.API_URL}/api/cmms/workOrder/${woNumber}`
  const result = await fetch(url)
  const workOrder = await result.json()
  return workOrder[0]
}

export async function getServerSideProps(params) {
  const { woNumber } = params.query
  console.log('getServerSideProps-woNumber : ', woNumber)

  const workOrder = await fetchWorkOrder(woNumber)
  console.log('getServerSideProps-workOrder : ', workOrder)
  const originUser = await getUser(workOrder.originatorId)
  const currentUser = await getUser(workOrder.currentUserId)
  const executor = await getUser(workOrder.executorId)

  //get from static data
  const respSection = await getStaticSection(workOrder.respSectionId)
  const priority = await getStaticPriority(workOrder.priorityId)
  const status = await getStaticStatus(workOrder.statusId)

  workOrder.originUser = originUser?.name
  workOrder.currentUser = currentUser?.name
  workOrder.executor = executor?.name
  workOrder.respSection = respSection?.name
  workOrder.priority = priority?.name
  workOrder.status = status?.name

  //delete unnecessery properties for display
  delete workOrder.originatorId
  delete workOrder.currentUserId
  delete workOrder.executorId
  delete workOrder.respSectionId
  delete workOrder.priorityId
  delete workOrder.statusId
  delete workOrder._id
  delete workOrder.__v

  return {
    props: {
      workOrder: workOrder,
    },
  }
}

export default function WoDetail(props) {
  const { workOrder } = props
  if (!workOrder) {
    return <div>workOrder Not Found</div>
  }
  return <WoView workOrder={workOrder}></WoView>
}
