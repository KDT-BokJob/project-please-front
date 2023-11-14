import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'please - 추천 공고',
  description: 'please 현재 구직자에 맞는 추천 공고 목록을 확인하실 수 있습니다.',
}

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`w-[23.4375rem] pt-10 flex flex-col justify-between m-auto`}>
      {children}
      <Footer recommendation />
    </div>
  )
}
