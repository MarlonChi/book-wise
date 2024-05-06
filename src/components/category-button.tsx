'use client'

import { cva, VariantProps } from 'class-variance-authority'

import { merge } from '@/utils/tw-merge'

const buttonVariants = cva('rounded-full border px-4 py-1', {
  variants: {
    active: {
      true: 'border-purple-200 bg-purple-200',
      false: 'border-purple-100 bg-transparent text-purple-100',
    },
  },
  defaultVariants: {
    active: false,
  },
})

interface CategoryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  name: string
}

export function CategoryButton({
  name,
  className,
  active,
  ...props
}: CategoryButtonProps) {
  return (
    <button className={merge(buttonVariants({ active, className }))} {...props}>
      {name}
    </button>
  )
}
