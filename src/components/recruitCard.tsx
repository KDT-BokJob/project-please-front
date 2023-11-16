import { Card } from '@/components/ui/card'
import { CheckedBookmarkIcon, NextIcon, OutlineBookmarkIcon } from '@/lib/icons'
import React from 'react'

const getAge = (birth: any) => {
  const currentYear = new Date().getFullYear()
  const birthYear = parseInt(birth.split('-')[0])
  const age = currentYear - birthYear
  return age
}

function RecruitCard({ recruit }: { recruit: any }) {
  return (
    <Card className="flex justify-between ">
      <div className="flex flex-col px-6 py-4">
        <div className="flex items-center font-bold text-md">
          <p>
            {recruit.firstname} {recruit.lastname}
          </p>
          <p>
            ({recruit.gender},{getAge(recruit.birth)})
          </p>
        </div>
        <div className="flex items-center mt-1 text-sm">
          <p className="mr-1 px-[0.5rem] py-[0.1rem] text-xs border-2 rounded-full border-brand-primary-normal">국적</p>
          <p className="">{recruit.nationality}</p>
          <p className="mr-1 ml-2 px-[0.5rem] py-[0.1rem] text-xs border-2 rounded-full border-brand-primary-normal">비자</p>
          <p> {recruit.visa_type}</p>
        </div>
      </div>
      <div></div>
      <div className="relative">
        {recruit.bookmark ? (
          <CheckedBookmarkIcon className="absolute left-1" color="#3CB371" size="20" />
        ) : (
          <OutlineBookmarkIcon className="absolute left-4" color="#3CB371" size="18" />
        )}
        <NextIcon className="hover:text-brand-primary-normal translate-y-11" size={'30'} />
      </div>
    </Card>
  )
}

export default RecruitCard
