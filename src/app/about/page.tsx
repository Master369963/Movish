import { LuPopcorn } from "react-icons/lu";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-156px)] bg-about bg-cover bg-no-repeat">
      <div className="flex h-full w-full items-center justify-center p-4 sm:justify-end sm:p-6">
        <div className="flex-col gap-3 rounded-xl bg-white/60 p-2 backdrop-blur-lg sm:w-3/4 sm:p-6 lg:w-1/2">
          <h1 className="text-2xl font-bold text-black">About</h1>
          <p className="mt-2 text-black">
            Welcome to our movie database website! We are a team of passionate
            movie enthusiasts who have come together to create a one-stop
            destination for all your movie-related needs.
          </p>

          <p className="mt-2 text-black">
            Our website is designed to provide you with a comprehensive database
            of movies from all around the world, along with the latest news,
            reviews, and trailers. Our movie database is constantly updated with
            new releases, ensuring that you have access to the latest and
            greatest in the world of cinema. You can search for movies by title,
            director, actor, genre, or release date, making it easy to find the
            perfect movie for any occasion.
          </p>

          <p className="mt-2 text-black">
            Thank you for visiting our website and we hope you enjoy your time
            browsing through our movie database. If you have any feedback or
            suggestions, please feel free to contact us. We are always looking
            for ways to improve and enhance the user experience on our website.
            Happy browsing!
          </p>
          <h2 className="mt-3 text-xl font-semibold text-gray-800">
            What you can find
          </h2>
          <ul className="ml-1 text-gray-700">
            <li className="flex items-center gap-1">
              <LuPopcorn className="min-w-[24px]" /> Trending: trending movies
              on TMDB
            </li>
            <li className="flex items-center gap-1">
              <LuPopcorn className="min-w-[24px]" /> Top rated: a list of movies
              ordered by rating
            </li>
            <li className="flex items-center gap-1">
              <LuPopcorn className="min-w-[24px]" /> Details of movies
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
