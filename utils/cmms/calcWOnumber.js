import getCounter from './getCounter'
import getStaticSection from './getStaticSection'
import getUser from './getUser'

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0')
}

//patern 001_WO_Elins_04_2023

async function BuildNumber(section, counter) {
  try {
    const date = new Date()
    const CURRENT_MONTH = date.getMonth() + 1
    const WO = `WO`
    const SECTION = `${section?.name ? section.name : 'SECTION'}`

    var cntVal = counter?.workOrder ? counter.workOrder + 1 : 1
    //roll over month
    if (counter?.prevMonth !== CURRENT_MONTH) {
      cntVal = 1
      counter.prevMonth = CURRENT_MONTH
    }
    const COUNTER = padWithLeadingZeros(cntVal, 3)
    const MONTH = padWithLeadingZeros(counter.prevMonth, 2)

    const YEAR = date.getFullYear().toString()
    const woNbr = `${WO}_${COUNTER}_${SECTION}_${MONTH}_${YEAR}`
    return { woNbr: woNbr }
  } catch (error) {
    console.log('BuildNumber - error: ', error)
  }
}

export default async function CalcWOnumber(userId) {
  try {
    const user = await getUser(userId)
    const section = await getStaticSection(user?.sectionId)
    const counter = await getCounter(user?.sectionId)
    const woNbr = await BuildNumber(section, counter)

    //update counter - woNumber
    return woNbr
  } catch (error) {
    console.log('CalcWOnumber - error: ', error)
  }
}
