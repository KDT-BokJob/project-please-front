'use client'
import Header from '@/components/ui/Header'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import JobPostingCard from '@/components/job-posting-card'

const recruits = [
  {
    title: 'Frontend Developer',
    work_type: 'Full-time',
    salary: '4500000',
    work_location: 'Busan, South Korea',
    visa_type: ['H-1B', 'F-4', 'E-7'],
  },
  {
    title: 'Data Scientist',
    work_type: 'Part-time',
    salary: '3000000',
    work_location: 'Incheon, South Korea',
    visa_type: ['H-1B', 'F-5'],
  },
  {
    title: 'UX/UI Designer',
    work_type: 'Remote',
    salary: '4000000',
    work_location: 'Remote',
    visa_type: ['H-1B', 'F-2', 'E-7'],
  },
  {
    title: 'Project Manager',
    work_type: 'Full-time',
    salary: '6000000',
    work_location: 'Daejeon, South Korea',
    visa_type: ['H-1B', 'F-5', 'E-7'],
  },
]
function page() {
  const [activateDeleteBtn, setActivateDeleteBtn] = useState(false)
  return (
    <>
      <Header headline={'채용공고 관리'} />
      <Tabs defaultValue="all" className="w-full mt-20 ">
        <TabsList className="px-6">
          <TabsTrigger className="text-md hover:text-brand-primary-normal" value="all">
            전체
          </TabsTrigger>
          <TabsTrigger className="text-md hover:text-brand-primary-normal" value="ongoing">
            진행중
          </TabsTrigger>
          <TabsTrigger className="text-md hover:text-brand-primary-normal" value="closed">
            마감
          </TabsTrigger>
        </TabsList>
        <hr />
        <div className="flex flex-col mt-3">
          <Button
            className={`self-end mb-2 ${activateDeleteBtn ? 'bg-base-primary-normal hover:bg-base-secondary-normal' : ''} `}
            size={'mini'}
            onClick={() => setActivateDeleteBtn(!activateDeleteBtn)}
          >
            {activateDeleteBtn ? '완료' : '편집'}
          </Button>

          <TabsContent className="space-y-4" value="all">
            {recruits.map((recruit) => {
              return <JobPostingCard recruit={recruit} activateDelete={activateDeleteBtn} />
            })}
          </TabsContent>
          <TabsContent value="ongoing"></TabsContent>
          <TabsContent value="closed"></TabsContent>
        </div>
      </Tabs>
      <main className="mt-20"></main>
    </>
  )
}

export default page
