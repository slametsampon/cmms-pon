import Image from '@/components/Image'
import CmmsLayout from '@/layouts/CmmsLayout'
export default function Home() {
  return (
    <>
      <CmmsLayout title="Home" description="Home Page">
        <div className="mb-2 mt-7 flex flex-row rounded-full bg-yellow-50 shadow-md dark:bg-gray-900">
          <Image
            src="/static/images/cmms200x200.png"
            alt="cmms-logo"
            width="275"
            height="250"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="mt-3 text-xl font-bold">
              <span className="text-3xl italic text-blue-700">A</span>ccurate
            </h1>
            <h1 className="mt-1 px-5 text-xl font-bold">
              <span className="text-3xl italic text-blue-700">A</span>
              ccessibility
            </h1>
            <h1 className="mt-1 px-10 text-xl font-bold">
              <span className="text-3xl italic text-blue-700">R</span>ealtime
            </h1>
            <h1 className="mt-1 px-14 text-xl font-bold">
              <span className="text-3xl italic text-blue-700">O</span>TE - One Time Entry
            </h1>
            <h1 className="mt-1 px-20 text-xl font-bold">
              <span className="text-3xl italic text-blue-700">I</span> ntuitive
            </h1>
          </div>
        </div>
        <div className="mt-6">
          <Image
            src="/static/images/pon.png"
            alt="cmms-logo"
            width="600"
            height="400"
            className="rounded-3xl"
          />
        </div>
      </CmmsLayout>
    </>
  )
}
