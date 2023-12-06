import { SlArrowLeft } from 'react-icons/sl'

type HeaderProps = {
  headline: string
  navigatorOff?: boolean
}

export default function Header({ headline, navigatorOff }: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 z-50 bg-white w-[23.4375rem] py-2 pl-2  h-auto shadow-sm ">
        <div className="flex items-center">
          {!navigatorOff && <SlArrowLeft size="20" />}
          <div className="mx-2 title-s">{headline}</div>
        </div>
      </header>
    </>
  )
}
