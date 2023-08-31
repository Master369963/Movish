import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/header/Header"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
