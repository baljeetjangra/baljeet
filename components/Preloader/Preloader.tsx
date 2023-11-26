"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".lightCyan-slider", {
      x: "-10%",
      duration: 1,
    });

    tl.to(
      ".persianGreen-slider",
      {
        x: "-20%",
        duration: 1.5,
      },
      "-=1"
    );

    tl.to(
      ".white-slider",
      {
        x: "-30%",
        duration: 1.5,
      },
      "-=1"
    );
    tl.to(".preloader", {
      x: "200%",
      duration: 3,
    });
  }, []);

  return (
    <>
      <div
        id="loader"
        className="fixed top-0 left-0 w-full h-full bg-primary-900 opacity-100"
      >
        <div className="loader-content absolute top-1/2 left-1/2 w-[300px] h-[90px] overflow-hidden -translate-x-1/2 -translate-y-1/2">
          <div className="strip-loader w-full absolute top-0 left-0 ">
            <div className="strip relative h-[30px] bg-white w-0 "></div>
            <div className="strip relative h-[30px] bg-white w-0"></div>
            <div className="strip relative h-[30px] bg-white w-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
