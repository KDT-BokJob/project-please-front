import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '@/app/globals.css'

export default function Employerlayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.className}  w-[23.4375rem] h-full m-auto`}>{children}</div>
}
