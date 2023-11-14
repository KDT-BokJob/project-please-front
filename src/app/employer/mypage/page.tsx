import { JobPostingManage } from '@/app/employer/mypage/JobPostingManage'
import Header from '@/components/ui/Header'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { DefaultProfile } from '@/lib/icons'
import { Camera } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { NextIcon } from '@/lib/icons'

function page() {
  return (
    <>
      <Header headline={'마이페이지'} navigatorOff={true} />
      <div className="px-4 mt-20">
        <Card className="flex items-center p-4">
          <div className="relative w-24">
            <DefaultProfile className="text-brand-primary-normal" size={'80px'} />
            <Button className="absolute bottom-0 right-4" variant={'profile'} size={'xs'}>
              <Camera size={'1rem'} className={cn(' bg-transparent text-base-bright-light ')} />
            </Button>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold"> 복잡한 코딩</p>
            <p className="text-sm">서울특별시 마포구</p>
            <p className="text-sm">seunghyo7742@naver.com</p>
          </div>
          <NextIcon className="ml-4" size={'30'} />
        </Card>
        <JobPostingManage className="mt-6" />
        <div className="flex flex-col gap-2 px-6 py-4 font-medium bg-base-bright-normal text-base-primary-light">
          <p>고객센터</p>
          <p>로그아웃</p>
        </div>
      </div>
    </>
  )
}

export default page
