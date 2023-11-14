import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NextIcon } from '@/lib/icons'
import { AlarmDot } from '@/lib/icons'

const jobPosting = [
  { title: '복잡한코딩 프론트엔드 개발자 모집', deadline: 12 },
  { title: '복잡한코딩 프론트엔드 개발자 모집', deadline: 12 },
]
const resumes = [
  { title: '복잡한코딩 프론트엔드 개발자 모집', name: '웤어', age: '28', nation: 'korea' },
  { title: '복잡한코딩 프론트엔드 개발자 모집', name: '먀', age: '28', nation: 'korea' },
  { title: '복잡한코딩 프론트엔드 개발자 모집', name: '톤이', age: '24', nation: 'korea' },
]

type CardProps = React.ComponentProps<typeof Card>
export function JobPostingManage({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-full drop-shadow-sm px-6 py-4', className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between px-0 py-0 space-y-0 pb-">
        <CardTitle className={cn('text-lg')}>채용공고 관리</CardTitle>
        <button className="flex items-center text-sm hover:text-base-primary-light text-base-primary-normal">
          <p>전체보기</p>
          <NextIcon />
        </button>
      </CardHeader>
      <div className="">
        <p className="mt-2 font-bold">진행중인 공고</p>
        {jobPosting.map((post) => {
          return (
            <div className="flex items-center p-2 mt-2 border rounded-md">
              <p className="w-10 text-sm font-semibold text-brand-primary-normal">D-{post.deadline}</p>
              <p className="ml-4">{post.title}</p>
            </div>
          )
        })}
      </div>
      <div className="">
        <p className="mt-2 font-bold">최근 신청된 이력서</p>
        {resumes.map((resume) => {
          return (
            <button className="flex flex-col w-full p-2 mt-2 border rounded-md ring-1 ring-offset-1 ring-white hover:ring-offset-brand-primary-light">
              <AlarmDot className="absolute translate-x-[16.5rem] text-brand-point-light" size={"8"}/>
              <p className="text-sm font-semibold text-base-primary-light">{resume.title}</p>
              <div className="flex">
                <p className="text-sm font-semibold">{resume.name}/ </p>
                <p className="ml-1 text-sm font-semibold">({resume.age}세)/</p>
                <p className="ml-1 text-sm font-semibold">{resume.nation}</p>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
