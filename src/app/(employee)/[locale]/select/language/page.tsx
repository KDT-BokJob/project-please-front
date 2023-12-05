'use client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const languageArr = [
  {
    language: '한국어',
    country: 'korea',
    locale: 'ko',
  },
  {
    language: 'English',
    country: 'global',
    locale: 'en',
  },
  {
    language: 'にほんご',
    country: 'japan',
    locale: 'ja',
  },
  {
    language: 'Tiếng Việt',
    country: 'vietnam',
    locale: 'vi',
  },
  {
    language: '中國語',
    country: 'china',
    locale: 'zh',
  },
  {
    language: 'नेपाली',
    country: 'nepal',
    locale: 'ne',
  },
]

const Country = dynamic(() => import('@/components/country'))
const Translate = dynamic(() => import('@/components/translate'))
export default function SelectLanguage({ params: { locale } }: { params: { locale: string } }) {
  const [current, setCurrent] = useState(locale)
  const router = useRouter()

  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl text-center h-8">
          <Translate locale={current} ns="selectLanguage" text="h1" />
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {languageArr.map((data) => (
            <Button
              key={data.language}
              className={`w-[9.4375rem] h-[5.6875rem] rounded-lg text-xl text-black font-semibold justify-evenly bg-[#f5f5f5] shadow-xl hover:bg-[#DDDDDD]
              ${current === data.locale && 'bg-[#DDDDDD]'}`}
              onClick={() => setCurrent(data.locale)}
            >
              <Country country={data.country} />
              {data.language}
            </Button>
          ))}
        </div>
      </section>
      <Button
        className="w-full h-12 rounded-full font-bold text-base text-base-bright-light bg-[#3CB371] shadow-md"
        onClick={() => router.push(`/${current}/signin`)}
      >
        <Translate locale={current} ns="selectLanguage" text="startBtn" />
      </Button>
    </>
  )
}
