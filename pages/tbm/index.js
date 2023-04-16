import CmmsLayout from '@/layouts/CmmsLayout'
import UtClassDiagram from '../../public/static/images/classDiagram/utilityDiagram.svg'
export default function tbm() {
  return (
    <>
      <CmmsLayout title="TBM" description="Help Page">
        <UtClassDiagram />
      </CmmsLayout>
    </>
  )
}
tbm.auth = true
