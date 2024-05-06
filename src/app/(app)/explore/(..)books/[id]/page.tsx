import { Suspense } from 'react'
import { Metadata } from 'next'

import { BookInfo } from '@/app/(app)/books/[id]/components/book-info'
import { RatingList } from '@/app/(app)/books/[id]/components/rating-list'

import { RatingProvider } from '@/contexts/rating'
import { LoaderBookInfo } from '@/components/loading/book-info'
import { LoadRatings } from '@/components/loading/rating'
import { Modal } from '@/components/modal'

interface BookPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Livro',
}

export default async function BookPage({ params }: BookPageProps) {
  return (
    <Modal>
      <div className="flex max-w-4xl flex-1 flex-col gap-10 overflow-y-scroll px-3">
        <Suspense fallback={<LoaderBookInfo />}>
          <BookInfo id={params.id} />
        </Suspense>
        <RatingProvider>
          <Suspense fallback={<LoadRatings />}>
            <RatingList bookId={params.id} />
          </Suspense>
        </RatingProvider>
      </div>
    </Modal>
  )
}
