'use client'
import { useState } from 'react'

import JobCard from '@/components/job-card'
import SlickSlider from '@/components/slider'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, LocationtIcon, SearchIcon, VisaIcon } from '@/lib/icons'
import location from '#/location.json'
import Logo from '#/please-logo.svg'

const jobData = [
  {
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
    bookmark: false,
  },
  {
    recruit_id: 2,
    company_id: 124,
    job_code: 'a1231',
    title: '공고명2',
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
  },
  {
    recruit_id: 3,
    company_id: 125,
    job_code: 'a1232',
    title: '공고명3',
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
    bookmark: false,
  },
  {
    recruit_id: 4,
    company_id: 126,
    job_code: 'a12334',
    title: '공고명4',
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
  },
]

const visaType = [
  {
    visa: 'E-9',
    jobs: [
      { job: '농업', jobCode: '01' },
      { job: '어업', jobCode: '03' },
      { job: '광업', jobCode: '07' },
      { job: '제조업', jobCode: '10~34' },
      { job: '폐기물 처리업', jobCode: '38' },
      { job: '건설업', jobCode: '41' },
      { job: '도매 및 소매업', jobCode: '46' },
      { job: '운수 및 창고업', jobCode: '49,52' },
      { job: '출판업', jobCode: '58~59' },
    ],
  },
  {
    visa: 'D-2',
    jobs: [
      { job: '운수 및 창고업', jobCode: '49,52' },
      { job: '숙박업', jobCode: '55' },
    ],
  },
  {
    visa: 'H-2',
    jobs: [
      { job: '농업', jobCode: '01' },
      { job: '어업', jobCode: '03' },
      { job: '광업', jobCode: '07' },
      { job: '제조업', jobCode: '10~34' },
      { job: '하수, 폐수 및 분뇨 처리업', jobCode: '37' },
      { job: '폐기물 처리업', jobCode: '38' },
      { job: '건설업', jobCode: '41~42' },
      { job: '도매 및 소매업', jobCode: '46~47' },
      { job: '운수 및 창고업', jobCode: '49,52' },
      { job: '숙박업', jobCode: '55' },
      { job: '음식점 및 주점업', jobCode: '56' },
      { job: '출판업', jobCode: '58~59' },
      { job: '사업시설 관리 및 조경 서비스업', jobCode: '74' },
      { job: '사업 지원 서비스업', jobCode: '75' },
      { job: '사회복지 서비스업', jobCode: '87' },
      { job: '개인 및 소비용품 수리업', jobCode: '95' },
      { job: '기타 개인 서비스업', jobCode: '96' },
      { job: '가구 내 고용활동', jobCode: '97' },
    ],
  },
]

interface Jobs {
  job: string
  jobCode: string
}

interface Detail {
  value: string
}

