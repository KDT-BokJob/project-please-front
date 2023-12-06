import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { AdressIcon, CallIcon, DefaultProfile, EmailIcon } from '@/lib/icons'
import { resumePreviewEditFormSchema } from '@/lib/zod-schema/resume/preview-edit'

interface IPreviewData {
  profile: {
    avatar: string | undefined
    firstname: string
    lastname: string
    nationality: string
    gender: string
    birthday: string
    phoneNumber: string
    email: string
    address: string
    disability: boolean
  }
  visa: string
  tags: string[]
  koreanSkill: {
    hasTopik: {
      issuDt: string
      gradNm: string
      levelCodeNm: string | undefined
    }
    noTopik: {
      fluency: string | undefined
    }
  }
  certificates: {
    certificateName: string
    certificationAuthority: string
    AcquisitionDate: string
  }
  workExperience: {
    hasResumePdf: {
      readyMadeResume: string | undefined
    }
    noResumePdf: {
      companyName: string
      responsibility: string
      entryDate: string
      leavingDate: string
    }
  }
  coverLetter: string
}
const resume_links = {
  profile: '/resume/profile',
  tagAboutYou: '/resume/tag-about-you',
  korean: '/resume/korean',
  visa: '/resume/visa',
  certificate: '/resume/certificate',
  workExperience: {
    check: '/resume/work-experience-check',
    default: '/resume/work-experience',
    file: '/resume/work-experience-file',
  },
  coverLetter: '/resume/cover-letter',
}
const preview_data: IPreviewData = {
  profile: {
    avatar: undefined,
    firstname: 'SJ',
    lastname: 'Nyguyen',
    nationality: 'Vietnam',
    gender: 'male',
    birthday: '1993/6/26',
    phoneNumber: '01091827364',
    email: 'nsj5@gmail.com',
    address: '(04213) 122, Mapo-daero, Mapo-gu, Seoul, Republic of Korea',
    disability: false,
  },
  visa: 'E7',
  tags: ['성실함', '끈기있는', '싹싹한'],
  koreanSkill: {
    hasTopik: {
      issuDt: '2023/1/26',
      gradNm: 'TOPIK 1',
      levelCodeNm: '1',
    },
    noTopik: {
      fluency: undefined,
    },
  },
  certificates: {
    certificateName: 'SQLD',
    certificationAuthority: 'K data',
    AcquisitionDate: '2022/1/26',
  },
  workExperience: {
    hasResumePdf: {
      readyMadeResume: undefined,
    },
    noResumePdf: {
      companyName: 'ASAC',
      responsibility: 'Frontend Dev',
      entryDate: '2023/7/26',
      leavingDate: '2024/1/2',
    },
  },
  coverLetter: "hellow I'm Nyguyen.S.J! Frontend developer at 3 year",
}
const formSchema = resumePreviewEditFormSchema

export default function page() {
  return (
    <section className="divide-y-[1px] w-full [&>section]:py-4">
      <section className="space-y-2 border-t-2 border-brand-primary-normal">
        <div className="relative flex gap-3">
          <Link href={`${resume_links.profile}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
            edit
          </Link>
          <DefaultProfile className="text-brand-primary-normal" size={'125px'} />
          <div className="flex flex-col justify-start mt-2">
            <div className="flex gap-3">
              <span className="mb-3 title-s">{`${preview_data.profile.lastname} ${preview_data.profile.firstname}`}</span>
            </div>
            <div className="flex gap-3">
              <span className="label-normal">{preview_data.profile.gender}</span>
            </div>
            <div className="flex gap-3">
              <span className="label-normal">{preview_data.profile.birthday}</span>
            </div>
            <div className="flex gap-3">
              <span className="label-normal">{preview_data.profile.nationality}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-3">
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-3">
              <CallIcon />
              <span className="">{preview_data.profile.phoneNumber}</span>
            </div>
            <div className="flex gap-3">
              <EmailIcon />
              <span className="">{preview_data.profile.email}</span>
            </div>
            <div className="flex gap-3">
              <AdressIcon />
              <span className="">{preview_data.profile.address}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2"></div>
        </div>
      </section>

      <section className=" relative flex flex-col gap-2">
        <Link href={`${resume_links.visa}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
          edit
        </Link>
        <h2 className="headline">Visa</h2>
        <div className="flex flex-wrap gap-2">
          <label className="label-normal border border-2 border-base-bright-dark bg-base-bright-normal rounded-md px-2 py-1">
            {preview_data.visa}
          </label>
        </div>
      </section>

      <section className=" relative flex flex-col gap-2">
        <Link href={`${resume_links.tagAboutYou}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
          edit
        </Link>
        <h2 className="headline">Tag about me</h2>
        <div className="flex flex-wrap gap-2">
          {preview_data.tags.map((tag, i) => (
            <label
              key={`${tag}_${i}`}
              className="label-normal border border-2 border-base-bright-dark bg-base-bright-normal rounded-md px-2 py-1"
            >
              {tag}
            </label>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col gap-2">
        <Link href={`${resume_links.korean}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
          edit
        </Link>
        <h2 className="headline">Korean Skill</h2>
        <div className="flex gap-3">
          <div>
            <label htmlFor="" className="block ">
              Topik
            </label>
            <label htmlFor="" className="block ">
              Issued date
            </label>
          </div>
          <div>
            <span className="block">{`${preview_data.koreanSkill.hasTopik.gradNm} - level ${preview_data.koreanSkill.hasTopik.levelCodeNm}`}</span>
            <span className="block">{preview_data.koreanSkill.hasTopik.issuDt}</span>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-2">
        <Link href={`${resume_links.certificate}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
          edit
        </Link>
        <h2 className="headline">Certificates</h2>
        <div className="flex gap-3 p-2 rounded-md border border-2 border-base-bright-dark">
          <div className="space-y-2">
            <label htmlFor="" className="block">
              Certificate name
            </label>
            <label htmlFor="" className="block">
              Certification authority
            </label>
            <label htmlFor="" className="block">
              Acquisition date
            </label>
          </div>
          <div className="space-y-2">
            <span className="block">{preview_data.certificates.certificateName}</span>
            <span className="block">{preview_data.certificates.certificationAuthority}</span>
            <span className="block">{preview_data.certificates.AcquisitionDate}</span>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-2">
        <Link
          href={`${resume_links.workExperience.default}`}
          className="absolute top-0 right-0 hover:text-brand-primary-normal"
        >
          edit
        </Link>
        <h2 className="headline">Work Experience</h2>
        <div className="flex gap-3">
          <div className="space-y-2">
            <label htmlFor="" className="block">
              Company
            </label>
            <label htmlFor="" className="block">
              Responsibility
            </label>
            <label htmlFor="" className="block">
              Tenure
            </label>
          </div>
          <div className="space-y-2">
            <span className="block">{preview_data.workExperience.noResumePdf.companyName}</span>
            <span className="block">{preview_data.workExperience.noResumePdf.responsibility}</span>
            <span className="block">{`${preview_data.workExperience.noResumePdf.entryDate} ~ ${preview_data.workExperience.noResumePdf.leavingDate}`}</span>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-2">
        <Link href={`${resume_links.coverLetter}`} className="absolute top-0 right-0 hover:text-brand-primary-normal">
          edit
        </Link>
        <h2 className="headline">Cover Letter</h2>
        <p className="label-normal">{preview_data.coverLetter}</p>
      </section>
      <Button type="button" variant={'primary'} size={'md'} className="block mx-auto">
        Save
      </Button>
    </section>
  )
}
