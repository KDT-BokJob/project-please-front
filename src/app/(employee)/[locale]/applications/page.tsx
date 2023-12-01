import JobCard from '@/components/job-card'
import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'
import { PencilIcon } from '@/lib/icons'

const jobData = [
  {
    recruit_id: 1,
    company_id: 123,
    job_code: 'a123',
    title: 'title1',
    content: 'detail',
    create_at: 'write-date',
    expired_at: 'end-date',
    salary: '3000000',
    work_type: '제조업',
    work_location: 'Gwangjin-gu/dddd/dddd',
    visa_type: ['E-7', 'E-9', 'F-4', 'F-5'],
    work_period: 'period',
    work_days_week: '주총근무일수',
    work_start_hour: '근무시작시간',
    work_end_hour: '근무종료시간',
    bookmark: false,
  },
  {
    recruit_id: 2,
    company_id: 124,
    job_code: 'a1231',
    title: 'title2',
    content: 'detail',
    create_at: 'write-date',
    expired_at: 'end-date',
    salary: '3000000',
    work_type: '제조업',
    work_location: 'Gwangjin-gu/dddd/dddd',
    visa_type: ['E-7', 'E-9'],
    work_period: 'period',
    work_days_week: '주총근무일수',
    work_start_hour: '근무시작시간',
    work_end_hour: '근무종료시간',
    bookmark: true,
  },
  {
    recruit_id: 3,
    company_id: 125,
    job_code: 'a1232',
    title: 'title3',
    content: 'detail',
    create_at: 'write-date',
    expired_at: 'end-date',
    salary: '3000000',
    work_type: '제조업',
    work_location: 'Gwangjin-gu/dddd/dddd',
    visa_type: ['E-7', 'E-9'],
    work_period: 'period',
    work_days_week: '주총근무일수',
    work_start_hour: '근무시작시간',
    work_end_hour: '근무종료시간',
    bookmark: false,
  },
  {
    recruit_id: 4,
    company_id: 126,
    job_code: 'a12334',
    title: 'title4',
    content: 'detail',
    create_at: 'write-date',
    expired_at: 'end-date',
    salary: '3000000',
    work_type: '제조업',
    work_location: 'Gwangjin-gu/dddd/dddd',
    visa_type: ['E-7', 'E-9'],
    work_period: 'period',
    work_days_week: '주총근무일수',
    work_start_hour: '근무시작시간',
    work_end_hour: '근무종료시간',
    bookmark: true,
  },
]

export default function ApplicationPage() {
  return (
    <>
      <Header headline="Application" />
      <div className="flex flex-col justify-center gap-4 mt-14 mb-20 px-8 pb-20">
        {jobData.map((recruit) => (
          <div key={recruit.recruit_id}>
            <JobCard recruit={recruit}>
              <Button className="absolute right-1 bottom-5 rounded-full text-xs px-0 font-normal h-7 w-20 gap-1">
                Review
                <PencilIcon />
              </Button>
            </JobCard>
          </div>
        ))}
      </div>
    </>
  )
}
