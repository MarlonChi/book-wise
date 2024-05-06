import { useContext } from 'react'

import { RatingContext } from '@/contexts/rating'

export function useRatingAvailable() {
  const { availableForm } = useContext(RatingContext)

  return availableForm
}
