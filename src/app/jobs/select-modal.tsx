'use Client'
import { Button } from '@/components/ui/button'
import { forwardRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const visaType = [
  {
    visa: 'E-9',
    jobs: ['농업', '어업', '임업', '제조업', '광업', '건설업', '서비스업'],
  },
  {
    visa: 'D-2',
    jobs: ['온수 및 창고업', '숙박 및 음식점업'],
  },
  {
    visa: 'H-2',
    jobs: ['농업', '어업', '임업', '제조업', '광업', '건설업', '서비스업', '온수 및 창고업', '숙박 및 음식점업'],
  },
]

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  title: string
}

const SelectModal = forwardRef<HTMLDialogElement, ModalProps>(({ title }, ref) => {
  const [selectVisa, setSelectVisa] = useState<string>()
  const [selectJobs, setSelectJobs] = useState<string[]>([])
  const closeModal = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.preventDefault()
    const target = e.target as HTMLDialogElement
    const rect = target.getBoundingClientRect()
    if (
      typeof ref !== 'function' &&
      (rect.left > e.clientX || rect.right < e.clientX || rect.top > e.clientY || rect.bottom < e.clientY)
    ) {
      ref?.current?.close()
    }
  }
  return (
    <dialog ref={ref} onClick={closeModal} className="w-[20.5rem] h-3/5 py-4 rounded-3xl">
      <div className="h-full">
        <div className="flex flex-col justify-between w-full h-full rounded-t-3xl bg-base-bright-light">
          <span className="flex justify-between px-4 mb-2">
            <h1 className="font-semibold text-base-secondary-dark">Select {title}</h1>
            <button
              onClick={() => {
                if (typeof ref !== 'function') {
                  ref?.current?.close()
                }
              }}
            >
              <IoMdClose size="24px" />
            </button>
          </span>
          <div className="flex">
            <nav className="border-r border-base-bright-dark">
              {visaType.map((type) => (
                <Button
                  key={type.visa}
                  variant={selectVisa === type.visa ? 'default' : 'outline'}
                  className={`border-b block border-base-bright-dark w-20 py-3 text-center`}
                  onClick={() => {
                    setSelectVisa(type.visa)
                    setSelectJobs(type.jobs)
                  }}
                >
                  {type.visa}
                </Button>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 ml-4">
              {selectJobs.length ? (
                selectJobs.map((job) => (
                  <Button
                    key={job}
                    className={`w-24 h-12 rounded-lg text-black font-semibold justify-evenly bg-[#f5f5f5] shadow-md hover:bg-[#DDDDDD]`}
                  >
                    {job}
                  </Button>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex mt-2 justify-evenly">
            <Button className="w-20 h-8 font-semibold border border-brand-primary-nomal">Reset</Button>
            <Button className="h-8 font-bold bg-brand-primary-nomal text-base-bright-light w-52">Complete</Button>
          </div>
        </div>
      </div>
    </dialog>
  )
})

SelectModal.displayName = 'SelectModal'

export default SelectModal
