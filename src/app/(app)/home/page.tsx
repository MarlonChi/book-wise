import Link from "next/link";
import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";

import { RatingCardBook } from "@/components/rating-card-book";
import { BookCard } from "@/components/book-card";
import { Menu } from "@/components/menu";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-16 h-full">
      <Menu />

      <div className="col-span-6 mt-14">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <ChartLineUp className="text-green-100 text-3xl" />
            <h2 className="font-bold text-2xl">Início</h2>
          </div>

          <div className="mt-10">
            <h4 className="text-sm">Avaliações mais recentes</h4>

            <div className="mt-4">
              <div className="flex flex-col gap-3">
                <RatingCardBook />
                <RatingCardBook />
                <RatingCardBook />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-4 mt-36">
        <div className="flex items-center justify-between">
          <h4 className="text-sm">Livros populares</h4>
          <Link
            href="/"
            className="flex items-center gap-4 text-purple-100 text-sm font-bold"
          >
            Ver todos
            <CaretRight />
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </section>
  );
}
