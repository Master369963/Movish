import Link from "next/link";
import Image from "next/image";
import { GoThumbsup } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Lexend } from "next/font/google";
import type { Movie } from "../utilities/type";

const lexend = Lexend({ subsets: ["latin"] });

const Card = ({ movie }: { movie: Movie }) => {
  let imageUrl;

  if (movie.backdrop_path || movie.poster_path) {
    imageUrl = `https://image.tmdb.org/t/p/original/${
      movie.backdrop_path || movie.poster_path
    }`;
  } else {
    imageUrl = "/no_image.jpg";
  }

  return (
    <div
      className={`${lexend.className} group mb-5 w-full cursor-pointer rounded-lg border shadow-md transition-shadow duration-200 hover:shadow-gray-400 dark:border-none dark:shadow-c15 dark:hover:shadow-c3 dark:hover:shadow-secondary-100/30 sm:m-0 sm:mb-0 sm:max-w-[300px]`}
    >
      <Link href={`/movie/${movie.id}`} className="flex h-full flex-col">
        <div className="relative h-36 min-h-[175px] overflow-hidden rounded-t-lg">
          <span className="absolute -right-14 bottom-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg transition-[right] group-hover:right-3.5">
            <AiOutlineFileSearch className="text-2xl text-white drop-shadow-md " />
          </span>

          <Image
            key={imageUrl}
            src={imageUrl}
            alt={movie.title}
            className={`object-cover transition-transform duration-200 group-hover:scale-110`}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            fill
          />
        </div>
        <div className="flex flex-1 flex-col px-3 pt-3">
          <h2 className="mb-1 line-clamp-2 text-lg font-semibold">
            {movie.title || movie.original_title}
          </h2>
          <p className="mt-auto line-clamp-3 text-sm text-gray-500 dark:text-gray-300">
            {movie.overview}
          </p>
          <div className="mt-3 flex justify-between border-t-2 dark:border-gray-600">
            <p className="text-sm font-medium leading-10">
              {movie.release_date}
            </p>
            <div className="flex items-center gap-1">
              <GoThumbsup className="text-lg" />
              <span>{movie.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
