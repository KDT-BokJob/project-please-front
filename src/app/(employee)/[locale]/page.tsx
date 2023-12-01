'use client'
import { useState } from 'react'

import Please from '#/please.svg'
import PleaseLeft from '#/please-left.svg'
import PleaseRight from '#/please-right.svg'
import White from '#/white-handshake.svg'

export default function Landig() {
  let [loading, setLoading] = useState(false)
  setTimeout(() => setLoading(true), 2500)

  return (
    <div className="w-[23.4375rem] h-screen bg-[#44CD81] px-6 py-6  flex flex-col justify-around m-auto">
      <div className="relative group">
        {!loading ? (
          <div>
            <PleaseLeft className="delay-500 animate-[handshake-right_2s_ease-in-out] fill-mode-both" />
            <PleaseRight className="!absolute delay-500 right-0 top-0 animate-[handshake-left_2s_ease-in-out] fill-mode-both" />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <White />
            <Please className="animate-[fade-in_0.5s_ease-in-out]" />
          </div>
        )}
      </div>
    </div>
  )
}
