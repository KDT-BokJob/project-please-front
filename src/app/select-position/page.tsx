import { AiOutlineUser } from 'react-icons/ai'
import { MdSupervisorAccount } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'

export default function SelectPositionPage() {
  return (
    <section className="bg-white h-[100vh] w-[100vw] relative mx-auto">
      <div
        className={
          'absolute flex flex-col w-full  max-w-[375px] items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <h1 className="mb-8 text-[23px] font-semibold leading-normal text-zinc-800">Select your position</h1>
        <div className="flex flex-col justify-center w-full items-center bg-[#F9F9F9] rounded-[2.25rem] shadow-lg mb-36">
          <button className="flex items-center justify-between w-full px-4 py-12">
            <AiOutlineUser size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">Employee</span>
            <BiChevronRight className={''} />
          </button>
          <div className="w-full border border-neutral-400" />
          <button className="flex items-center justify-between w-full px-4 py-12">
            <MdSupervisorAccount size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">Employer</span>
            <BiChevronRight className={''} />
          </button>
        </div>
        <button className="flex items-center justify-center w-full h-12 gap-2 px-8 py-3 bg-green-500 rounded-3xl">
          <span className="text-base font-bold leading-normal text-center text-white">Back</span>
        </button>
      </div>
    </section>
  )
}
