'use client'
import { Input } from '@/components/ui/input'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineIdcard } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { IoIosArrowDown } from 'react-icons/io'
import { PiFactoryLight } from 'react-icons/pi'
import { FaBriefcase } from 'react-icons/fa'
import { BiWon } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import { HiOutlineBookmark } from 'react-icons/hi'
import { HiBookmark } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import Logo from '#/please-logo.svg'
import SlickSlider from '@/components/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SelectModal from '@/app/jobs/select-modal'
import { useRef, useState } from 'react'

function JobCard({ recruit }: { recruit: any }) {
  return (
    <div className="relative flex flex-col gap-1 bg-base-bright-nomal p-5 rounded-xl shadow-md">
      {recruit.bookmark ? (
        <HiBookmark className="absolute top-0 right-3" color="#3CB371" size="20" />
      ) : (
        <HiOutlineBookmark className="absolute top-0 right-3" color="#3CB371" size="18" />
      )}
      <span className="flex items-center justify-between">
        <h2 className="font-semibold">{recruit.title}</h2>
        <PiFactoryLight size="40" />
      </span>
      <span className="flex gap-2">
        <FaBriefcase size="18" />
        <p className="text-xs ">{recruit.work_type}</p>
      </span>
      <span className="flex gap-2">
        <BiWon size="18" />
        <p className="text-xs ">{recruit.salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / month</p>
      </span>
      <span className="flex gap-2">
        <BsMap size="18" />
        <p className="text-xs ">{recruit.work_location}</p>
      </span>
      <span className="flex flex-wrap gap-1">
        {recruit.visa_type.map((type: any) => (
          <p
            key={type}
            className="inline-block px-8 py-1 border-2 text-xs bg-base-bright-light border-brand-secondary-light rounded-full"
          >
            {type}
          </p>
        ))}
      </span>
    </div>
  )
}

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

export default function JobsPage() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [modalTitle, setModalTitle] = useState<string>('')
  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setModalTitle(e.currentTarget.textContent as string)
    modalRef.current?.showModal()
  }
  return (
    <>
      <SelectModal ref={modalRef} title={modalTitle} />
      {/* search */}
      <Logo className="ml-6" />
      <section className="px-6 pb-8 shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex items-center bg-[#F1F1F1] px-4 rounded-lg">
          <Input
            placeholder="Search job titles or keywords"
            className="border-none bg-[#F1F1F1] text-base-secondary-nomal outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <FiSearch color="gray" size="24" />
        </div>
        <div className="flex my-4">
          <button
            className="flex items-center justify-between w-1/2 mr-2  px-4 py-2 rounded-md border border-brand-primary-light hover:bg-[#DDDDDD]"
            onClick={openModal}
          >
            <AiOutlineIdcard size="18" />
            <span className="text-sm font-semibold">Visa</span>
            <IoIosArrowDown />
          </button>
          <button
            className="flex items-center justify-between w-1/2 px-4 py-2 rounded-md border border-brand-primary-light hover:bg-[#DDDDDD]"
            onClick={openModal}
          >
            <SlLocationPin size="18" />
            <span className="text-sm font-semibold">Location</span>
            <IoIosArrowDown />
          </button>
        </div>
        <Button className="w-full h-10 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md">
          Search
        </Button>
      </section>
      <section className="px-6 flex flex-col gap-4 overflow-x-hidden pb-14">
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
            <h1 className="font-semibold text-lg text-brand-primary-light">E9 VISA Recommended Job</h1>
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
