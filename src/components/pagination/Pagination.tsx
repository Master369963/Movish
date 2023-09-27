"use client";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Link from "next/link";

const Pagination = ({
  totalPage,
  genre,
  page,
}: {
  totalPage: number;
  genre: string;
  page: number;
}) => {
  const displayPages = 7;
  let currentMinPage;
  let currentMaxPage = Math.ceil(page / displayPages) * displayPages;
  if (page % displayPages === 0) {
    currentMinPage = (page / displayPages - 1) * displayPages + 1;
  } else {
    currentMinPage = Math.floor(page / displayPages) * displayPages + 1;
  }
  const pageList = [];

  for (let i = currentMinPage; i < currentMaxPage + 1; i++) {
    pageList.push(
      <li
        className={`${
          page === i ? "bg-secondary-100" : "hover:bg-secondary-100/70"
        } flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg font-bold text-primary `}
      >
        <Link href={`/?genre=${genre}&page=${i}`}>{i}</Link>
      </li>,
    );
  }

  return (
    <div className="mt-4 flex justify-center sm:mt-8">
      <ul className="flex list-none items-center justify-center gap-2 rounded-lg bg-white p-1 sm:p-2">
        <li
          className={`${
            page === 1 ? "cursor-auto" : "cursor-pointer hover:bg-secondary-100"
          } flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold text-primary`}
        >
          <Link
            href={`/?genre=${genre}&page=${page - 1}`}
            className={`${
              page === 1 ? "pointer-events-none text-gray-400" : ""
            }`}
          >
            <BiChevronsLeft />
          </Link>
        </li>
        {pageList}
        <li className="flex h-8 w-8 items-center justify-center font-bold text-primary">
          <FiMoreHorizontal />
        </li>
        <li
          className={`${
            page === totalPage
              ? "cursor-auto"
              : "cursor-pointer hover:bg-secondary-100"
          } flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold text-primary`}
        >
          <Link
            href={`/?genre=${genre}&page=${page + 1}`}
            className={`${
              page === totalPage ? "pointer-events-none text-gray-400" : ""
            }`}
          >
            <BiChevronsRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
