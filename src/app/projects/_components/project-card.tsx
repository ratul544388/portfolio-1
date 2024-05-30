"use client";

import { TechnologyList } from "@/components/technology-list";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Text } from "@/components/ui/text";
import { projects } from "@/config";
import { useModalStore } from "@/hooks/use-modal-store";
import Image from "next/image";

interface ProjectCardProps {
  project: (typeof projects)[number];
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { onOpen } = useModalStore();
  return (
    <div
      onClick={() => onOpen("projectDrawer", { project })}
      style={{ borderRadius: "5px" }}
      role="button"
      className="overflow-hidden bg-card select-none"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <Text variant="h3" className="line-clamp-1">
          {project.name}
        </Text>
        <TechnologyList
          technologies={project.technologies}
          className="mt-3"
        />
      </div>
    </div>
  );
};

ProjectCard.Skeleton = function ProjectCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-card bg-card">
      <Skeleton className="aspect-video w-full" />
      <div className="w-full p-5">
        <Skeleton className="h-5 w-[80%]" />
        <div className="mt-4 flex gap-3 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-7 min-w-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};
