import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { ChevronRight, EmployeeIcon, EmployerIcon } from '@/lib/icons'

export default async function SelectPositionPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['selectPosition'])
  return (
    <>
      <section>
        <h1 className="text-2xl font-semibold text-center">{t('h1')}</h1>
        <div className="flex flex-col justify-center w-full items-center rounded-[2.25rem] bg-[#F9F9F9] shadow-xl mt-10">
          <button className="flex items-center justify-between w-full px-4 py-12 rounded-t-[2.25rem] hover:bg-[#DDDDDD]">
            <EmployeeIcon size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">{t('employee')}</span>
            <ChevronRight size={'30'} />
          </button>
          <div className="w-full border border-neutral-400" />
          <button className="flex items-center justify-between w-full px-4 py-12 rounded-b-[2.25rem] hover:bg-[#DDDDDD]">
            <EmployerIcon size={'3rem'} />
            <span className="text-zinc-800 text-[23px] font-medium">{t('employer')}</span>
            <ChevronRight size={'30'} />
          </button>
        </div>
      </section>
      <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md">
        {t('backBtn')}
      </Button>
    </>
  )
}
