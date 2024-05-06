'use client'

import { Star } from "@phosphor-icons/react/dist/ssr";

interface EvaluationProps {
  onChangeValue: (value: number) => void
  value: number
}

export function Evaluation({ onChangeValue, value }: EvaluationProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => onChangeValue(index + 1)}
        >
          <Star
            className="text-purple-100 max-sm:h-4 max-sm:w-4"
            fill={value >= index + 1 ? '#8381D9' : 'transparent'}
          />
        </span>
      ))}
    </div>
  )
}
