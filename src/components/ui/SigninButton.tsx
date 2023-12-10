'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

import Google from '#/google.svg'

function SigninButton() {
  const { data: session } = useSession()
  // if (session && session.user) {
  //   //세션이 있으면 인증된 사용자
  //   return (
  //     <div className="flex gap-4 ml-auto">
  //       <p className="text-base-secondary-dark">{session.user.name}</p>
  //       <button onClick={() => signOut()} className="text-base-secondary-dark">
  //         Sign Out
  //       </button>
  //     </div>
  //   )
  // }
  return (
    <div className="flex items-center gap-4 px-4 py-3 shadow-md cursor-pointer bg-base-bright-light rounded-xl w-72">
      <Google />
      <button
        onClick={() => signIn('google', { callbackUrl: '/select/position' })}
        className="text-lg font-semibold opacity-60"
      >
        Log In with Google
      </button>
    </div>
  )
}

export default SigninButton
