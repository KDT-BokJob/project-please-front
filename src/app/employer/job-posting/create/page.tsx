/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { addDays, startOfDay } from 'date-fns'
import { useEffect, useState } from 'react'

import Step1 from '@/app/employer/job-posting/create/Step1'
import Step2 from '@/app/employer/job-posting/create/Step2'
import Step3 from '@/app/employer/job-posting/create/Step3'
import Header from '@/components/ui/Header'
const profileData = {
  company_id: 1234,
  user_id: 12345,
  name: 'please company',
  employee_count: 6,
  foreign_employee_count: 2,
  phone: '010-6501-7742',
  category: 'Web Programming',
  email: 'seunghyo7742@naver.com',
  address: 'Gwanak gu - bongcheon-dong',
  profile_image: '/test_img/company_profile_img.png',
}

const today = startOfDay(new Date())

function page() {
  const [formState, setFormState] = useState(1)
  const [formData, setFormData] = useState({
    name: profileData.name,
    phone: profileData.phone,
    gender: 'any',
    availableVisa: [],
    title: '',
    isVisaTransform: false,
    prefered_nationality: '',
    count: 0, //모집인원수
    work_type: '', //근무형태
    salary_type: '',
    salary: 9820,
    work_start_hour: '',
    work_end_hour: '',
    is_worktime_flexible: false,
    is_workperiod_flexible: false,
    work_days: [],
    work_period: {
      from: today,
      to: addDays(today, 7),
      //Todo: 서버로 보낼 때, 2023-08-11 형식으로 startdate, enddate나눠서
    },
    work_location: '',
    work_description: '',
    work_description_file: null,
  })
  useEffect(() => {
    console.log('formData', formData)
  }, [formData])
  return (
    <>
      <Header headline={'채용공고 등록'} />
      <main className="mt-20 mb-12">
        {formState === 1 && <Step1 setFormState={setFormState} formData={formData} setFormData={setFormData} />}
        {formState === 2 && <Step2 setFormState={setFormState} formData={formData} setFormData={setFormData} />}
        {formState === 3 && <Step3 setFormState={setFormState} formData={formData} setFormData={setFormData} />}
      </main>
    </>
  )
}

export default page
