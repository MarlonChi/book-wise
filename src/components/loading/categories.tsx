import { Skeleton } from '../skeleton'

export function LoaderCategories() {
  return (
    <div className="flex items-center justify-start gap-3 overflow-x-scroll py-2">
      <Skeleton className="h-9 w-20 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-20 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-20 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-28 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-20 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-24 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-24 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-20 rounded-full px-4 py-1" />
      <Skeleton className="h-9 w-28 rounded-full px-4 py-1" />
    </div>
  )
}
