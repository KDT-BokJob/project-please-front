'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn } from '@/lib/utils'

const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn('relative w-10 h-10 border rounded-md border-brand-primary-normal', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('absolute top-0 right-0 left-0 bottom-0 bg-brand-primary-light')}>
        <p className="relative top-[0.46rem] text-white"> {props.children}</p>
      </CheckboxPrimitive.Indicator>
      <p className={` ${isHovered ? 'text-brand-primary-normal' : 'text-black'} `}>{props.children}</p>
    </CheckboxPrimitive.Root>
  )
})
CustomCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { CustomCheckbox }
