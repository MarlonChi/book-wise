'use client'

import { FormEvent, useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MagnifyingGlass  } from "@phosphor-icons/react/dist/ssr";

import { createQueryString } from '@/utils/createQueryString'

export function SearchForm() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const createQuery = useCallback(createQueryString, [searchParams])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q.toString()

    const url = createQuery('q', query, searchParams, pathName)

    router.replace(url)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="group flex gap-6 rounded border border-gray-500 px-5 py-3 focus-within:border-green-200 max-sm:w-full"
    >
      <input
        type="text"
        name="q"
        placeholder="Buscar livro ou autor"
        defaultValue={query ?? ''}
        className="flex bg-transparent text-sm outline-none placeholder:text-gray-400 max-sm:w-full"
      />
      <MagnifyingGlass  className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
    </form>
  )
}
