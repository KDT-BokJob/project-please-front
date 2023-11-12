import { BiChevronLeft } from 'react-icons/bi'
import { IconType } from 'react-icons'
import { VscAccount, VscCalendar } from 'react-icons/vsc'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { HiChevronUpDown } from 'react-icons/hi2'
import { BiCheck } from 'react-icons/bi'
// 뒤로가기
export const ChevronLeft: IconType = ({ ...props }) => {
  return <BiChevronLeft {...props} />
}

// 기본 프로필
// public/account_circle 과 둘중 하나 선택해야
export const DefaultProfile: IconType = ({ ...props }) => {
  return <VscAccount {...props} />
}

// 사진 업로드
export const Camera: IconType = ({ ...props }) => {
  return <MdOutlineCameraAlt {...props} />
}

//달력
export const CalendarIcon: IconType = ({ ...props }) => {
  return <VscCalendar {...props} />
}

//선택창 클릭아이콘
export const UpdownIcon: IconType = ({ ...props }) => {
  return <HiChevronUpDown {...props} />
}

export const Check: IconType = ({ ...props }) => {
  return <BiCheck {...props} />
}
