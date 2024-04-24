import Image from "next/image";
import React from "react";
import { RatingStars } from "./rating-stars";

export const BookCard = () => {
  return (
    <div className="bg-gray-700 rounded-lg p-6 flex gap-5">
      <div className="rounded-md">
        <Image
          src="/images/books/Book.png"
          alt=""
          width={64}
          height={94}
          className="w-16 h-24"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-bold">O Hobbit</h3>
          <p className="text-gray-400">J.R.R. Tolkien</p>
        </div>

        <div>
          <RatingStars />
        </div>
      </div>
    </div>
  );
};
