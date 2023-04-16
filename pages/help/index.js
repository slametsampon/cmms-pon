import CmmsClassDiagram from '../../public/static/images/classDiagram/cmmsDiagram.svg'
import CmmsLayout from '@/layouts/CmmsLayout'
export default function help() {
  return (
    <>
      <CmmsLayout title="Help" description="Help Page">
        <div className="mt-4 rounded-3xl bg-green-50 p-4 shadow-md dark:bg-gray-900">
          <h1 className="mb-4 mt-4 text-xl font-bold italic">Class Linkage</h1>
          <CmmsClassDiagram />
        </div>
      </CmmsLayout>
    </>
  )
}
