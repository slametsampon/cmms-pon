import cmmsView from '@/data/cmms/cmms-view'
import getStaticPriority from '@/utils/cmms/getStaticPriority'
import getStaticSection from '@/utils/cmms/getStaticSection'
import getStaticStatus from '@/utils/cmms/getStaticStatus'
import getUser from '@/utils/cmms/getUser'
import { useEffect, useRef, useState } from 'react'

const GetElement = ({ name, elements }) => {
  let executor = ''
  elements.map((element, index) =>
    index === 0 ? (executor = element) : (executor += ', ' + element)
  )
  return (
    <div className="grid grid-cols-1">
      <div className="rounded-2xl bg-slate-50 px-6 py-3 shadow-md dark:bg-gray-900">
        {name !== 'executor' ? (
          elements.map((element, index) => (
            <div key={index} className="flex flex-col">
              {element}
            </div>
          ))
        ) : (
          <div>{executor}</div>
        )}
      </div>
    </div>
  )
}
export default function JobTicketView({ jobTicket }) {
  const [originUser, setOriginUser] = useState({})
  const [respSection, setRespSection] = useState({})

  useEffect(() => {
    const fetchSection = async (sectionId) => {
      try {
        const result = await getStaticSection(sectionId)
        setRespSection(result)
        jobTicket.respSection = result?.name
        delete jobTicket.respSectionId
      } catch (error) {
        console.log('fetchSection - error: ', error)
      }
    }

    const fetchOriginator = async (userId) => {
      try {
        const result = await getUser(userId)
        setOriginUser(result)
        jobTicket.originUser = result?.name
        delete jobTicket.originatorId
      } catch (error) {
        console.log('fetchOriginator - error: ', error)
      }
    }

    const fetchStatus = async (statusId) => {
      try {
        const result = await getStaticStatus(statusId)
        jobTicket.status = result?.name
        delete jobTicket.statusId
      } catch (error) {
        console.log('fetchStatus - error: ', error)
      }
    }

    const fetchPriority = async (priorityId) => {
      try {
        const result = await getStaticPriority(priorityId)
        jobTicket.priority = result?.name
        delete jobTicket.priorityId
      } catch (error) {
        console.log('fetchPriority - error: ', error)
      }
    }
    console.log('JobTicketView-useEffect-jobTicket.respSectionId : ', jobTicket.respSectionId)
    fetchSection(jobTicket.respSectionId)
    fetchOriginator(jobTicket.originatorId)
    fetchStatus(jobTicket.statusId)
    fetchPriority(jobTicket.priorityId)
  }, [jobTicket])
  if (!jobTicket) {
    return <div>Loading....</div>
  }
  //delete unneccessery properties
  delete jobTicket._id
  delete jobTicket.__v

  let properties = Object.getOwnPropertyNames(jobTicket)
  // function getProperty(item) {
  //   return [item.property]
  // }

  // let properties = cmmsView.jobTicket.map(getProperty)
  //delete blank properties
  properties.map((property) => {
    if (jobTicket[property] === '') {
      delete jobTicket[property]
    }
  })
  properties = Object.getOwnPropertyNames(jobTicket)

  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      {properties.map((property) =>
        property === 'detailTask' ||
        property === 'detailSHE' ||
        property === 'executor' ||
        property === 'detailAction' ? (
          <div key={property} className="flex flex-col font-medium">
            <div className="mb-4 grid grid-cols-1">
              <div className="mb-3 mt-2 grid grid-cols-1">
                <div className="px-6 font-bold">{property}</div>
                <GetElement name={property} elements={jobTicket[property]} />
              </div>
            </div>
          </div>
        ) : property === 'id' ? (
          <div className="mb-3 mt-5 rounded-2xl bg-blue-100 px-3 py-2 text-xl font-bold shadow-md dark:bg-gray-900">
            Job Ticket Detail
          </div>
        ) : (
          <div key={property} className="font-medium">
            <div className="mb-4 grid grid-cols-4 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className="col-span-1 px-3 font-bold">{property}</div>
              <div className="col-span-3">{jobTicket[property]}</div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
