import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex text-[16px] box-border items-center justify-center font-semibold rounded-lg ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary-normal text-base-bright-light  hover:bg-brand-primary-light drop-shadow-md',
        primary: 'bg-brand-primary-normal text-base-bright-light  hover:bg-brand-primary-light drop-shadow-md',
        secondary:
          'bg-base-bright-light text-base-primary-dark border border-brand-primary-normal hover:bg-brand-primary-light hover:text-base-bright-normal',
        outline:
          'border border-brand-primary-normal font-medium rounded-lg text-[16px] font-semibold bg-base-bright-normal text-base-primary-normal  hover:bg-base-bright-light border-brand-primary-light',
        innerLine:
          'shadow-[inset_0_0_0_2px_#3CB371] font-medium rounded-lg text-[16px] font-semibold bg-base-bright-normal text-base-primary-normal  hover:bg-base-bright-light hover:outline-brand-primary-light',
        profile: 'bg-base-secondary-dark',
        append: 'border-dotted border-2 border-brand-primary-normal text-brand-primary-normal',
        delete: 'text-base-primary-dark hover:text-rose-500',
        ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
      },
      size: {
        default: 'h-12 px-6 py-2',
        mini: 'h-6 px-4 text-[12px] font-medium ',
        xs: 'h-6 rounded-full p-1',
        sm: 'h-12 px-6 py-2 ',
        md: 'h-12 px-12 py-2',
        lg: 'w-full h-12 px-6',
        box: 'h-20 rounded-lg  px-8',
        icon: 'h-10 w-1',
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
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
