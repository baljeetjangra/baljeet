import React from "react";
import AnimatedButton from "../AnimatedButton";

const ProjectCard = () => {
  return (
    <li className="mb-20">
      {" "}
      <a
        href="https://query-overflow.vercel.app/"
        target="_blank"
        className="before:z-2 before:content-[' '] group relative mx-auto block h-[480px] w-2/3 bg-query-overflow bg-cover shadow-xl transition-all duration-300 ease-in before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:bg-black before:opacity-60 "
      >
        {/* Hover Mask */}
        <div className="after:content-[' '] absolute -left-full top-0 z-0 h-full w-full overflow-hidden bg-gradient-to-tr from-primary to-primary-900 transition-all duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full group-hover:left-0 "></div>

        {/* Text Section */}
        <div className="absolute left-24 top-1/2 text-white transition-all duration-300 group-hover:scale-110">
          <h3 className="mb-4 text-5xl font-bold">Query Overflow</h3>
          <h5 className="mb-4 text-xl italic">
            Unlocking Knowledge: Your Overflow for Expert Solutions
          </h5>
          <AnimatedButton title="View Project" />
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
