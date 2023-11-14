import { BiChevronLeft } from 'react-icons/bi'
import { IconType } from 'react-icons'
import { VscAccount, VscCalendar } from 'react-icons/vsc'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { HiChevronUpDown } from 'react-icons/hi2'
import { BiCheck } from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdSupervisorAccount } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineIdcard } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineBookmark } from 'react-icons/hi'
import { HiBookmark } from 'react-icons/hi'
import { BsCheckCircle } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import { BiWon } from 'react-icons/bi'
import { BsMap } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa'
import { PiFactoryLight } from 'react-icons/pi'
import { GoHome } from 'react-icons/go'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FaRegCompass } from 'react-icons/fa'
import { IoReload } from 'react-icons/io5'
import { BsPencil } from 'react-icons/bs'

// 뒤로가기
export const ChevronLeft: IconType = ({ ...props }) => {
  return <BiChevronLeft {...props} />
}

// > 아이콘
export const ChevronRight: IconType = ({ ...props }) => {
  return <BiChevronRight {...props} />
}

// ArrowDown 아이콘
export const ChevronDown: IconType = ({ ...props }) => {
  return <IoIosArrowDown {...props} />
}

// 기본 프로필
// public/account_circle 과 둘중 하나 선택해야
export const DefaultProfile: IconType = ({ ...props }) => {
  return <VscAccount {...props} />
}

// Fill 기본 프로필
export const FilledProfile: IconType = ({ ...props }) => {
  return <PiUserCircleFill {...props} />
}

// 사진 업로드
export const Camera: IconType = ({ ...props }) => {
  return <MdOutlineCameraAlt {...props} />
}

// 달력
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

export const Search: IconType = ({ ...props }) => {
  return <BiSearch {...props} />
}
// 구직자
export const EmployeeIcon: IconType = ({ ...props }) => {
  return <AiOutlineUser {...props} />
}

// 구인자
export const EmployerIcon: IconType = ({ ...props }) => {
  return <MdSupervisorAccount {...props} />
}

// 검색 돋보기
export const SearchIcon: IconType = ({ ...props }) => {
  return <FiSearch {...props} />
}

// 비자 카드
export const VisaIcon: IconType = ({ ...props }) => {
  return <AiOutlineIdcard {...props} />
}

// 위치
export const LocationtIcon: IconType = ({ ...props }) => {
  return <SlLocationPin {...props} />
}

// checked 북마크
export const CheckedBookmarkIcon: IconType = ({ ...props }) => {
  return <HiBookmark {...props} />
}

// outline 북마크
export const OutlineBookmarkIcon: IconType = ({ ...props }) => {
  return <HiOutlineBookmark {...props} />
}

// check 표시
export const CheckCircleIcon: IconType = ({ ...props }) => {
  return <BsCheckCircle {...props} />
}

// Outline Bell
export const OutlineBellIcon: IconType = ({ ...props }) => {
  return <AiOutlineBell {...props} />
}

// 다국어
export const LanguageIcon: IconType = ({ ...props }) => {
  return <IoLanguage {...props} />
}

// 원화
export const KRWIcon: IconType = ({ ...props }) => {
  return <BiWon {...props} />
}

// 지도
export const MapIcon: IconType = ({ ...props }) => {
  return <BsMap {...props} />
}

// 서류가방
export const BriefcaseIcon: IconType = ({ ...props }) => {
  return <FaBriefcase {...props} />
}

// 제조업 아이콘
export const JobFactoryIcon: IconType = ({ ...props }) => {
  return <PiFactoryLight {...props} />
}

// 집
export const HomeIcon: IconType = ({ ...props }) => {
  return <GoHome {...props} />
}

// 문서, 서류 아이콘
export const FilePaperIcon: IconType = ({ ...props }) => {
  return <RiFilePaper2Line {...props} />
}

// 나침반
export const CompassIcon: IconType = ({ ...props }) => {
  return <FaRegCompass {...props} />
}

// 새로고침
export const ReloadIcon: IconType = ({ ...props }) => {
  return <IoReload {...props} />
}

// 새로고침
export const PencilIcon: IconType = ({ ...props }) => {
  return <BsPencil {...props} />
}
