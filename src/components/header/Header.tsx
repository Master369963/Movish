import Link from "next/link"
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai"
import DarkModeSwitch from "./DarkModeSwitch"

const Header = () => {
  return (
    <header className="py-3 sm:py-5 px-3 sticky top-0 select-none dark:bg-gray-700 bg-white">
      <section className="max-w-5xl sm:mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 md:gap-4">
          <Link href="/" className="p-2 hover:text-indigo-400 transition">
            <AiFillHome className="sm:hidden text-2xl" />
            <span className="hidden sm:inline text-l">HOME</span>
          </Link>
          <Link href="/about" className="p-2 hover:text-indigo-400 transition">
            <AiFillInfoCircle className="sm:hidden text-2xl" />
            <span className="hidden sm:inline text-l">ABOUT</span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <DarkModeSwitch />
          <Link href="/" className="">
            <h2 className="text-2xl">
              <span className="font-bold bg-purple-600 py-1 px-2 rounded-lg mr-1">
                IMDb
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      </section>
    </header>
  )
}

export default Header
