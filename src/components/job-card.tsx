import { BiWon } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa'
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi'
import { PiFactoryLight } from 'react-icons/pi'

export default function JobCard({ recruit }: { recruit: any }) {
  return (
    <div className="relative flex flex-col gap-1 bg-base-bright-normal p-5 rounded-xl shadow-md">
      {recruit.bookmark ? (
        <HiBookmark className="absolute top-0 right-3" color="#3CB371" size="20" />
      ) : (
        <HiOutlineBookmark className="absolute top-0 right-3" color="#3CB371" size="18" />
      )}
      <span className="flex items-center justify-between">
        <h2 className="font-semibold">{recruit.title}</h2>
        <PiFactoryLight size="40" />
      </span>
      <span className="flex gap-2">
        <FaBriefcase size="18" />
        <p className="text-xs ">{recruit.work_type}</p>
      </span>
      <span className="flex gap-2">
        <BiWon size="18" />
        <p className="text-xs ">{recruit.salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / month</p>
      </span>
      <span className="flex gap-2">
        <BsMap size="18" />
        <p className="text-xs ">{recruit.work_location}</p>
      </span>
      <span className="flex flex-wrap gap-1">
        {recruit.visa_type.map((type: any) => (
          <p
            key={type}
            className="inline-block px-8 py-1 border-2 text-xs bg-base-bright-light border-brand-secondary-light rounded-full"
          >
            {type}
          </p>
        ))}
      </span>
    </div>
  )
}
