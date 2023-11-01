import { AiOutlineUser } from 'react-icons/ai'
import { MdSupervisorAccount } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { Button } from '@/components/ui/button'

export default function SelectPositionPage() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl text-center">Select your position</h1>
        <div className="flex flex-col justify-center w-full items-center rounded-[2.25rem] bg-[#F9F9F9] shadow-xl mt-10">
          <button className="flex items-center justify-between w-full px-4 py-12 rounded-t-[2.25rem] hover:bg-[#DDDDDD]">
            <AiOutlineUser size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">Employee</span>
            <BiChevronRight className={''} />
          </button>
          <div className="w-full border border-neutral-400" />
          <button className="flex items-center justify-between w-full px-4 py-12 rounded-b-[2.25rem] hover:bg-[#DDDDDD]">
            <MdSupervisorAccount size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">Employer</span>
            <BiChevronRight className={''} />
          </button>
        </div>
      </section>
      <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md">
        Back
      </Button>
    </>
  )
}
