'use client'

import { MagnifyingGlass  } from "@phosphor-icons/react/dist/ssr";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q.toString()

    router.replace(pathName + '?' + (query ? `q=${query}` : ''))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex gap-6 rounded border border-gray-500 px-5 py-3 focus-within:border-green-200"
    >
      <input
        type="text"
        name="q"
        placeholder="Buscar livro avaliado"
        defaultValue={query ?? ''}
        className="flex flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
      />
      <MagnifyingGlass  className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
    </form>
  )
}
