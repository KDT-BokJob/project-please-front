'use client'
import { GoHome } from 'react-icons/go'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegCompass } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer({ ...props }) {
  return (
    <footer className="fixed w-[23.4375rem] h-[55px] flex justify-around border-t border-t-base-bright-dark bg-base-bright-light bottom-0">
      <Link href={'/jobs'} className="flex flex-col justify-center items-center">
        <GoHome size="18" color={props.home ? '#3CB371' : ''} />
        <p className={`text-xs ${props.home ? 'text-[#3CB371]' : ''}`}>Home</p>
      </Link>
      <Link href={'/jobs/recommendation'} className="flex flex-col justify-center items-center">
        <FaRegCompass size="18" color={props.recommendation ? '#3CB371' : ''} />
        <p className={`text-xs ${props.recommendation ? 'text-[#3CB371]' : ''}`}>Recommendation</p>
      </Link>
      <Link href={'/my/apply'} className="flex flex-col justify-center items-center">
        <RiFilePaper2Line size="18" color={props.application ? '#3CB371' : ''} />
        <p className={`text-xs ${props.application ? 'text-[#3CB371]' : ''}`}>Application</p>
      </Link>
      <Link href={'/my/profile'} className="flex flex-col justify-center items-center">
        <FaRegUserCircle size="18" color={props.profile ? '#3CB371' : ''} />
        <p className={`text-xs ${props.profile ? 'text-[#3CB371]' : ''}`}>Profile</p>
      </Link>
    </footer>
  )
}
