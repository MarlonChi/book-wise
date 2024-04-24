import Image from "next/image";
import { RatingStars } from "./rating-stars";

export const RatingCardBook = () => {
  return (
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
        <div>
          <RatingStars />
        </div>
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
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </p>
        </div>
      </div>
    </div>
  );
};
