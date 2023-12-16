export type Profile = {
  // avatar: File | undefined
  avatar?: FileList | undefined
  firstname: string
  lastname: string
  nationality: string
  gender: string
  birthday: Date
  phoneNumber: string
  email: string
  address: string
  disability?: boolean
}
export type Visa = {
  visa: 'E9' | 'D2' | 'H2'
}
export type DesiredJob = {
  desiserdJob: string[]
}
// 1 자격증 O
// 0 자격증 X
// 등급 1~5
// ex 15 > topik 5급
// ex 01 > topik X 기초
export type Korean = {
  issuDt: string | undefined
  gradNm: string | undefined
  levelCodeNm: string | undefined
  fluency: number | undefined
}
export type WorkExperience = {
  readyMadeResume?: FileList | undefined
  workexp: { companyName: string; responsibility: string; entryDate: Date; leavingDate: Date }[]
}
export type Certificate = {
  certificate: { certificateName: string; certificationAuthority: string; AcquisitionDate: Date }[]
}
export type TagAboutMe = {
  tags: string[]
}
export type CoverLetter = {
  coverLetter: string
}
