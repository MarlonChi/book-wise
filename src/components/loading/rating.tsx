import { Skeleton } from '../skeleton'

export function LoadRatings() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-sm text-gray-200">Avaliações</span>
        <span className="cursor-not-allowed text-sm text-purple-100/70">
          Avaliar
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-56 rounded-lg border-2 border-solid border-transparent bg-gray-700 px-8 py-6" />
        <Skeleton className="h-52 rounded-lg border-2 border-solid border-transparent bg-gray-700 px-8 py-6" />
      </div>
    </div>
  )
}
