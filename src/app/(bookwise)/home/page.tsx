import Link from "next/link";
import {
  SignIn,
  ChartLineUp,
  Binoculars,
} from "@phosphor-icons/react/dist/ssr";

import { BookWiseLogo } from "@/assets/icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-6 h-full">
      <nav className="col-span-2 max-h-[95vh] w-full flex flex-col items-center justify-between bg-gray-700 rounded-xl">
        <div>
          <div className="mt-10">
            <BookWiseLogo />
          </div>
          <ul className="mt-16 flex gap-5 flex-col">
            <li>
              <Link
                href="/home"
                className="flex gap-3 before:content-[''] before:w-1 before:rounded-sm before:block before:absolute before:-inset-1 before:bg-gradient-to-r before:from-green-100 before:to-purple-100 before:absolute before:left-[-16px] relative inline-block"
              >
                <ChartLineUp size={24} />
                Início
              </Link>
            </li>
            <li>
              <Link href="" className="flex gap-3">
                <Binoculars size={24} />
                Explorar
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="mb-6 flex gap-3 items-center text-base text-bold text-gray-200 "
        >
          Fazer login
          <SignIn className="text-green-100" />
        </Link>
      </nav>

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
                <div className="bg-gray-700 rounded-lg p-6">
                  <header className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src="https://github.com/MarlonChi.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p>Marlon Chiodelli</p>
                        <p className="text-gray-400">Hoje</p>
                      </div>
                    </div>
                    <div>Rating stars</div>
                  </header>

                  <div className="mt-8 flex gap-5">
                    <div className="rounded-md">
                      <Image
                        src="/images/books/o-hobbit.png"
                        alt=""
                        width={108}
                        height={152}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold">O Hobbit</h3>
                      <p className="text-gray-400">J.R.R. Tolkien</p>

                      <p className="text-gray-300">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <header className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src="https://github.com/MarlonChi.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p>Marlon Chiodelli</p>
                        <p className="text-gray-400">Hoje</p>
                      </div>
                    </div>
                    <div>Rating stars</div>
                  </header>

                  <div className="mt-8 flex gap-5">
                    <div className="rounded-md">
                      <Image
                        src="/images/books/o-hobbit.png"
                        alt=""
                        width={108}
                        height={152}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold">O Hobbit</h3>
                      <p className="text-gray-400">J.R.R. Tolkien</p>

                      <p className="text-gray-300">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <header className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src="https://github.com/MarlonChi.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p>Marlon Chiodelli</p>
                        <p className="text-gray-400">Hoje</p>
                      </div>
                    </div>
                    <div>Rating stars</div>
                  </header>

                  <div className="mt-8 flex gap-5">
                    <div className="rounded-md">
                      <Image
                        src="/images/books/o-hobbit.png"
                        alt=""
                        width={108}
                        height={152}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold">O Hobbit</h3>
                      <p className="text-gray-400">J.R.R. Tolkien</p>

                      <p className="text-gray-300">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4">c</div>
    </section>
  );
}
