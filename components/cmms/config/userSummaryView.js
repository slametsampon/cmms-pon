import CustomLink from '@/components/Link'
import getStaticLevel from '@/utils/cmms/getStaticLevel'
import getStaticSection from '@/utils/cmms/getStaticSection'
import { useState } from 'react'

export default function UserSummaryView({ user }) {
  const [section, setSection] = useState({})
  const [level, setLevel] = useState({})

  const fetchSection = async (sectionId) => {
    const result = await getStaticSection(sectionId)
    setSection(result)
  }

  const fetchLevel = async (levelId) => {
    const result = await getStaticLevel(levelId)
    setLevel(result)
  }

  fetchLevel(user.levelId)
  fetchSection(user.sectionId)

  return (
    <div className="mt-3 rounded-3xl bg-slate-50 text-lg font-normal shadow-md dark:bg-gray-900 md:grid md:grid-cols-3">
      <div className="px-6 text-left font-bold md:py-3 ">
        <CustomLink key={user.id} href={`/config/user/${user.id}`} className="link-active p-2">
          {user.name}
        </CustomLink>
      </div>
      <div className="px-6 text-left md:py-3">{section?.description}</div>
      <div className="px-6 text-left md:py-3">{level?.description}</div>
    </div>
  )
}
