import SearchBar from "../SearchBar";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="w-full bg-primary/40 p-4 dark:bg-third-200 lg:text-lg  ">
      <div className="flex max-w-5xl items-center justify-between sm:mx-auto">
        <div className="flex justify-center gap-4">
          <NavbarItem title="Trending" param="fetchTrending" fallback={true} />
          <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
