import { Skeleton } from '../skeleton'

export function LoaderUserInfo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-1 flex-col items-center gap-5">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-5 w-56 rounded" />
          <Skeleton className="h-5 w-44 rounded" />
        </div>
      </div>

      <div className="h-1 w-10 rounded-md bg-bw-gradient-vertical" />

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <Skeleton className="h-10 w-10 rounded text-bw-green-100" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20 rounded" />
            <Skeleton className="h-5 w-28 rounded" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <Skeleton className="h-10 w-10 rounded text-bw-green-100" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20 rounded" />
            <Skeleton className="h-5 w-28 rounded" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <Skeleton className="h-10 w-10 rounded text-bw-green-100" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20 rounded" />
            <Skeleton className="h-5 w-28 rounded" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <Skeleton className="h-10 w-10 rounded text-bw-green-100" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20 rounded" />
            <Skeleton className="h-5 w-28 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
