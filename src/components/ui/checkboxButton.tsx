'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { cn } from '@/lib/utils'

const CheckboxButton = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'w-full h-10 border-[2px] rounded-md border-brand-primary-normal hover:bg-brand-primary-normal',
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setIsChecked(!isChecked)
        console.log('isChecked:', !isChecked)
      }}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('')}>
        <p className="relative flex flex-col justify-center h-full text-white bg-brand-primary-normal">
          {' '}
          {props.children}
        </p>
      </CheckboxPrimitive.Indicator>
      {isChecked ? null : <p className={` ${isHovered ? 'text-white' : 'text-black'}  `}>{props.children}</p>}
    </CheckboxPrimitive.Root>
  )
})
CheckboxButton.displayName = CheckboxPrimitive.Root.displayName

export { CheckboxButton }
