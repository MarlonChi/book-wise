import { Book } from './book'
import { RatingUser } from './user'

export interface Rating {
  id: string
  created_at: string
  description: string
  rate: number
  user: RatingUser
}

export interface BookRating {
  book: Pick<Book, 'id' | 'author' | 'cover_url' | 'name'>
  id: string
  rate: number
  description: string
  created_at: string
}
