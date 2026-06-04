// This layout wraps all pages with the navbar and footer.
// It keeps the website design consistent on every page.

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("cyrus-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cyrus-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="theme-shell min-h-screen transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-7xl bg-slate-100 px-4 py-6 dark:bg-slate-950 md:px-6">
        <Outlet />
      </main>
      <footer
        className="border-t border-slate-200 bg-slate-100 py-6 text-center text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400"
      >
        Gaming E-commerce • Built for learning React and Redux.
      </footer>
    </div>
  );
}

export default Layout;
