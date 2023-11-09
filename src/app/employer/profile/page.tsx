import Header from '@/app/employer/Header'
import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
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
      <Header headline={'기업 프로필'} />
      <div className="flex flex-col w-full px-6 pt-20">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={profileData.profile_image}
            alt={profileData.name}
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </AspectRatio>
        <article className="mt-6 mb-12">
          <ul className="flex flex-col gap-5">
            <li className="flex flex-col ">
              <p className="mb-1 label-semi">기업명 *</p>
              <p>{profileData.name}</p>
            </li>
            <li className="flex flex-col ">
              <p className="mb-1 label-semi">이메일 *</p>
              <p>{profileData.email}</p>
            </li>
            <li className="flex flex-col">
              <p className="mb-1 label-semi">연락처 *</p>
              <p>{profileData.phone}</p>
            </li>
            <li className="flex flex-col">
              <p className="mb-1 label-semi">주소 *</p>
              <p>{profileData.address}</p>
            </li>
            <li className="flex flex-col">
              <p className="mb-1 label-semi">인력/ 외국인력</p>
              <p>{profileData.employee_count}/{profileData.foreign_employee_count}</p>
            </li>
            <li className="flex flex-col">
              <p className="mb-1 label-semi">업종 *</p>
              <p>{profileData.category}</p>
            </li>
          </ul>
        </article>
        <Button>수정하기</Button>
      </div>
    </>
  )
}

export default page
