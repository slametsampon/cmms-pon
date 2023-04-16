import UtClassDiagram from '../../public/static/images/classDiagram/AccDiagram.svg'
import CmmsLayout from '@/layouts/CmmsLayout'
export default function report() {
  return (
    <>
      <CmmsLayout title="Reporting" description="Reporting Page">
        <UtClassDiagram />
      </CmmsLayout>
    </>
  )
}
report.auth = true
