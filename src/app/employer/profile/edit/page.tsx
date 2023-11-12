import Header from '@/components/ui/Header'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { BiEditAlt } from 'react-icons/bi'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
          <Button size="mini" className="relative px-2 rounded-full top-36 left-[17rem] bottom-4 bg-s">
            <BiEditAlt size="20" />
          </Button>
        </AspectRatio>
        <form className="flex flex-col gap-5 mb-12 mt-14">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">기업명 *</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">이메일 *</Label>
            <Input id="email" type="email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">연락처 *</Label>
            <div className="flex items-center gap-2">
              <Input id="phone" type="tel" />-
              <Input id="phone" type="tel" />-
              <Input id="phone" type="tel" />
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">주소 *</Label>
            <Input id="address" type="text" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="population">인력/외국인력</Label>
            <div className="flex items-center gap-2">
              <Input id="population" type="number" />/
              <Input id="population" type="number" />
            </div>
          </div>
        </form>
        <Button>저장하기</Button>
      </div>
    </>
  )
}

export default page
