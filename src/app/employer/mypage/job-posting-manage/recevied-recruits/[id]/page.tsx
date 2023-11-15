import JobPostingCard from '@/components/job-posting-card'
import RecruitCard from '@/components/recruitCard'
import Header from '@/components/ui/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

const recruits = [
  {
    firstname: '뚱',
    lastname: '나',
    nationality: '베트남',
    gender: '여성',
    birth: '1990-06-01',
    visa_type: 'F-4',
    personality_tag: ['열심히 일함', '팀 플레이어', '혁신적'],
    bookmark: true,
  },
  {
    firstname: '리',
    lastname: '왕',
    nationality: '중국',
    gender: '남성',
    birth: '1992-09-12',
    visa_type: 'H-1B',
    personality_tag: ['책임감 강함', '창의적', '커뮤니케이션 능력 우수'],
    bookmark: true,
  },
]
function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header headline={'받은 이력서'} />
      <h2 className="px-4 mt-16 mb-4 font-bold text-md text-base-primary-normal">
        복잡한 코딩 프론트엔드 개발자 모집중
      </h2>
      <Tabs defaultValue="all" className="w-full ">
        <TabsList className="px-8">
          <TabsTrigger className="text-md hover:text-brand-primary-normal" value="all">
            전체
          </TabsTrigger>
          <TabsTrigger className="text-md hover:text-brand-primary-normal" value="unexamined">
            읽지 않은 이력서
          </TabsTrigger>
        </TabsList>
        <hr />
        <div className="flex flex-col mt-3">
          <TabsContent className="space-y-4" value="all">
            {recruits.map((recruit) => {
              return <RecruitCard recruit={recruit} />
              {
                /*이력서 상세페이지 link */
              }
            })}
          </TabsContent>
          <TabsContent className="space-y-4" value="unexamined">
            {recruits.map((recruit) => {
              return <RecruitCard recruit={recruit} />
              {
                /*이력서 상세페이지 link */
              }
            })}
          </TabsContent>
        </div>
      </Tabs>
    </>
  )
}

export default page
