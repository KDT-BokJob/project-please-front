'use client'
import { GoHome } from 'react-icons/go'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'
import { useState } from 'react'

export default function Footer() {
  const [home, setHome] = useState(true)
  const [application, setApplication] = useState(false)
  const [profile, setProfile] = useState(false)
  return (
    <footer className="fixed w-[23.4375rem] h-[55px] flex justify-around border-t border-t-base-bright-dark bg-base-bright-light bottom-0">
      <div className="flex flex-col justify-center items-center">
        <GoHome size="18" color={home ? '#3CB371' : ''} />
        <p className={`text-xs ${home ? 'text-[#3CB371]' : ''}`}>Home</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <RiFilePaper2Line size="18" color={application ? '#3CB371' : ''} />
        <p className={`text-xs ${application ? 'text-[#3CB371]' : ''}`}>Application</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaRegUserCircle size="18" color={profile ? '#3CB371' : ''} />
        <p className={`text-xs ${profile ? 'text-[#3CB371]' : ''}`}>Profile</p>
      </div>
    </footer>
  )
}
