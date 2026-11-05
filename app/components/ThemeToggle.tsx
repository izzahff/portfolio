"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function current(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "dark" || set === "light") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(current()), []);

  function flip() {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button type="button" className="theme" onClick={flip} aria-pressed={theme === "dark"}>
      {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    </button>
  );
}
