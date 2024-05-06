'use client'

import { CaretLeft  } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  return (
    <button onClick={router.back} className="flex items-center gap-3">
      <CaretLeft  className="text-md text-gray-200" />
      <span className="text-md font-bold leading-tight text-gray-200">
        Voltar
      </span>
    </button>
  )
}
