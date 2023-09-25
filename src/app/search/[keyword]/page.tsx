import Cards from "@/components/card/Cards";

const baseUrl = "https://api.themoviedb.org/3/";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `${baseUrl}/search/movie?api_key=${process.env.API_KEY}&query=${params.keyword}&include_adult=false&language=en-US&page=1&year=2000`,
  );
  const data = await res.json();
  const result = data.results;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-xl underline decoration-1">
          Search keyword: {params.keyword.toLowerCase()}
        </h2>
        <div className="sm:grid_auto sm:grid sm:auto-rows-fr sm:gap-4">
          {result && result.length === 0 && (
            <h1 className="w-full pt-6 text-center text-2xl">
              No result found.
            </h1>
          )}

          {result && <Cards result={result} />}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
