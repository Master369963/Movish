"use client"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-third-300 dark:text-gray-200 text-gray-700 transition-color min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers
