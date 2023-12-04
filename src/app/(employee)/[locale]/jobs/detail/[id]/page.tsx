import Image from 'next/image'
import Link from 'next/link'

import initTranslations from '@/app/i18n'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import {
  BriefcaseIcon,
  CheckCircleIcon,
  CheckedBookmarkIcon,
  ChevronLeft,
  KRWIcon,
  OutlineBookmarkIcon,
  PercentIcon,
  ReloadIcon,
  VisaIcon,
} from '@/lib/icons'

function Detail({ type, value, className }: { type: string; value: any; className?: string }) {
  return (
    <span className="flex justify-between w-full">
      <p className={`font-semibold text-sm ${className}`}>{type}</p>
      <p className="text-sm text-base-secondary-dark">{value}</p>
    </span>
  )
}

export default async function EmpoyerJobPostingPreviewPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const { t } = await initTranslations(locale, ['jobsDetail'])
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recruit/${id}`)
  const jobDetail = await res.json()
  const jobData = jobDetail.data
  return (
    <>
      <Link href={`/${locale}/jobs`} className="px-2 mb-2">
        <ChevronLeft size="2rem" />
      </Link>
      <div className="w-full mb-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-8 px-6 mb-8">
        <div>
          <h1 className="text-xl font-bold">{jobData.title}</h1>
          <Detail
            className="text-base-secondary-light"
            type={jobData.companyResponse.name}
            value={`~${jobData.expiredAt}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex gap-2">
            <BriefcaseIcon />
            <Detail className="text-brand-primary-normal" type={t('Job Type')} value={jobData.workType} />
          </span>
          <hr />
          <span className="flex gap-2">
            <VisaIcon />
            <Detail className="text-brand-primary-normal" type={t('Visa')} value={jobData.visa.join(', ')} />
          </span>
          <hr />
          <span className="flex gap-2">
            <ReloadIcon />
            <Detail
              className="text-brand-primary-normal"
              type={t('Change of Visa')}
              value={jobData.companyResponse.isVisaTransform ? t('Possible') : t('Impossible')}
            />
          </span>
          <hr />
          <span className="flex gap-2">
            <PercentIcon />
            <Detail
              className="text-brand-primary-normal"
              type={t('Foreigner ratio')}
              value={`${Math.floor(
                (jobData.companyResponse.foreignEmployeeCount / jobData.companyResponse.employeeCount) * 100,
              )}%`}
            />
          </span>
          <hr />
          <span className="flex gap-2">
            <KRWIcon />
            <Detail
              className="text-brand-primary-normal"
              type={t('Pay')}
              value={`${jobData.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/월급`}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">{t('Working Conditions')}</h2>
          <Detail className="text-brand-primary-normal" type={t('Period')} value={'6개월'} />
          <hr />
          <Detail className="text-brand-primary-normal" type={t('days')} value={jobData.workDaysWeek} />
          {jobData.is_work_week_agreement ? (
            <p className="text-xs text-base-secondary-light text-right">*{t('To be determined')}</p>
          ) : (
            <></>
          )}
          <hr />
          <Detail
            className="text-brand-primary-normal"
            type={t('time')}
            value={`${jobData.workStartHour} - ${jobData.workEndHour}`}
          />
          {jobData.is_work_time_agreement ? (
            <p className="text-xs text-base-secondary-light text-right">*{t('To be determined')}</p>
          ) : (
            <></>
          )}
          <hr />
          <Detail className="text-brand-primary-normal" type={t('희망 국적')} value={'베트남'} />
          <hr />
          <Detail className="text-brand-primary-normal" type={t('Gender')} value={jobData.gender} />
          <hr />
          <Detail className="text-brand-primary-normal" type={t('To')} value={`${jobData.recruited_number}명`} />
          <hr />
          <Detail className="text-brand-primary-normal" type={t('Location')} value={jobData.workLocation} />
          <hr />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-base-primary-normal">{t('Job Description')}</h2>
          <p>{jobData.content}</p>
        </div>
        <span className="flex justify-center gap-2">
          {jobData.bookmark ? (
            <Button className="w-full h-12 text-base font-bold border rounded-full shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
              <CheckedBookmarkIcon size="18" />
              {t('Marked')}
            </Button>
          ) : (
            <Button className="w-full h-12 text-base font-bold border rounded-full shadow-md border-brand-primary-normal text-brand-primary-normal bg-base-bright-light">
              <OutlineBookmarkIcon size="18" />
              {t('Mark')}
            </Button>
          )}
          {/* Apply 버튼 클릭 시 모달 창 띄우기 (나중에 이력서 여부에 따라 변경하게 해야함) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
                {t('Apply')}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-[#F5F5F5]">
                  <CheckCircleIcon size="30" />
                </span>
              </DialogHeader>
              <p className="text-center text-xl font-semibold">{t('ModalTitle')}</p>
              <p className="text-center text-xs">{t('ModalDescription')}</p>
              <DialogFooter className="flex flex-row justify-center sm:justify-center gap-8">
                <DialogClose asChild>
                  <Button className=" h-12 rounded-lg font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
                    <Link href={`/${locale}/resume/profile`}>{t('Go Edit')}</Link>
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className=" h-12 rounded-lg font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
                    {t('Yes, Confirm')}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </>
  )
}
