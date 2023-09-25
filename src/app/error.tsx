"use client"

import { useEffect } from "react"

const Error = ({error, reset}) => {
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()} className="hover:text-amber-500 border border-gray-400 bg-gray-400 text-black">Try again</button>
    </div>
  )
}

export default Error