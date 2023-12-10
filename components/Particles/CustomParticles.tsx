"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useTheme } from "next-themes";
// import { loadBasic } from "@tsparticles/basic";

const CustomParticles = () => {
  const [init, setInit] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );
  return (
    init && (
      <Particles
        id="tsparticles"
        style={{
          zIndex: -100,
        }}
        particlesLoaded={particlesLoaded}
        options={{
          autoPlay: true,
          fpsLimit: 120,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          background: {},
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "push",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
              grab: {
                links: {
                  color: theme === "dark" ? "#ffffff" : "#000",
                },
              },
            },
          },
          particles: {
            color: { value: theme === "dark" ? "#ffffff" : "#000" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 150,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "random",
                count: 1,
                destroy: "none",
              },
              value: {
                min: 0,
                max: 0.5,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    )
  );
};

export default CustomParticles;
