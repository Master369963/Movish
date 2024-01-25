import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";
import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <header className="select-none px-4 py-3 sm:py-5">
      <section className="flex max-w-5xl flex-row items-center justify-between sm:mx-auto">
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <Link href="/" className="p-2 transition hover:text-primary">
            <AiFillHome className="text-2xl sm:hidden" />
            <span className="text-l hidden sm:inline">HOME</span>
          </Link>
          <Link href="/about" className="p-2 transition hover:text-primary">
            <AiFillInfoCircle className="text-2xl sm:hidden" />
            <span className="text-l hidden sm:inline">ABOUT</span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <DarkModeSwitch />
          <Link href="/" className="">
            <h2 className="text-2xl">
              <span className="rounded-lg bg-primary px-2 py-1 font-bold text-white">
                <span className={irishGrover.className}>M</span>ov
                <span className="text-lg text-secondary-100">ish</span>
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
