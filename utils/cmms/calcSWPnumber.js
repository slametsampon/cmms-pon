import getCounter from './getCounter'
import getStaticSection from './getStaticSection'
import getUser from './getUser'
import updateCounter from './updateCounter'

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0')
}

async function BuildNumber(swp, section, counter) {
  try {
    var counterUpdate = counter
    const date = new Date()
    const CURRENT_MONTH = date.getMonth() + 1
    const SWP = `${swp ? swp : 'SWP'}`
    const SECTION = `${section?.name ? section.name : 'SECTION'}`

    var cntVal = counter?.swp ? counter.swp + 1 : 1
    //roll over month
    if (counter?.prevMonth !== CURRENT_MONTH) {
      cntVal = 1
      counter.prevMonth = CURRENT_MONTH
    }
    const COUNTER = padWithLeadingZeros(cntVal, 3)
    const MONTH = padWithLeadingZeros(counter.prevMonth, 2)

    const YEAR = date.getFullYear().toString()
    const swpNbr = `${SWP}_${COUNTER}_${SECTION}_${MONTH}_${YEAR}`
    counterUpdate.swp = cntVal
    return { swpNbr: swpNbr, counterUpdate: counterUpdate }
  } catch (error) {
    console.log('BuildNumber - error : ', error)
  }
}

export default async function CalcSWPnumber(swp, userId) {
  //userId = 3
  try {
    //patern 001_CWP_Elins_04_2023
    console.log('CalcSWPnumber-userId : ', userId)
    const user = await getUser(userId)
    console.log('CalcSWPnumber-user : ', user)
    const section = await getStaticSection(user?.sectionId)
    const counter = await getCounter(user?.sectionId)
    const result = await BuildNumber(swp, section, counter)

    //update counter - swp
    updateCounter(section.id, result.counterUpdate)
    return result
  } catch (error) {
    console.log('CalcSWPnumber - error: ', error)
  }
}
