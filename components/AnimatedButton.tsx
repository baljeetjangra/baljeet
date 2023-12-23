import React from "react";
import { Button } from "./ui/button";
import Path from "./Svgs/Path";

const AnimatedButton = ({ title }: { title: string }) => {
  return (
    <Button className="the-button group relative z-10 rounded-none bg-gradient-to-tr from-secondary to-secondary-900 px-6 font-bold tracking-wider dark:text-white">
      <span className="z-20">{title}</span>
      <div className="button-mask"></div>
      <div className="absolute -right-4 top-1 z-20 transition-transform group-hover:translate-x-[6px]">
        <Path />
      </div>
    </Button>
  );
};

export default AnimatedButton;
