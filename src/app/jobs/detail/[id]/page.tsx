import { SlArrowLeft } from 'react-icons/sl'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { HiOutlineBookmark } from 'react-icons/hi'
import { HiBookmark } from 'react-icons/hi'

const jobData = {
  recruit_id: 1,
  company_id: 123,
  job_code: 'a123',
  title: '공고명1',
  content: '세부 내용',
  create_at: '작성 날짜',
  expired_at: '마감일',
  salary: '3000000',
  work_type: '제조업',
  work_location: 'Gwangjin-gu/dddd/dddd',
  visa_type: ['E-7', 'E-9'],
  work_period: '근무기간',
  work_days_week: '주총근무일수',
  work_start_hour: '근무시작시간',
  work_end_hour: '근무종료시간',
  bookmark: true,
}

function Detail({ type, value }: { type: string; value: any }) {
  return (
    <span className="flex justify-between">
      <p className="font-semibold text-s">{type}</p>
      <p className="text-sm text-base-secondary-dark">{value}</p>
    </span>
  )
}

export default function JobsDetail() {
  return (
    <>
      <div className="px-2 mb-2">
        <SlArrowLeft size="20" />
      </div>
      <div className="w-full mb-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover shadow-lg"
          />
        </AspectRatio>
      </div>
      <div className="px-6 flex flex-col gap-8 mb-8">
        <div>
          <h1 className="font-bold text-lg">{jobData.title}</h1>
          <Detail type="기업명" value={jobData.create_at} />
        </div>
        <div className="flex flex-col gap-2">
          <Detail type="Job Type" value={jobData.work_type} />
          <hr />
          <Detail type="Location" value={jobData.work_location} />
          <hr />
          <Detail type="Visa" value={jobData.visa_type.join(' ')} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Working Conditions</h2>
          <Detail type="Working Period" value={jobData.work_period} />
          <hr />
          <Detail type="Working days" value={jobData.work_days_week} />
          <hr />
          <Detail type="Working hours" value={`${jobData.work_start_hour} - ${jobData.work_end_hour}`} />
          <hr />
          <Detail type="Pay" value={`${jobData.salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/month`} />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-base-primary-nomal">Job Description</h2>
          <p>{jobData.content}</p>
        </div>
        <span className="flex justify-center gap-2">
          {jobData.bookmark ? (
            <Button className="w-full h-12 rounded-full font-bold text-base border border-brand-primary-nomal text-brand-primary-nomal bg-base-bright-light shadow-md">
              <HiBookmark size="18" />
              Marked
            </Button>
          ) : (
            <Button className="w-full h-12 rounded-full font-bold text-base border border-brand-primary-nomal text-brand-primary-nomal bg-base-bright-light shadow-md">
              <HiOutlineBookmark size="18" />
              Mark
            </Button>
          )}
          <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-nomal shadow-md">
            Apply
          </Button>
        </span>
      </div>
    </>
  )
}
