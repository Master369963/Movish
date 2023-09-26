import SearchBar from "./SearchBar";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="w-full bg-primary/40 p-4 dark:bg-third-200 lg:text-lg  ">
      <div className="flex max-w-5xl flex-col items-center justify-between sm:mx-auto sm:flex-row">
        <div className="mb-2 flex gap-1 sm:mb-0 sm:flex-nowrap sm:justify-center sm:gap-4">
          <NavbarItem title="Trending" param="fetchTrending" fallback={true} />
          <NavbarItem title="Popular" param="fetchPopular" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
