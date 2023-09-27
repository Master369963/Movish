export type Genre = {
  name: string;
};

export type Movie = {
  title: string;
  original_title: string;
  genres: Genre[];
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  id: number;
};
