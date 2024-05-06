import { Bookmark  } from "@phosphor-icons/react/dist/ssr";

import { api } from '@/utils/api'
import { Rating } from '@/interfaces/rating'

import { RatingButton } from './rating-button'
import { RatingCard } from './rating-card'
import { RatingForm } from '../rating-form'

interface RatingListProps {
  bookId: string
}

async function getRatings(
  bookId: string,
): Promise<{ message?: string; ratings: Rating[] }> {
  try {
    const response = await api(`/books/${bookId}/ratings`, {
      cache: 'no-store',
      next: {
        tags: ['ratings'],
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      ratings: [],
      message: 'Não foi possível encontrar as avaliações do livro.',
    }
  }
}

export async function RatingList({ bookId }: RatingListProps) {
  const data = await getRatings(bookId)

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-sm text-gray-200">Avaliações</span>
        <RatingButton />
      </div>
      {!data.ratings.length ? (
        <div className="flex h-96 flex-col items-center justify-center gap-5">
          <Bookmark  className="h-12 w-12 text-gray-400" />
          <p className="max-w-60 select-none text-center text-gray-400">
            Não encontramos nenhuma avaliação ainda
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <RatingForm />
          {data.ratings.map((rating) => (
            <RatingCard key={rating.id} {...rating} />
          ))}
        </div>
      )}
    </div>
  )
}
