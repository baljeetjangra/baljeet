"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({});

    const animationSpeed = 1;

    tl.to("#loader", {
      x: "100%",
      delay: animationSpeed,
      duration: animationSpeed,
    });
    tl.to(".strip-loader", {
      opacity: 0,
      duration: 0.2 * animationSpeed,
      delay: -1.2 * animationSpeed,
    });
    tl.to("#loader-after", {
      left: 0,
      duration: 0.5 * animationSpeed,
      delay: -1.2 * animationSpeed,
    }).to("#loader-after", {
      opacity: 0,
      duration: 0.3 * animationSpeed,
      ease: "ease-out",
    });
    tl.to("#loader", {
      display: "none",
    }).to("#loader-after", {
      display: "none",
    });
  }, []);

  return (
    <>
      <div
        id="loader"
        className="fixed left-0 top-0 z-50 h-full w-full bg-primary-900 opacity-100"
      >
        <div className="loader-content absolute left-1/2 top-1/2 h-[90px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="strip-loader absolute left-0 top-0 w-full">
            <div className="strip relative h-[30px] w-0 bg-white "></div>
            <div className="strip relative h-[30px] w-0 bg-white"></div>
            <div className="strip relative h-[30px] w-0 bg-white"></div>
          </div>
        </div>
      </div>
      <div
        id="loader-after"
        className="opacity-1 fixed -left-full top-0 z-50 h-full w-full bg-black"
      ></div>
    </>
  );
};

export default Preloader;
