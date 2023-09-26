"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong!</h1>
      <button
        onClick={() => reset()}
        className="mt-2 rounded-xl bg-secondary-200 px-4 py-1 text-white hover:text-black"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
