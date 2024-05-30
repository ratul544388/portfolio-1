"use client";

import { StaggerWords } from "@/components/stagger-words";
import { buttonVariants } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Link from "next/link";

import { ProjectCard } from "@/app/projects/_components/project-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/config";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { WhileInView } from "@/components/while-in-view";

export const LatestProjects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setScrollSnaps(api.scrollSnapList());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotButtonClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  const latestProjects = projects.slice(0, 5);

  return (
    <WhileInView
      // once
      className="mt-28 flex w-full flex-col items-center gap-12 overflow-hidden px-6 lg:flex-row lg:px-0 lg:pl-8"
    >
      <div className="flex flex-col gap-3">
        <Text variant="h2">
          <StaggerWords highlights={["Projects"]} className="flex-nowrap">
            Latest Projects
          </StaggerWords>
        </Text>
        <Link href="/projects" className={buttonVariants({ variant: "link" })}>
          Explore all
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {latestProjects.map((project) => (
              <CarouselItem
                key={project.name}
                className="sm:basis-1/2 xl:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <ul className="flex gap-2">
          {scrollSnaps.map((_, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => handleDotButtonClick(index)}
                  key={index}
                  className={cn(
                    "size-3 rounded-full bg-neutral-800 mix-blend-difference",
                    selectedIndex === index && "ring ring-primary",
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </WhileInView>
  );
};
