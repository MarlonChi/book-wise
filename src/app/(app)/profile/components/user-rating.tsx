import { Bookmark  } from "@phosphor-icons/react/dist/ssr";

import { api } from '@/utils/api'
import { BookRating } from '@/interfaces/rating'

import { RatingCard } from './rating-card'
import { UserRatingsSearchParams } from "../page";

interface UserRatingProps {
  userId?: string
  searchParams: UserRatingsSearchParams
}

async function getUserRatings(
  searchParams: UserRatingsSearchParams,
  id?: string,
): Promise<{
  message?: string
  ratings: BookRating[]
}> {
  try {
    const params = new URLSearchParams(searchParams)
    const response = await api(`/ratings?userId=${id}&${params.toString()}`, {
      next: {
        revalidate: 60 * 30,
        tags: ['user-ratings'],
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      message: 'Não foi possível encontrar os livros avaliados do usuário.',
      ratings: [],
    }
  }
}

export async function UserRatings({ userId, searchParams }: UserRatingProps) {
  const { ratings, message } = await getUserRatings(searchParams, userId)

  if (message) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <Bookmark className="h-12 w-12 text-gray-400" />
        <p className="max-w-60 select-none text-center text-gray-400">
          {message}
        </p>
      </div>
    )
  }

  if (!ratings.length) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <Bookmark className="h-12 w-12 text-gray-400" />
        <p className="max-w-60 select-none text-center text-gray-400">
          Nenhuma avaliação ainda
        </p>
      </div>
    )
  }

  return (
    <section className="mb-20 flex flex-col gap-6">
      {ratings.map((rating) => (
        <RatingCard key={rating.id} {...rating} />
      ))}
    </section>
  )
}
