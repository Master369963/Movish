import RatingStart from "@/components/RatingStar";
import Image from "next/image";
import type { Movie } from "../../../components/utilities/type";

const baseUrl = "https://api.themoviedb.org/3/";

// type Genre = {
//   name: string;
// };

// type Movie = {
//   title: string;
//   genres: Genre[];
//   backdrop_path: string;
//   poster_path: string;
//   overview: string;
//   release_date: string;
//   vote_count: number;
//   vote_average: number;
// };

const getMovie = async (movieId: number): Promise<Movie> => {
  const res = await fetch(
    `${baseUrl}movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  return await res.json();
};

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovie(Number(params.id));
  let imageUrl;
  if (movie.backdrop_path) {
    imageUrl = `https://image.tmdb.org/t/p/original/${
      movie.poster_path || movie.backdrop_path
    }`;
  } else {
    imageUrl = "/no_image.jpg";
  }

  return (
    <div className="px-4 py-8">
      <div className="mx-auto flex max-w-5xl gap-5 lg:gap-10">
        <div className="relative min-h-[500px] basis-1/3">
          <Image
            src={imageUrl}
            alt="poster image"
            className="block h-auto w-full object-cover"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            width={350}
            height={500}
          />
        </div>

        <div className="flex basis-2/3 flex-col gap-5">
          <h2 className="text-2xl font-bold lg:mt-5 lg:text-3xl">
            {movie.title}
          </h2>
          <ul className="flex gap-2">
            {movie.genres &&
              movie.genres.map((item) => {
                return (
                  <li className="list-nonetext-white list-none rounded-lg bg-primary px-3 py-1 text-lg text-white">
                    {item.name}
                  </li>
                );
              })}
          </ul>
          <p className="text-lg">{movie.overview}</p>
          <RatingStart rating={movie.vote_average} />
          <p>
            <span className="font-semibold text-gray-400">Date Release: </span>
            {movie.release_date}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
