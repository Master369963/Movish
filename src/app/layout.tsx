import "./globals.css"
import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"
import Header from "../components/header/Header"
import Providers from "./Providers"
import Navbar from "@/components/navbar/Navbar"

const robotoFlex = Roboto_Flex({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "This is the IMDb clone website.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={robotoFlex.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
