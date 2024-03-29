import React from "react";
import AnimatedButton from "../AnimatedButton";

const ProjectCard = ({
  title,
  description,
  backgroundImg,
  projectUrl,
  sourceCodeUrl,
}: IProject) => {
  return (
    <li className="mb-20">
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
        className={`before:z-2 before:content-[' '] group relative mx-auto block h-[200px] w-full overflow-hidden  bg-cover shadow-xl transition-all duration-300 ease-in before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:bg-black before:opacity-60 md:h-[480px] lg:w-2/3`}
      >
        {/* Hover Mask */}
        <div className="after:content-[' '] absolute -left-full top-0 z-0 h-full w-full overflow-hidden bg-gradient-to-tr from-primary to-primary-900 transition-all duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full group-hover:left-0 "></div>

        {/* Text Section */}
        <div className="absolute left-6 top-1/3 text-white transition-all duration-300 group-hover:scale-110 md:left-12 md:top-1/3 lg:left-24">
          <h3 className="text-lg font-bold md:mb-4 md:text-5xl">{title}</h3>
          <h5 className="mb-2 text-xs italic md:mb-4 md:text-xl">
            {description}
          </h5>
          <div className="flex flex-col gap-4">
            <a href={projectUrl} target="_blank" rel="noreferrer">
              <AnimatedButton title="View Project" />
            </a>
            <a href={sourceCodeUrl} target="_blank" rel="noreferrer">
              <AnimatedButton title="View Source Code" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
