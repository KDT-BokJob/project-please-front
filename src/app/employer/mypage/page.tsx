import { JobPostingManage } from '@/app/employer/mypage/JobPostingManage'
import Header from '@/components/ui/Header'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function page() {
  return (
    <>
      <Header headline={'마이페이지'} navigatorOff={true} />
      <div className="px-4">
        <JobPostingManage className="mt-20 "/>
      </div>
    </>
  )
}

export default page
