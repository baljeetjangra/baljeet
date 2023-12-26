import React from "react";
import ProjectCard from "./ProjectCard";
import { map } from "lodash";
import { projectsList } from "@/constants";

const ProjectList = () => {
  return (
    <ul className="my-10 list-none">
      {map(projectsList, (project: IProject) => (
        <ProjectCard {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
