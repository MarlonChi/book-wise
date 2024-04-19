import Link from "next/link";
import {
  SignIn,
  ChartLineUp,
  Binoculars,
} from "@phosphor-icons/react/dist/ssr";

import { BookWiseLogo } from "@/assets/icons";

export default function Home() {
  return (
    <section className="flex h-full">
      <nav className="max-w-[232px] w-full flex flex-col items-center justify-between bg-gray-700 rounded-xl">
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
      <div className="flex-1">b</div>
      <div className="max-w-[324px] w-full">c</div>
    </section>
  );
}
