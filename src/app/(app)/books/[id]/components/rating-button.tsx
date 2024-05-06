'use client'

import { useRatingForm } from '@/hooks/useRatingForm'

export function RatingButton() {
  const { ratingFormVisible, setRatingFormVisible } = useRatingForm()

  async function handleRatingBook() {
    if (!ratingFormVisible) setRatingFormVisible(true)
  }

  return (
    <button onClick={handleRatingBook} className="text-sm text-purple-100">
      Avaliar
    </button>
  )
}
