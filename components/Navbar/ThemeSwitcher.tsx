"use client";
import gsap from "gsap";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const iconRef = useRef(null);

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
        <RxSun ref={iconRef} className="cursor-pointer" onClick={handleClick} />
      ) : (
        <RxMoon
          ref={iconRef}
          className="cursor-pointer"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;
