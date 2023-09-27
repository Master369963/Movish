import Card from "./Card";
import type { Movie } from "../utilities/type";

const Cards = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default Cards;
