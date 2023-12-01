import initTranslations from '@/app/i18n'
import Country from '@/components/country'
import { Button } from '@/components/ui/button'
const languageArr = [
  {
    language: '한국어',
    country: 'korea',
  },
  {
    language: 'English',
    country: 'global',
  },
  {
    language: 'にほんご',
    country: 'japan',
  },
  {
    language: 'Tiếng Việt',
    country: 'vietnam',
  },
  {
    language: '中國語',
    country: 'china',
  },
  {
    language: 'नेपाली',
    country: 'nepal',
  },
]

export default async function SelectLanguage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['selectLanguage'])
  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl text-center">{t('h1')}</h1>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {languageArr.map((data) => (
            <Button
              key={data.language}
              className={`w-[9.4375rem] h-[5.6875rem] rounded-lg text-xl text-black font-semibold justify-evenly bg-[#f5f5f5] shadow-xl hover:bg-[#DDDDDD]`}
            >
              <Country country={data.country} />
              {data.language}
            </Button>
          ))}
        </div>
      </section>
      <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md">
        {t('startBtn')}
      </Button>
    </>
  )
}
