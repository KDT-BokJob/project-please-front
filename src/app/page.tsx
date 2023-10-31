import { Button } from '@/components/ui/button'
import Logo from '#/please-logo.svg'
const languageArr = [
  {
    language: '한국어',
  },
  {
    language: 'English',
  },
  {
    language: 'にほんご',
  },
  {
    language: 'Tiếng Việt',
  },
  {
    language: '中國語',
  },
  {
    language: 'नेपाली',
  },
]

export default function Entry() {
  return (
    <main className="w-[23.4375rem] h-screen px-6 py-6 flex flex-col justify-around m-auto">
      <Logo />
      <section>
        <h2 className="font-semibold text-xl text-center">Select Language</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {languageArr.map((data, index) => (
            <Button
              key={data.language}
              className={`w-[9.4375rem] h-[5.6875rem] border-4 border-white rounded-lg text-xl text-black font-semibold ${
                index % 2 ? 'bg-[#C2D471]' : 'bg-[#FAA339]'
              } shadow-xl`}
            >
              {data.language}
            </Button>
          ))}
        </div>
      </section>
      <Button className="w-full h-12 rounded-full font-bold text-base text-white bg-[#3CB371] shadow-md">Start</Button>
    </main>
  )
}
