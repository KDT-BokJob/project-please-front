import { BriefcaseIcon, CheckedBookmarkIcon, JobFactoryIcon, KRWIcon, MapIcon, OutlineBookmarkIcon } from '@/lib/icons'

export default function JobCard({ recruit, children }: { recruit: any; children?: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-1 bg-base-bright-normal p-5 rounded-xl shadow-md">
      {recruit.bookmark ? (
        <CheckedBookmarkIcon className="absolute top-0 right-3" color="#3CB371" size="20" />
      ) : (
        <OutlineBookmarkIcon className="absolute top-0 right-3" color="#3CB371" size="18" />
      )}
      <span className="flex items-center justify-between">
        <h2 className="font-semibold">{recruit.title}</h2>
        <JobFactoryIcon size="40" />
      </span>
      <span className="flex gap-2">
        <BriefcaseIcon size="18" />
        <p className="text-xs ">{recruit.work_type}</p>
      </span>
      <span className="flex gap-2">
        <KRWIcon size="18" />
        <p className="text-xs ">{recruit.salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / month</p>
      </span>
      <span className="flex gap-2">
        <MapIcon size="18" />
        <p className="text-xs ">{recruit.work_location}</p>
      </span>
      <span className="w-3/4 grid grid-cols-3 gap-1 mt-2">
        {recruit.visa_type.map((type: any) => (
          <p
            key={type}
            className="inline-block py-1 border-2 text-xs text-center bg-base-bright-light border-brand-secondary-light rounded-full"
          >
            {type}
          </p>
        ))}
      </span>
      {children}
    </div>
  )
}
