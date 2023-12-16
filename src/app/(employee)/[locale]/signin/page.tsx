import initTranslations from '@/app/i18n'
import Google from '#/google.svg'
import Please from '#/please.svg'
import White from '#/white-handshake.svg'

export default async function SigninPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['signIn'])
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <White />
        <Please />
      </div>
      <a
        className="flex items-center gap-4 bg-base-bright-light py-3 px-4 rounded-xl w-72 shadow-md cursor-pointer"
        href="http://kdt-please.store/oauth2/authorization/google"
      >
        <Google />
        <h1 className="font-semibold text-lg opacity-60">{t('google')}</h1>
      </a>
    </>
  )
}
