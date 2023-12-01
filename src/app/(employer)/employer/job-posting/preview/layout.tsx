import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'please - Employer job posting preview',
  description: 'Employer job posting preview page',
}

export default function EmployerPreviewLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.className} w-[23.4375rem] py-6 flex flex-col justify-around m-auto`}>{children}</div>
}
