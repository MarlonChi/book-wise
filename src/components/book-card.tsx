import { PopularBook } from "@/interfaces/book";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps extends PopularBook {
  onPress?: (id: string) => void;
}

export function BookCard(props: BookCardProps) {
  return (
    <div
      key={props.id}
      className="flex gap-5 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-5 py-4 transition hover:border-bw-gray-600"
    >
      <Image
        src={`/images/books/${props.cover_url}.png`}
        alt=""
        width={500}
        height={700}
        className="flex w-[100px] rounded-lg object-cover max-2xl:w-24 max-xl:w-16 max-lg:w-24"
      />
      <div className="flex flex-col justify-between">
        <div>
          <Link
            prefetch={false}
            href={`/books/${props.id}`}
            className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100 max-2xl:text-lg max-xl:line-clamp-1"
            passHref
          >
            {props.name}
          </Link>
          <span className="text-bw-gray-400">{props.author}</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <Star
                key={index}
                className="text-bw-purple-100 max-xl:h-4 max-xl:w-4 max-lg:h-5 max-lg:w-5"
                fill={index + 1 <= props.rate ? "#8381D9" : "transparent"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
