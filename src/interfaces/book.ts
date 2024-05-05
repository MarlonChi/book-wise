export interface Book {
  id: string;
  cover_url: string;
  name: string;
  author: string;
  rate: number;
  summary: string;
  total_pages: number;
  categories: {
    id: string;
    name: string;
  }[];
  rates_count: number;
}

export type PopularBook = Omit<
  Book,
  "categories" | "total_pages" | "summary" | "rates_count"
>;
