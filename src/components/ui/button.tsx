import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex text-[16px] box-border items-center justify-center font-semibold rounded-full ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-primary-normal text-base-bright-light  hover:bg-brand-primary-light drop-shadow-md',
        primary:
          'bg-brand-primary-normal text-base-bright-light  hover:bg-brand-primary-light drop-shadow-md',
        secondary:
          'rounded-lg font-medium bg-brand-primary-normal text-base-bright-light hover:bg-brand-primary-light',
        outline:
          'outline outline-brand-primary-normal font-medium rounded-lg text-[16px] font-semibold bg-base-bright-normal text-base-primary-normal  hover:bg-base-bright-light outline-brand-primary-light',
      },
      size: {
        default: 'h-12 px-6 py-2',
        mini: 'h-6 px-4 text-[12px] font-medium ',
        sm: 'h-12 px-6 py-2 ',
        md: 'h-12 px-12 py-2',
        lg: 'w-full h-12 px-6',
        box:'h-20 rounded-lg  px-8'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string
  children?: React.ReactElement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, label, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children && children}
        {label && label}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
