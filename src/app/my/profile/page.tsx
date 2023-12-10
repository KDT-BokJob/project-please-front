'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import Country from '@/components/country'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import Header from '@/components/ui/Header'
import { DefaultProfile, FilledProfile, LanguageIcon, OutlineBellIcon, OutlineBookmarkIcon } from '@/lib/icons'

const languageArr = [
  {
    language: '한국어',
    country: 'korea',
  },
  {
    language: 'English',
    country: 'global',
  },
  {
    language: 'にほんご',
    country: 'japan',
  },
  {
    language: 'Tiếng Việt',
    country: 'vietnam',
  },
  {
    language: '中國語',
    country: 'china',
  },
  {
    language: 'नेपाली',
    country: 'nepal',
  },
]

export default function MyProfile() {
  const { data: session } = useSession()
  return (
    <>
      <Header headline="Profile Page" />
      <div className="flex flex-col justify-center gap-8 mt-14">
        <span className="flex gap-6 ml-6 b">
          <FilledProfile size="60" color="#3CB371" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-medium text-brand-primary-dark">Tony</h2>
            <p className="label-m text-base-secondary-light">Employee</p>
          </div>
        </span>
        <div className="border-t border-base-secondary-normal">
          {/* 이력서 */}
          <Link
            href="/resume/profile"
            className="block w-full h-auto p-0 border-b rounded-none cursor-pointer border-base-secondary-normal hover:text-brand-primary-normal"
          >
            <span className="flex items-center py-3 ml-10 gap-9">
              <DefaultProfile size="30" />
              <p>Resume</p>
            </span>
          </Link>
          {/* 푸쉬 알람 */}
          <div className="block w-full h-auto p-0 border-b rounded-none cursor-pointer border-base-secondary-normal hover:text-brand-primary-normal">
            <span className="flex items-center py-3 ml-10 gap-9">
              <OutlineBellIcon size="30" />
              <p>Push Notifications</p>
            </span>
          </div>
          {/* 북마크 */}
          <Link
            href="bookmarks"
            className="block w-full h-auto p-0 border-b rounded-none cursor-pointer border-base-secondary-normal hover:text-brand-primary-normal"
          >
            <span className="flex items-center py-3 ml-10 gap-9">
              <OutlineBookmarkIcon size="30" />
              <p>Bookmarks</p>
            </span>
          </Link>
          {/* 언어 선택 */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="block w-full h-auto p-0 border-b rounded-none cursor-pointer border-base-secondary-normal hover:text-brand-primary-normal">
                <span className="flex items-center py-3 ml-10 gap-9">
                  <LanguageIcon size="30" />
                  <p>Language</p>
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-[#F5F5F5]">
                  <LanguageIcon size="30" />
                </span>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {languageArr.map((data) => (
                  <p
                    key={data.language}
                    className={`text-xl text-black font-semibold flex justify-center gap-2 hover:text-brand-primary-normal`}
                  >
                    <Country country={data.country} />
                    {data.language}
                  </p>
                ))}
              </div>
              <DialogFooter className="flex flex-row justify-center gap-8 sm:justify-center">
                <DialogClose asChild>
                  <Button className="w-24 h-12 text-base font-bold border rounded-lg shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
                    취소
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="w-24 h-12 text-base font-bold rounded-lg shadow-md text-base-bright-light bg-brand-primary-normal">
                    확인
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-4 mb-10 px-7">
        {session && session.user && (
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full h-12 text-base font-bold rounded-full shadow-md cursor-pointer text-base-bright-light bg-brand-primary-normal"
          >
            Log out
          </Button>
        )}

        <span className="flex justify-around paragraph text-base-secondary-light">
          <p className="cursor-pointer">이용약관</p>
          <p>|</p>
          <p className="cursor-pointer">개인정보처리방침</p>
          <p>|</p>
          <p className="cursor-pointer">회원탈퇴</p>
        </span>
      </div>
    </>
  )
}
