import { BiChevronLeft, BiPlus } from 'react-icons/bi'
import { IconType } from 'react-icons'
import { VscAccount, VscCalendar } from 'react-icons/vsc'
import { MdDeleteForever, MdOutlineCameraAlt, MdOutlineClose } from 'react-icons/md'

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

// 달력
export const CalendarIcon: IconType = ({ ...props }) => {
  return <VscCalendar {...props} />
}

// 플러스
export const PlusIcon: IconType = ({ ...props }) => {
  return <BiPlus {...props} />
}

// 클로즈 X
export const CloseIcon: IconType = ({ ...props }) => {
  return <MdOutlineClose {...props} />
}
