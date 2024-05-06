import { useContext } from 'react'

import { RatingContext } from '@/contexts/rating'

export function useRatingForm() {
  const { ratingFormVisible, setRatingFormVisible } = useContext(RatingContext)

  return { ratingFormVisible, setRatingFormVisible }
}
