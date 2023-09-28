import Cards from "@/components/card/Cards";
import Pagination from "@/components/pagination/Pagination";

const baseUrl = "https://api.themoviedb.org/3/";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  const res = await fetch(
    `${baseUrl}/search/movie?api_key=${process.env.API_KEY}&query=${searchParams.q}&include_adult=false&language=en-US&page=1&year=2000`,
  );
  const data = await res.json();
  const movies = data.results;
  const dataTotslPages = data.total_pages;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-xl underline decoration-1">
          Search keyword: {searchParams.q.toLowerCase()}
        </h2>
        <div className="sm:grid_auto sm:grid sm:auto-rows-fr sm:gap-4">
          {movies && movies.length === 0 && (
            <h1 className="w-full pt-6 text-center text-2xl">
              No result found.
            </h1>
          )}
          {movies && <Cards movies={movies} />}
        </div>
      </div>
      {dataTotslPages > 1 && <Pagination totalPage={dataTotslPages} />}
    </div>
  );
};

export default SearchPage;
