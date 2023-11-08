import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Employerlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} bg-gray-100 w-[23.4375rem] h-screen   m-auto`}>
      {children}
    </div>
  )
}
