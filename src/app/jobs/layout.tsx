import Footer from '@/components/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'please 채용 공고',
  description: 'Generated by create next app',
}

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} w-[23.4375rem] py-6 flex flex-col justify-around m-auto gap-8`}>
      {children}
      <Footer />
    </div>
  )
}
