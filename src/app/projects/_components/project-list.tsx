"use client";

import { projects, tags } from "@/config";
import { useMount } from "@/hooks/use-mount";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

interface ProjectsProps {
  activeTag?: (typeof tags)[number];
  className?: string;
}

export const ProjectList = ({
  activeTag = "all projects",
  className,
}: ProjectsProps) => {
  const isMounted = useMount();

  let filteredProjects = projects.filter((project) =>
    project.tags.some((tag) => tag === activeTag),
  );

  if (!filteredProjects.length) {
    filteredProjects = projects;
  }

  return (
    <section
      className={cn(
        "mt-5 grid w-full grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]",
        className,
      )}
    >
      {filteredProjects.map((project, index) => (
        <>
          {isMounted ? (
            <ProjectCard key={index} project={project} />
          ) : (
            <ProjectCard.Skeleton />
          )}
        </>
      ))}
    </section>
  );
};
