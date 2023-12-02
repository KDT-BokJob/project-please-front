import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import {
  BriefcaseIcon,
  CheckCircleIcon,
  CheckedBookmarkIcon,
  ChevronLeft,
  KRWIcon,
  OutlineBookmarkIcon,
  PercentIcon,
  ReloadIcon,
  VisaIcon,
} from '@/lib/icons'

const jobData = {
  recruit_id: 1,
  company_id: 123,
  job_code: 'a123',
  title: '코딩 가르쳐주실 분 급구',
  content: '세부 내용',
  create_at: '작성 날짜',
  expired_at: '1월13일',
  salary: '3000000',
  work_type: '제조업',
  work_location: '서울특별시/마포구',
  work_start_data: '근무시작일',
  work_end_data: '근무종료일',
  visa_type: ['E-7', 'E-9'],
  work_period: '6개월',
  work_days_week: '주 5일',
  is_work_week_agreement: true,
  work_start_hour: '근무시작시간',
  work_end_hour: '근무종료시간',
  is_work_time_agreement: true,
  gender: '여성',
  salary_type: '월급',
  contry: '베트남',
  recruited_number: 3,
  is_visa_transform: true,
  bookmark: true,
  employee_count: 10,
  foreign_employee_count: 3,
}

function Detail({ type, value, className }: { type: string; value: any; className?: string }) {
  return (
    <span className="flex justify-between w-full">
      <p className={`font-semibold text-sm ${className}`}>{type}</p>
      <p className="text-sm text-base-secondary-dark">{value}</p>
    </span>
  )
}

export default function EmpoyerJobPostingPreviewPage() {
  return (
    <>
      <div className="px-2 mb-2">
        <ChevronLeft size="2rem" />
      </div>
      <div className="w-full mb-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-8 px-6 mb-8">
        <div>
          <h1 className="text-xl font-bold">{jobData.title}</h1>
          <Detail className="text-base-secondary-light" type="복잡한 코딩" value={`~${jobData.expired_at}`} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex gap-2">
            <BriefcaseIcon />
            <Detail className="text-brand-primary-normal" type="직무" value={jobData.work_type} />
          </span>
          <hr />
          <span className="flex gap-2">
            <VisaIcon />
            <Detail className="text-brand-primary-normal" type="비자" value={jobData.visa_type.join(' ')} />
          </span>
          <hr />
          <span className="flex gap-2">
            <ReloadIcon />
            <Detail
              className="text-brand-primary-normal"
              type="비자 전환"
              value={jobData.is_visa_transform ? '가능' : '불가능'}
            />
          </span>
          <hr />
          <span className="flex gap-2">
            <PercentIcon />
            <Detail
              className="text-brand-primary-normal"
              type="외국인 비율"
              value={`${(jobData.foreign_employee_count / jobData.employee_count) * 100}%`}
            />
          </span>
          <hr />
          <span className="flex gap-2">
            <KRWIcon />
            <Detail
              className="text-brand-primary-normal"
              type="급여"
              value={`${jobData.salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/${jobData.salary_type}`}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">근무 조건</h2>
          <Detail className="text-brand-primary-normal" type="기간" value={jobData.work_period} />
          <hr />
          <Detail className="text-brand-primary-normal" type="요일" value={jobData.work_days_week} />
          {jobData.is_work_week_agreement ? (
            <p className="text-xs text-right text-base-secondary-light">*협의 가능</p>
          ) : (
            <></>
          )}
          <hr />
          <Detail
            className="text-brand-primary-normal"
            type="시간"
            value={`${jobData.work_start_hour} - ${jobData.work_end_hour}`}
          />
          {jobData.is_work_time_agreement ? (
            <p className="text-xs text-right text-base-secondary-light">*협의 가능</p>
          ) : (
            <></>
          )}
          <hr />
          <Detail className="text-brand-primary-normal" type="희망 국적" value={jobData.contry} />
          <hr />
          <Detail className="text-brand-primary-normal" type="모집 성별" value={jobData.gender} />
          <hr />
          <Detail className="text-brand-primary-normal" type="모집 인원" value={`${jobData.recruited_number}명`} />
          <hr />
          <Detail className="text-brand-primary-normal" type="위치" value={jobData.work_location} />
          <hr />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-base-primary-normal">Job Description</h2>
          <p>{jobData.content}</p>
        </div>
        <span className="flex justify-center gap-2">
          {jobData.bookmark ? (
            <Button className="w-full h-12 text-base font-bold border rounded-full shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
              <CheckedBookmarkIcon size="18" />
              Marked
            </Button>
          ) : (
            <Button className="w-full h-12 text-base font-bold border rounded-full shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
              <OutlineBookmarkIcon size="18" />
              Mark
            </Button>
          )}
          {/* Apply 버튼 클릭 시 모달 창 띄우기 (나중에 이력서 여부에 따라 변경하게 해야함) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full h-12 text-base font-bold rounded-full shadow-md text-base-bright-light bg-brand-primary-normal">
                Apply
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-[#F5F5F5]">
                  <CheckCircleIcon size="30" />
                </span>
              </DialogHeader>
              <p className="text-xl font-semibold text-center">Sure you want to appy without Resume?</p>
              <p className="text-xs text-center">Writing resume makes your chances of passing higher</p>
              <DialogFooter className="flex flex-row justify-center gap-8 sm:justify-center">
                <DialogClose asChild>
                  <Button className="h-12 text-base font-bold border rounded-lg shadow-md  border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
                    Go Edit
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="h-12 text-base font-bold rounded-lg shadow-md  text-base-bright-light bg-brand-primary-normal">
                    Yes, Confirm
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </>
  )
}
