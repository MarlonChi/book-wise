import { api } from "@/utils/api";
import { RatingCardBook } from "./rating-card-book";

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

async function getFeed(): Promise<FeedItem[] | undefined> {
  try {
    const response = await api("/feed", {
      next: {
        revalidate: 60 * 30,
        tags: ["feed"],
      },
    });
    const feed = await response.json();
    return feed.rates;
  } catch (error) {
    return [];
  }
}

export async function Feed() {
  const feed = await getFeed();

  return (
    <section className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full">
        <h2 className="flex text-left text-sm text-gray-100">
          Avaliações mais recentes
        </h2>
      </div>
      <div className="flex h-full w-full flex-col gap-3">
        {feed &&
          feed?.map((feedItem) => (
            <RatingCardBook key={feedItem.id} {...feedItem} />
          ))}
      </div>
    </section>
  );
}
