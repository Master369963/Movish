"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-2xl hover:text-amber-500 transition"
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-2xl hover:text-amber-500 transition"
        >
          <MdDarkMode />
        </button>
      )}
    </>
  )
}

export default DarkModeSwitch
