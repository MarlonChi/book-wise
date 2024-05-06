import { Skeleton } from '../skeleton'

export function LoaderUserRatings() {
  return (
    <div className="mb-20 flex flex-col gap-6">
      <Skeleton className="h-[300px] w-full rounded-lg border-2 border-solid border-transparent bg-bw-gray-700" />
      <Skeleton className="h-[300px] w-full rounded-lg border-2 border-solid border-transparent bg-bw-gray-700" />
    </div>
  )
}
