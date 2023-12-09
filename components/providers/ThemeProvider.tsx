"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [title, setTitle] = React.useState(
    "Baljeet Jangra - Frontend Developer"
  );

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = !document.hidden
        ? "Baljeet Jangra - Frontend Developer"
        : "Be sure to check out my portfolio! :p";
    };

    // Set the initial document title
    document.title = title;

    // Add event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [title]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
