import { Button } from '@/components/ui/button'
import Logo from '#/please-logo.svg'
import Country from '@/components/country'

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

export default function SelectLanguage() {
  return (
    <main className="w-[23.4375rem] h-screen px-6 py-6 flex flex-col justify-around m-auto">
      <Logo />
      <section>
        <h2 className="font-semibold text-2xl text-center">Select Language</h2>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {languageArr.map((data, index) => (
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
      <Button className="w-full h-12 rounded-full font-bold text-base text-white bg-[#3CB371] shadow-md">Start</Button>
    </main>
  )
}
