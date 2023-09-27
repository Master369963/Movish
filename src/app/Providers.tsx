"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="transition-color min-h-screen text-gray-700 dark:bg-third-300 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
