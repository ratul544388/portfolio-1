"use client";

import { ProjectCard } from "../../app/projects/_components/project-card";

export const ProjectsSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCard.Skeleton key={index} />
      ))}
    </div>
  );
};
