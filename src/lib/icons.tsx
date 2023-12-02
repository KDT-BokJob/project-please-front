import { IconType } from 'react-icons'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineIdcard } from 'react-icons/ai'
import { AiOutlineBell } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiChevronLeft, BiPlus } from 'react-icons/bi'
import { BiCheck } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'
import { BiWon } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { BsMap } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa'
import { FaRegCompass } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import { FaPercentage } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr'
import { HiOutlineBookmark } from 'react-icons/hi'
import { HiBookmark } from 'react-icons/hi'
import { HiChevronUpDown } from 'react-icons/hi2'
import { HiMiniXMark } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'
import { IoLanguage } from 'react-icons/io5'
import { IoReload } from 'react-icons/io5'
import { MdOutlineCameraAlt, MdOutlineClose } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { PiUserCircleFill } from 'react-icons/pi'
import { PiFactoryLight } from 'react-icons/pi'
import { RiFilePaper2Line } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { VscAccount, VscCalendar } from 'react-icons/vsc'

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

// 플러스
export const PlusIcon: IconType = ({ ...props }) => {
  return <BiPlus {...props} />
}

// 클로즈 X
export const CloseIcon: IconType = ({ ...props }) => {
  return <MdOutlineClose {...props} />
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

// 연필
export const PencilIcon: IconType = ({ ...props }) => {
  return <BsPencil {...props} />
}
//다음버튼
export const NextIcon: IconType = ({ ...props }) => {
  return <GrFormNext {...props} />
}
//알람표시버튼 색상은 brand-point-light
export const AlarmDot: IconType = ({ ...props }) => {
  return <FaCircle {...props} />
}
//x버튼
export const Xmark: IconType = ({ ...props }) => {
  return <HiMiniXMark {...props} />
}

// 비율
export const PercentIcon: IconType = ({ ...props }) => {
  return <FaPercentage {...props} />
}

//글생성버튼
export const CreateIcon: IconType = ({ ...props }) => {
  return <AiFillPlusCircle {...props} />
}
