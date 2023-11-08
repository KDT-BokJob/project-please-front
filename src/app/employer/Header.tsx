import { SlArrowLeft } from 'react-icons/sl'

export default function Header({ headline }) {
  return (
    <>
      <header className="fixed top-0 w-[23.4375rem] py-2 pl-2 bg-slate-400 h-auto drop-shadow-md ">
        <div className="flex items-center">
          <SlArrowLeft size="20" />
          <div className="title-s mx-2">{headline}</div>
        </div>
      </header>
    </>
  )
}
