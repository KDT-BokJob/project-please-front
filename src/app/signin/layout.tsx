import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'please 로그인',
  description: 'please 로그인 페이지입니다.',
}

export default function SigninLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`w-[23.4375rem] h-screen flex flex-col justify-center items-center gap-10 m-auto bg-[#44CD81]`}>
      {children}
    </div>
  )
}
