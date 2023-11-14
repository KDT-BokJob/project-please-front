import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, CheckedBookmarkIcon, OutlineBookmarkIcon, CheckCircleIcon } from '@/lib/icons'

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
        <ChevronLeft size="2rem" />
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
          <h2 className="font-bold text-lg text-base-primary-normal">Job Description</h2>
          <p>{jobData.content}</p>
        </div>
        <span className="flex justify-center gap-2">
          {jobData.bookmark ? (
            <Button className="w-full h-12 rounded-full font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
              <CheckedBookmarkIcon size="18" />
              Marked
            </Button>
          ) : (
            <Button className="w-full h-12 rounded-full font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
              <OutlineBookmarkIcon size="18" />
              Mark
            </Button>
          )}
          {/* Apply 버튼 클릭 시 모달 창 띄우기 (나중에 이력서 여부에 따라 변경하게 해야함) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
                Apply
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-[#F5F5F5]">
                  <CheckCircleIcon size="30" />
                </span>
              </DialogHeader>
              <p className="text-center text-xl font-semibold">Sure you want to appy without Resume?</p>
              <p className="text-center text-xs">Writing resume makes your chances of passing higher</p>
              <DialogFooter className="flex flex-row justify-center sm:justify-center gap-8">
                <DialogClose asChild>
                  <Button className=" h-12 rounded-lg font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
                    Go Edit
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className=" h-12 rounded-lg font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
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
