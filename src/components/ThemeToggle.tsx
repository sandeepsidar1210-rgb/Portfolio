"use client";

import React, { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light" || theme === "dark") setCurrentTheme(theme);
  }, []);

  if (!mounted) return null;

  const nextTheme = currentTheme === "light" ? "dark" : "light";
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => {
        document.documentElement.setAttribute("data-theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        window.localStorage.setItem("portfolio-theme", nextTheme);
        setCurrentTheme(nextTheme);
      }}
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden="true">{currentTheme === "dark" ? "☼" : "☾"}</span>
      {nextTheme === "dark" ? "Dark" : "Light"}
    </button>
  );
};
