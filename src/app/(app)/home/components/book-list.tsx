import { BookCard } from "@/components/book-card";
import { Book } from "@/interfaces/book";
import { api } from "@/utils/api";

async function getPopularBook(): Promise<
  { message?: string; books: Book[] } | undefined
> {
  try {
    const response = await api("/books/popular", {
      next: {
        revalidate: 60 * 30, // 30 min
      },
    });
    const books = await response.json();

    return books;
  } catch (error) {
    return {
      books: [],
      message: "Não foi possível carregar os livros.",
    };
  }
}

export async function BooksList() {
  const data = await getPopularBook();
  return (
    <div className="flex w-full flex-col gap-3">
      {data?.books &&
        data?.books?.map((book) => {
          return <BookCard key={book.id} {...book} />;
        })}
    </div>
  );
}
