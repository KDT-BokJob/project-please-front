import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'please - 현재 지원 현황',
  description: 'please 현재 지원 현황 목록을 확인하실 수 있습니다.',
}

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`w-[23.4375rem] h-screen py-6 flex flex-col justify-between m-auto`}>
      {children}
      <Footer application />
    </div>
  )
}
