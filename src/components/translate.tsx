import initTranslations from '@/app/i18n'

export default async function Translate({ locale, ns, text }: { locale: string; ns: string; text: string }) {
  const { t } = await initTranslations(locale, [ns])

  return <p>{t(text)}</p>
}
