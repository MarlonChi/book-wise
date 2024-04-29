import "dayjs/locale/pt-br";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/avatar";

dayjs.extend(relativeTime);
dayjs.locale("pt-BR");

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

type RatingCardBookProps = FeedItem;

export const RatingCardBook = (props: RatingCardBookProps) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border-2 border-solid border-transparent bg-gray-700 p-6 transition hover:border-gray-500">
      <header className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Avatar
            image={props.user.image}
            redirectToProfile
            userId={props.user_id}
          />
          <div className="flex flex-col">
            <Link
              href={`/profile/${props.user_id}`}
              className="text-base text-gray-100 hover:text-purple-100"
              prefetch={false}
            >
              {props.user.name}
            </Link>
            <span className="text-sm text-gray-400">
              {dayjs().to(dayjs(props.created_at))}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <Star
                key={index}
                className="text-purple-100 max-sm:h-4 max-sm:w-4"
                fill={index + 1 <= props.rate ? "#8381D9" : "transparent"}
              />
            );
          })}
        </div>
      </header>
      <div className="flex gap-5 max-sm:flex-col">
        <Image
          src={`/images/books/${props.book.cover_url}.png`}
          alt=""
          width={700}
          height={900}
          className="flex w-[100px] rounded-lg object-cover max-sm:h-[200px] max-sm:w-full"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <Link
              href={`/books/${props.book.id}`}
              className="text-xl font-bold text-gray-100 hover:text-purple-100"
              prefetch={false}
            >
              {props.book.name}
            </Link>
            <span className="text-gray-400">{props.book.author}</span>
          </div>
          <p className="text-gray-300">
            {props.book.summary}...
            <Link
              href={`/books/${props.book.id}`}
              className="text-purple-100"
              prefetch={false}
            >
              ver mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
