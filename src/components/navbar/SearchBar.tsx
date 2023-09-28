"use client";
import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LuSearchCheck, LuSearch } from "react-icons/lu";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (ref.current) {
      e.preventDefault();
      const input = ref.current.value.trim();
      if (!input) {
        setSearch("");
        return;
      }
      router.push(`/search?q=${input}`);
      setSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dark-hover:bg-third-300/80 flex items-center rounded-lg bg-gray-100/50 hover:bg-gray-100/80 dark:bg-black/30"
    >
      <input
        ref={ref}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Find movies..."
        className="rounded-lg bg-transparent px-3 py-2 text-sm placeholder-slate-500 outline-none"
      />
      <button
        type="submit"
        className="border-l-2 border-gray-700 px-2 text-2xl  disabled:text-gray-700"
        disabled={!search}
      >
        {search.length > 0 ? (
          <LuSearchCheck className="text-secondary-200 dark:text-secondary-100" />
        ) : (
          <LuSearch className=" cursor-not-allowed dark:text-secondary-100/50" />
        )}
        {/* <LuSearch /> */}
      </button>
    </form>
  );
}
