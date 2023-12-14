"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const TextLoadingOverlay = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.timeline().to(".text-loading-overlay", {
      duration: 0.3,
      delay: 2,
      translateX: "120%",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative inline-block overflow-hidden pr-7 pt-3">
      <div className="text-loading-overlay absolute inset-0 top-3 bg-black dark:bg-white"></div>
      {children}
    </div>
  );
};

export default TextLoadingOverlay;
