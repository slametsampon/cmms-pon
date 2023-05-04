import getCounter from './getCounter'
import getStaticSection from './getStaticSection'
import getUser from './getUser'
import updateCounter from './updateCounter'

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0')
}

//patern JT_001_Elins_04_2023

async function BuildNumber(section, counter) {
  try {
    const date = new Date()
    const CURRENT_MONTH = date.getMonth() + 1
    const JT = `JT`
    const SECTION = `${section?.name ? section.name : 'SECTION'}`

    var cntVal = counter?.jobTicket ? counter.jobTicket + 1 : 1
    //roll over month
    if (counter?.prevMonth !== CURRENT_MONTH) {
      cntVal = 1
      counter.prevMonth = CURRENT_MONTH
    }
    const COUNTER = padWithLeadingZeros(cntVal, 3)
    const MONTH = padWithLeadingZeros(counter.prevMonth, 2)

    const YEAR = date.getFullYear().toString()
    const jtNbr = `${JT}_${COUNTER}_${SECTION}_${MONTH}_${YEAR}`
    counter.jobTicket = cntVal
    return { jtNbr: jtNbr, counterUpdate: counter }
  } catch (error) {
    console.log('BuildNumber - error: ', error)
  }
}

export default async function CalcJTnumber(userId) {
  try {
    const user = await getUser(userId)
    const section = await getStaticSection(user?.sectionId)
    const counter = await getCounter(user?.sectionId)
    const result = await BuildNumber(section, counter)

    //update counter - jobTicket
    updateCounter(section.id, result.counterUpdate)
    return result
  } catch (error) {
    console.log('CalcJTnumber - error: ', error)
  }
}
