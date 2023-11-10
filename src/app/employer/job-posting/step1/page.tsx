import Header from '@/components/ui/Header'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'


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


function page() {
  return (
    <>
      <Header headline={'채용공고 등록'} />
      <form className="flex flex-col gap-5 mb-12 mt-14">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">공고제목 *</Label>
          <Input id="title" type="text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">업체명 *</Label>
          <Input id="name" type="text" value={profileData.name} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">연락처 *</Label>
            <div className="flex items-center gap-2">
              <Input id="phone" type="tel" />-
              <Input id="phone" type="tel" />-
              <Input id="phone" type="tel" />
            </div>
          </div>
      </form>
    </>
  )
}

export default page
