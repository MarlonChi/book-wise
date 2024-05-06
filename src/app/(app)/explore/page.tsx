import { Suspense } from 'react'
import { Metadata } from 'next'
import { MagnifyingGlass  } from "@phosphor-icons/react/dist/ssr";


import { LoaderCategories } from '@/components/loading/categories'
import { LoaderBooks } from '@/components/loading/books'
import { SearchForm } from './(..)books/components/search-form';
import { CategoriesWrapper } from './(..)books/components/categories-wrapper';
import { BooksList } from './(..)books/components/book-list';

export type ExploreSearchParams = {
  category?: string
  q?: string
}
interface ExploreProps {
  searchParams: ExploreSearchParams
}

export const metadata: Metadata = {
  title: 'Explorar',
}

export default function Explore({ searchParams }: ExploreProps) {
  return (
    <div className="mx-auto my-0 flex max-w-[1600px] flex-1 flex-col p-10 max-xl:p-6">
      <header className="sticky top-0 flex items-center justify-between gap-3 bg-gray-800 max-sm:flex-col max-sm:items-start max-sm:py-3">
        <div className="mt-5 flex items-center gap-3 bg-gray-800/15 py-3">
          <MagnifyingGlass className="text-3xl text-green-100" />
          <h1 className="text-2xl font-bold leading-tight">Explorar</h1>
        </div>
        <SearchForm />
      </header>
      <div className="mt-8 flex h-full w-full flex-col gap-6">
        <Suspense fallback={<LoaderCategories />}>
          <CategoriesWrapper />
        </Suspense>
        <Suspense fallback={<LoaderBooks />}>
          <BooksList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
