"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      setCurrentTheme(theme);
      window.localStorage.setItem("portfolio-theme", theme);
    }
  }, [theme]);

  if (!mounted) return null;

  const nextTheme = currentTheme === "light" ? "dark" : "light";
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => {
        setTheme(nextTheme);
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
