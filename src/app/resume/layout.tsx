import { ChevronLeft } from '@/lib/icons'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'please',
  description: 'Generated by create next app',
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`w-[23.4375rem] min-h-screen px-6 py-6 flex flex-col justify-start m-auto`}>
      <ChevronLeft size={'2rem'} />
      {children}
    </section>
  )
}
