import { ComponentProps } from 'react'

import { merge } from '@/utils/tw-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={merge('animate-pulse bg-gray-600/40', className)}
      {...props}
    ></div>
  )
}
