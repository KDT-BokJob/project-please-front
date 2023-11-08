import Header from '@/app/employer/Header'
import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'

const profileData={
  company_id: 1234,
  user_id: 12345,
  name:"please company",
  employee_count: 6,
  foreign_employee_count: 2,
  phone: "010-6501-7742",
  category:"Web Programming",
  address: "Gwanak gu - bongcheon-dong",
  profile_image:"/test_img/company_profile_img.png"

}

function page() {
  return (
    <>
      <Header headline={"기업 프로필"}/>
      <div className="px-6">

      </div>
    </>
  )
}

export default page