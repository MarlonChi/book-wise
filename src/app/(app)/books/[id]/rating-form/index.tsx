'use client'

import { SignInRequest } from '@/components/sign-in-request'
import { useRatingAvailable } from '@/hooks/useRatingAvailable'
import { useRatingForm } from '@/hooks/useRatingForm'

import { Form } from './form'

export function RatingForm() {
  const available = useRatingAvailable()
  const { ratingFormVisible: visible } = useRatingForm()

  if (!visible) {
    return null
  }

  return (
    <div className="relative">
      {!available && <SignInRequest />}
      <Form available={available} />
    </div>
  )
}
