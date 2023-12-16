'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

function Logout() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="w-full h-12 text-base font-bold rounded-full shadow-md cursor-pointer text-base-bright-light bg-brand-primary-normal"
    >
      Log out
    </Button>
  )
}

export default Logout