export default function JobsPage() {
  const [selectVisa, setSelectVisa] = useState<string>()
  const [selectJobs, setSelectJobs] = useState<Jobs[]>([])
  const [selectLocation, setSelectLocation] = useState<string>()
  const [selectDetail, setSelectDetail] = useState<Detail[]>([])

  return (
    <>
      {/* search */}
      <Logo className="ml-6" />
      <section className="px-6 pb-8 shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex items-center bg-[#F1F1F1] px-4 rounded-lg">
          <Input
            placeholder="Search job titles or keywords"
            className="border-none bg-[#F1F1F1] text-base-secondary-normal outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <SearchIcon color="gray" size="24" />
        </div>
        <div className="flex my-4">
          {/* visa button */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center justify-between w-1/2 mr-2 px-4 py-2 rounded-md border border-brand-primary-light hover:bg-[#DDDDDD]">
                <VisaIcon size="18" />
                <span className="text-sm font-semibold">Visa</span>
                <ChevronDown />
              </button>
            </DialogTrigger>
            <DialogContent className="pl-0">
              <DialogHeader className="items-start pl-6">
                <h1 className="font-semibold ">Select Visa</h1>
              </DialogHeader>
              <div className="flex">
                <nav className="border-r border-base-bright-dark">
                  {visaType.map((type) => (
                    <p
                      key={type.visa}
                      className={`border-b block border-base-bright-dark w-24 xs:w-16 py-3 text-center hover:text-brand-primary-normal ${
                        selectVisa === type.visa && 'text-brand-primary-normal'
                      }`}
                      onClick={() => {
                        setSelectVisa(() => type.visa)
                        setSelectJobs(() => type.jobs)
                      }}
                    >
                      {type.visa}
                    </p>
                  ))}
                </nav>
                <div className="flex flex-wrap gap-4 ml-20 xs:ml-4 h-[330px] overflow-y-scroll pb-4">
                  {selectJobs.length ? (
                    selectJobs.map((job) => (
                      <Button
                        key={job.jobCode}
                        className={`w-32 h-12 rounded-lg text-black p-2 text-sm font-semibold justify-evenly bg-[#f5f5f5] shadow-md hover:bg-[#DDDDDD]`}
                      >
                        {job.job}
                      </Button>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <DialogFooter className="flex flex-row justify-center gap-8 pl-6 sm:justify-center">
                <DialogClose asChild>
                  <Button className="h-12 text-base font-bold border rounded-lg shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
                    Reset
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="h-12 px-16 text-base font-bold rounded-lg shadow-md text-base-bright-light bg-brand-primary-normal">
                    Complete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* location button */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center justify-between w-1/2 mr-2 px-4 py-2 rounded-md border border-brand-primary-light hover:bg-[#DDDDDD]">
                <LocationtIcon size="18" />
                <span className="text-sm font-semibold">Location</span>
                <ChevronDown />
              </button>
            </DialogTrigger>
            <DialogContent className="pl-0">
              <DialogHeader className="items-start pl-6">
                <h1 className="font-semibold ">Select Location</h1>
              </DialogHeader>
              <div className="flex justify-start">
                <nav className="border-r border-base-bright-dark h-[330px] overflow-y-scroll">
                  {location.data.map((local) => (
                    <p
                      key={local.location}
                      className={`border-b block border-base-bright-dark w-24 xs:w-16 py-3 text-center hover:text-brand-primary-normal ${
                        selectLocation === local.location && 'text-brand-primary-normal'
                      }`}
                      onClick={() => {
                        setSelectLocation(() => local.location)
                        setSelectDetail(() => local.detail)
                      }}
                    >
                      {local.location}
                    </p>
                  ))}
                </nav>
                <div className="flex flex-wrap content-start gap-4 ml-20 xs:ml-4 w-[273px] h-[330px] overflow-y-scroll pb-4">
                  {selectDetail.length ? (
                    selectDetail.map((job) => (
                      <Button
                        key={job.value}
                        className={`w-32 h-12 rounded-lg text-black p-2 text-sm font-semibold justify-evenly bg-[#f5f5f5] shadow-md hover:bg-[#DDDDDD]`}
                      >
                        {job.value}
                      </Button>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <DialogFooter className="flex flex-row justify-center gap-8 pl-6 sm:justify-center">
                <DialogClose asChild>
                  <Button className="h-12 text-base font-bold border rounded-lg shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
                    Reset
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="h-12 px-16 text-base font-bold rounded-lg shadow-md text-base-bright-light bg-brand-primary-normal">
                    Complete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Button className="w-full h-10 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md">
          Search
        </Button>
      </section>
      <section className="flex flex-col gap-4 px-6 overflow-x-hidden pb-14">
        <Tabs defaultValue="recentlyView" className="w-full">
          <TabsList>
            <TabsTrigger value="recentlyView">Recently viewed</TabsTrigger>
            <TabsTrigger value="bookmark">Book Marked</TabsTrigger>
          </TabsList>
          <TabsContent value="recentlyView">
            <SlickSlider total={jobData.length}>
              {jobData.map((recruit) => (
                <div className="py-2" key={recruit.recruit_id}>
                  <JobCard recruit={recruit} />
                </div>
              ))}
            </SlickSlider>
          </TabsContent>
          <TabsContent value="bookmark">
            <SlickSlider total={jobData.filter((recruit) => recruit.bookmark).length}>
              {jobData
                .filter((recruit) => recruit.bookmark)
                .map((recruit) => (
                  <div className="py-2" key={recruit.recruit_id}>
                    <JobCard recruit={recruit} />
                  </div>
                ))}
            </SlickSlider>
          </TabsContent>
        </Tabs>
        <div>
          <span className="flex justify-between">
            <h1 className="text-lg font-semibold text-brand-primary-light">E9 VISA Recommended Job</h1>
          </span>
          <SlickSlider total={jobData.length}>
            {jobData.map((recruit) => (
              <div className="py-2" key={recruit.recruit_id}>
                <JobCard recruit={recruit} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>
    </>
  )
}
