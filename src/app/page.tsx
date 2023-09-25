import Cards from "@/components/card/Cards";

const baseUrl = "https://api.themoviedb.org/3/";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `${baseUrl}${
      genre === "fetchTrending" ? "trending/movie/week" : "movie/top_rated"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } },
  );
  const data = await res.json();
  const result = data.results;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="px-4 py-8">
      <div className="grid_auto mx-auto grid max-w-5xl auto-rows-fr gap-4">
        <Cards result={result} />
      </div>
    </div>
  );
}
