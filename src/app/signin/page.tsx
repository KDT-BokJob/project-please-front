'use client'

import SigninButton from '@/components/ui/SigninButton'
import Please from '#/please.svg'
import White from '#/white-handshake.svg'

export default function SigninPage() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <White />
        <Please />
      </div>
      <SigninButton />
    </>
  )
}
