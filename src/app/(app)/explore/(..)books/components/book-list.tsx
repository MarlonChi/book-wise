import { BookCard } from '@/components/book-card'
import { PopularBook } from '@/interfaces/book';
import { api } from '@/utils/api'

import { ExploreSearchParams } from '../../page'

interface BooksListProps {
  searchParams: ExploreSearchParams
}

async function getPopularBook(
  searchParams?: ExploreSearchParams,
): Promise<{ message?: string; books: PopularBook[] } | undefined> {
  try {
    const params = new URLSearchParams(searchParams)
    const url = `/books?${params.toString()}`
 
    const response = await api(url, {
      cache: 'no-store',
    })

    const books = await response.json()

    return books
  } catch (error) {
    return {
      books: [],
      message: 'Não foi possível carregar os livros',
    }
  }
}

export async function BooksList({ searchParams }: BooksListProps) {
  const data = await getPopularBook(searchParams)

  return (
    <div className="grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
      {data?.books &&
        data?.books?.map((book) => {
          return (
            <div key={book.id} className="col-span-1 h-full w-full">
              <BookCard {...book} />
            </div>
          )
        })}
    </div>
  )
}
