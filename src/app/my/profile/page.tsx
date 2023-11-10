import { FaRegUserCircle } from 'react-icons/fa'
import { PiUserCircleFill } from 'react-icons/pi'
import { AiOutlineBell } from 'react-icons/ai'
import { HiOutlineBookmark } from 'react-icons/hi'
import { IoLanguage } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'

export default function MyProfile() {
  return (
    <>
      <Header headline="Profile Page" />
      <div className="flex flex-col justify-center gap-8 mt-14">
        <span className="flex gap-6 ml-6 b">
          <PiUserCircleFill size="60" color="#3CB371" />
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-2xl text-brand-primary-dark">Tony</h2>
            <p className="label-m text-base-secondary-light">Employee</p>
          </div>
        </span>
        <div className="border-t border-base-secondary-normal">
          <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal">
            <span className="flex ml-10 py-3 items-center gap-9">
              <FaRegUserCircle size="30" />
              <p>Resume</p>
            </span>
          </div>
          <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal">
            <span className="flex ml-10 py-3 items-center gap-9">
              <AiOutlineBell size="30" />
              <p>Push Notifications</p>
            </span>
          </div>
          <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal">
            <span className="flex ml-10 py-3 items-center gap-9">
              <HiOutlineBookmark size="30" />
              <p>Bookmarks</p>
            </span>
          </div>
          <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal">
            <span className="flex ml-10 py-3 items-center gap-9">
              <IoLanguage size="30" />
              <p>Language</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end px-7 mb-10 gap-4">
        <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
          Log out
        </Button>
        <span className="flex justify-around paragraph text-base-secondary-light">
          <p>이용약관</p>
          <p>|</p>
          <p>개인정보처리방침</p>
          <p>|</p>
          <p>회원탈퇴</p>
        </span>
      </div>
    </>
  )
}
