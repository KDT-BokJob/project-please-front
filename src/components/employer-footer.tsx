'use client'
import Link from 'next/link'

import { CompassIcon, DefaultProfile, FilePaperIcon, HomeIcon } from '@/lib/icons'

export default function EmployerFooter({ ...props }) {
  return (
    <footer className="fixed w-[23.4375rem] h-[55px] flex justify-around border-t border-t-base-bright-dark bg-base-bright-light bottom-0">
      <Link href={'/jobs'} className="flex flex-col items-center justify-center">
        <HomeIcon size="18" color={props.home ? '#3CB371' : ''} />
        <p className={`mt-1 text-xs ${props.home ? 'text-[#3CB371]' : ''}`}>홈</p>
      </Link>
      <Link href={'/recommendation'} className="flex flex-col items-center justify-center">
        <CompassIcon size="18" color={props.recommendation ? '#3CB371' : ''} />
        <p className={`mt-1 text-xs ${props.recommendation ? 'text-[#3CB371]' : ''}`}>AI매치</p>
      </Link>
      <Link href={'/applications'} className="flex flex-col items-center justify-center">
        <FilePaperIcon size="18" color={props.application ? '#3CB371' : ''} />
        <p className={`mt-1 text-xs ${props.application ? 'text-[#3CB371]' : ''}`}>공고관리</p>
      </Link>
      <Link href={'/employer/mypage'} className="flex flex-col items-center justify-center">
        <DefaultProfile size="18" color={props.profile ? '#3CB371' : ''} />
        <p className={`mt-1 text-xs ${props.profile ? 'text-[#3CB371]' : ''}`}>프로필</p>
      </Link>
    </footer>
  )
}
