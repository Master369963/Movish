import Link from "next/link"
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai"
import DarkModeSwitch from "./DarkModeSwitch"
import { Irish_Grover } from "next/font/google"

const irishGrover = Irish_Grover({ subsets: ["latin"], weight:"400" })


const Header = () => {
  return (
    <header className="py-3 sm:py-5 px-4 select-none">
          {/* <header className="z-20 py-3 sm:py-5 px-4 sticky top-0 select-none "> */}

      <section className="max-w-5xl sm:mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <Link href="/" className="p-2 hover:text-primary transition">
            <AiFillHome className="sm:hidden text-2xl" />
            <span className="hidden sm:inline text-l">HOME</span>
          </Link>
          <Link href="/about" className="p-2 hover:text-primary transition">
            <AiFillInfoCircle className="sm:hidden text-2xl" />
            <span className="hidden sm:inline text-l">ABOUT</span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <DarkModeSwitch />
          <Link href="/" className="">
            <h2 className="text-2xl">
              <span className="font-bold bg-primary py-1 px-2 rounded-lg text-white">
                <span className={irishGrover.className}>M</span>ov<span className="text-secondary-100 text-lg">ish</span>
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </header>
  )
}

export default Header
