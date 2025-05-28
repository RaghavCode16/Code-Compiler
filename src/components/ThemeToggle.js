// src/components/ThemeToggle.js
import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        bg-gray-200 dark:bg-gray-700
        text-gray-800 dark:text-gray-100
        px-4 py-2 rounded-full
        text-sm font-medium
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        flex items-center justify-center
        w-12 h-12
      "
    >
      {theme === "dark" ? " 💡 " : "🌙"}
    </button>
  );
};

export default ThemeToggle;
