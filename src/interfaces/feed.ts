export interface FeedItem {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  user: {
    name: string;
    image: string;
  };
  book: {
    id: string;
    author: string;
    name: string;
    cover_url: string;
    summary: string;
    ratings: {
      rate: number;
    }[];
  };
}
