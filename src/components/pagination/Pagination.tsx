"use client";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({
  totalPage,
  genre,
  page = 1,
}: {
  totalPage: number;
  genre?: string;
  page?: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const displayPages = 7;
  let currentMinPage = Math.floor((page - 1) / displayPages) * displayPages + 1;
  let currentMaxPage =
    totalPage > displayPages
      ? Math.ceil(page / displayPages) * displayPages
      : totalPage;
  const pageList = [];

  const getHref = (page: number) => {
    const queryString = new URLSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
    return `${pathname}?${queryString}`;
  };

  for (let i = currentMinPage; i < currentMaxPage + 1; i++) {
    pageList.push(
      <li
        className={`${
          page === i ? "bg-secondary-100" : "hover:bg-secondary-100/70"
        } flex cursor-pointer items-center justify-center rounded-lg font-bold text-primary `}
      >
        <Link
          href={getHref(i)}
          className="flex h-8 w-8 items-center justify-center"
        >
          {i}
        </Link>
      </li>,
    );
  }

  return (
    <div className="mt-4 flex justify-center sm:mt-8">
      <ul className="flex list-none items-center justify-center gap-2 rounded-lg bg-white p-1 sm:p-2">
        <li
          className={`${
            page === 1 ? "cursor-auto" : "cursor-pointer hover:bg-secondary-100"
          } flex items-center justify-center rounded-lg text-xl font-bold text-primary`}
        >
          <Link
            href={getHref(page - 1)}
            className={`${
              page === 1 ? "pointer-events-none text-gray-400" : ""
            } flex h-8 w-8 items-center justify-center`}
          >
            <BiChevronsLeft />
          </Link>
        </li>
        {pageList}
        {totalPage > displayPages && (
          <li className="flex h-8 w-8 items-center justify-center font-bold text-primary">
            <FiMoreHorizontal />
          </li>
        )}
        <li
          className={`${
            page === totalPage
              ? "cursor-auto"
              : "cursor-pointer hover:bg-secondary-100"
          } flex items-center justify-center rounded-lg text-xl font-bold text-primary`}
        >
          <Link
            href={getHref(page + 1)}
            className={`${
              page === totalPage ? "pointer-events-none text-gray-400" : ""
            } flex h-8 w-8 items-center justify-center`}
          >
            <BiChevronsRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
