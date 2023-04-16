import EqpClassDiagram from '../../public/static/images/classDiagram/EqpDiagram.svg'
import CmmsLayout from '@/layouts/CmmsLayout'
export default function config() {
  return (
    <>
      <CmmsLayout title="Configuration" description="Configuration Page">
        <EqpClassDiagram />
      </CmmsLayout>
    </>
  )
}
config.auth = true
