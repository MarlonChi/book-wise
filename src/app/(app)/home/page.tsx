import Link from "next/link";
import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";

import { Menu } from "@/components/menu";
import { Feed } from "./components/feed";
import { BooksList } from "./components/book-list";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-16 h-full">

      <div className="col-span-8 mt-14">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <ChartLineUp className="text-green-100 text-3xl" />
            <h2 className="font-bold text-2xl">Início</h2>
          </div>

          <div className="mt-10">
            <Feed />
          </div>
        </div>
      </div>

      <div className="col-span-4 mt-36">
        <div className="flex h-full flex-col items-center">
          <div className="sticky top-20 flex w-full flex-col gap-4 max-2xl:top-16 max-lg:static">
            <div className="flex w-full justify-between">
              <h2 className="flex text-left text-sm text-gray-100">
                Livros populares
              </h2>
              <Link
                prefetch={false}
                href="/explore"
                className="flex items-center gap-2 text-sm text-purple-100"
              >
                <span>Ver todos</span>
                <CaretRight />
              </Link>
            </div>
            <BooksList />
          </div>
        </div>
      </div>
    </section>
  );
}
