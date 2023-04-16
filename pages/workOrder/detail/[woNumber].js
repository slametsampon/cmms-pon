import WoView from '@/components/cmms/workOrder/woView'
import data from '@/data/cmms/cmms-wo'
import { useRouter } from 'next/router'
import React from 'react'

export default function WoDetail() {
  const { query } = useRouter()
  const { woNumber } = query
  const workOrder = data.workOrders.find((x) => x.woNumber === woNumber)
  if (!workOrder) {
    return <div>workOrder Not Found</div>
  }
  return <WoView workOrder={workOrder}></WoView>
}
