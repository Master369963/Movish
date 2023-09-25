"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const NavbarItem = ({
  title,
  param,
  fallback = false,
}: {
  title: string;
  param: string;
  fallback?: boolean;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const genre = searchParams.get("genre");
  // const isActive =
  //   (!genre && fallback && !pathname.includes("movie")) || genre === param;
  const isActive = genre === param || (pathname === "/" && fallback && !genre);

  return (
    <Link
      href={`/?genre=${param}`}
      className={`${
        isActive
          ? "rounded-xl underline decoration-secondary-200 decoration-4 underline-offset-8"
          : ""
      }
         p-2 font-semibold hover:text-secondary-300`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
