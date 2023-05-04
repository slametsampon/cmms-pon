import getStaticLevel from '@/utils/cmms/getStaticLevel'
import getStaticSection from '@/utils/cmms/getStaticSection'
import { useEffect, useState } from 'react'

export default function UserView({ user }) {
  const [level, setLevel] = useState({})
  const [section, setSection] = useState({})
  // user.ReversePath = getUser(user.reverseUserId)
  // user.ForwardPath = getUser(user.forwardUserId)
  useEffect(() => {
    const fetchSection = async (sectionId) => {
      try {
        const result = await getStaticSection(sectionId)
        setSection(result)
        user.Section = result?.description
        delete user.sectionId
      } catch (error) {
        console.log('fetchSection - error: ', error)
      }
    }

    const fetchLevel = async (levelId) => {
      try {
        const result = await getStaticLevel(levelId)
        setLevel(result)
        user.Level = result?.description
        delete user.levelId
      } catch (error) {
        console.log('fetchLevel - error: ', error)
      }
    }

    fetchLevel(user.levelId)
    fetchSection(user.sectionId)
  }, [user])

  //delete unneccessery properties
  delete user._id
  delete user.__v

  const properties = Object.getOwnPropertyNames(user)
  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 text-left font-medium text-gray-900 shadow-sm dark:bg-gray-900  dark:text-gray-100">
      {properties.map((property) =>
        property === 'id' ? (
          <div
            key={property}
            className="mt-3 hidden rounded-3xl bg-slate-50 text-lg font-bold shadow-md dark:bg-gray-900 md:grid md:grid-cols-4"
          >
            <div className="px-6 py-3">Property</div>
            <div className="col-span-3 px-6 py-3">Description</div>
          </div>
        ) : property === 'password' ||
          property === 'sectionId' ||
          property === 'reverseUserId' ||
          property === 'forwardUserId' ? (
          <div></div>
        ) : (
          <div
            key={property}
            className="mt-3 rounded-3xl bg-slate-50 text-lg font-normal shadow-md dark:bg-gray-900 md:grid md:grid-cols-4"
          >
            <div className="px-6 font-bold">{property}</div>
            <div className="col-span-3 px-6">{user[property]}</div>
          </div>
        )
      )}
    </div>
  )
}
