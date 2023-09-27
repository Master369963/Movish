import Cards from "@/components/card/Cards";
import Pagination from "@/components/pagination/Pagination";

const baseUrl = "https://api.themoviedb.org/3/";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string; page?: string };
}) {
  const genre = searchParams.genre || "fetchTrending";
  const page = searchParams.page ? Number(searchParams.page) : 1;

  const res = await fetch(
    `${baseUrl}${
      genre === "fetchTrending" ? "trending/movie/week" : "movie/popular"
    }?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 10000 } },
  );
  const data = await res.json();
  const result = data.results;
  const dataTotslPages = data.total_pages;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div className="px-4 py-8">
      <div className="grid_auto mx-auto grid max-w-5xl auto-rows-fr gap-4">
        <Cards result={result} />
      </div>
      <Pagination genre={genre} page={page} totalPage={dataTotslPages} />
    </div>
  );
}
