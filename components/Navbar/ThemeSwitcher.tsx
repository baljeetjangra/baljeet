"use client";
import { useTheme } from "next-themes";
import React from "react";
import { RxMoon, RxSun } from "react-icons/rx";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    // Toggle the theme
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <RxSun
          className="cursor-pointer hover:animate-spin"
          onClick={handleClick}
        />
      ) : (
        <RxMoon
          className="cursor-pointer transition-all duration-300 ease-in-out repeat-infinite hover:animate-pulse "
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;
