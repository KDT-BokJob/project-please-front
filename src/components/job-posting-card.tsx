import { KRWIcon, MapIcon, NextIcon, Xmark } from '@/lib/icons'

export default function JobPostingCard({ recruit, activateDelete }: { recruit: any; activateDelete?: boolean }) {
  return (
    <div className="relative flex flex-col gap-1 rounded-md shadow-md bg-base-bright-normal">
      <div className="px-5 pt-3 ">
        <span className="flex items-center justify-between">
          <h2 className="font-semibold">{recruit.title}</h2>
          <button className={`${activateDelete ? 'opacity-100' : 'opacity-0'}`}>
            <Xmark className="text-base-primary-normal hover:text-brand-primary-light" size={'18'} />
          </button>
        </span>
        {/* <span className="flex gap-2">
          <BriefcaseIcon size="18" />
          <p className="text-xs ">{recruit.work_type}</p>
        </span> */}
        <span className="flex gap-2">
          <KRWIcon size="18" />
          <p className="text-xs ">{recruit.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / month</p>
        </span>
        <span className="flex gap-2">
          <MapIcon size="18" />
          <p className="text-xs ">{recruit.workLocation}</p>
        </span>
        <span className="grid w-3/4 grid-cols-3 gap-1 mt-2">
          {recruit.visa.map((type: any) => (
            <p
              key={type}
              className="inline-block py-[1px] text-xs text-center border-2 rounded-full bg-base-bright-light border-brand-secondary-light"
            >
              {type}
            </p>
          ))}
        </span>
      </div>

      <button className="flex justify-between w-full px-4 py-2 text-sm bg-white itmes-center rounded-b-md">
        <p className="">
          받은 이력서
          <span className="ml-1 text-brand-primary-normal">3</span>
        </p>
        <NextIcon size={'20'} />
      </button>
    </div>
  )
}
