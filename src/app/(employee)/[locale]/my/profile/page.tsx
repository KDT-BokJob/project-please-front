import { DefaultProfile, FilledProfile, OutlineBookmarkIcon, OutlineBellIcon, LanguageIcon } from '@/lib/icons'
import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'
import Link from 'next/link'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import Country from '@/components/country'
import initTranslations from '@/app/i18n'

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

export default async function MyProfile({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['myProfile'])

  return (
    <>
      <Header headline={t('Profile Page')} />
      <div className="flex flex-col justify-center gap-8 mt-14">
        <span className="flex gap-6 ml-6 b">
          <FilledProfile size="60" color="#3CB371" />
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-2xl text-brand-primary-dark">Tony</h2>
            <p className="label-m text-base-secondary-light">{t('Employee')}</p>
          </div>
        </span>
        <div className="border-t border-base-secondary-normal">
          {/* 이력서 */}
          <Link
            href="/resume/profile"
            className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal cursor-pointer hover:text-brand-primary-normal"
          >
            <span className="flex ml-10 py-3 items-center gap-9">
              <DefaultProfile size="30" />
              <p>{t('Resume')}</p>
            </span>
          </Link>
          {/* 푸쉬 알람 */}
          <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal cursor-pointer hover:text-brand-primary-normal">
            <span className="flex ml-10 py-3 items-center gap-9">
              <OutlineBellIcon size="30" />
              <p>{t('Push Notifications')}</p>
            </span>
          </div>
          {/* 북마크 */}
          <Link
            href="bookmarks"
            className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal cursor-pointer hover:text-brand-primary-normal"
          >
            <span className="flex ml-10 py-3 items-center gap-9">
              <OutlineBookmarkIcon size="30" />
              <p>{t('Bookmarks')}</p>
            </span>
          </Link>
          {/* 언어 선택 */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="block w-full rounded-none p-0 h-auto border-b border-base-secondary-normal cursor-pointer hover:text-brand-primary-normal">
                <span className="flex ml-10 py-3 items-center gap-9">
                  <LanguageIcon size="30" />
                  <p>{t('Language')}</p>
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="items-center">
                <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-[#F5F5F5]">
                  <LanguageIcon size="30" />
                </span>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {languageArr.map((data) => (
                  <p
                    key={data.language}
                    className={`text-xl text-black font-semibold flex justify-center gap-2 hover:text-brand-primary-normal`}
                  >
                    <Country country={data.country} />
                    {data.language}
                  </p>
                ))}
              </div>
              <DialogFooter className="flex flex-row justify-center sm:justify-center gap-8">
                <DialogClose asChild>
                  <Button className="w-24 h-12 rounded-lg font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
                    {t('Cancle')}
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="w-24 h-12 rounded-lg font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
                    {t('Confirm')}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col justify-end px-7 mb-10 gap-4">
        <Button className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
          {t('Log out')}
        </Button>
        <span className="flex justify-around paragraph text-base-secondary-light">
          <p className="cursor-pointer">이용약관</p>
          <p>|</p>
          <p className="cursor-pointer">개인정보처리방침</p>
          <p>|</p>
          <p className="cursor-pointer">회원탈퇴</p>
        </span>
      </div>
    </>
  )
}
