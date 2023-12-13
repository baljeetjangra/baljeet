"use client";
import React, { useEffect } from "react";
import baffle from "baffle";

const TextScramble = ({ children }: { children: string }) => {
  useEffect(() => {
    const text = baffle(".main-subtitle");
    text.set({
      characters: "█▓▒░█▓▒░█▓▒░<>/",
      speed: 150,
    });
    setTimeout(() => {
      text.start();
      text.reveal(2000);
    }, 2000);
    return () => {};
  }, []);

  return (
    <h3
      itemProp="specialty"
      className="main-subtitle my-4 italic sm:text-lg md:text-xl lg:text-2xl"
    >
      {children}
    </h3>
  );
};

export default TextScramble;
