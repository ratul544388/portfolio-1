"use client";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useModalStore } from "@/hooks/use-modal-store";
import { useCallback } from "react";

import { IoEarthSharp } from "react-icons/io5";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TechnologyList } from "./technology-list";
import { MotionButton } from "./ui/motion-button";
import { Separator } from "./ui/separator";
import { Text } from "./ui/text";

export const ProjectDrawer = () => {
  const { isOpen, type, data, onClose } = useModalStore();
  const open = isOpen && type === "projectDrawer";

  const { project } = data;

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClose();
      }
    },
    [onClose],
  );

  if (!project) return;

  const {
    name,
    images,
    deployedLink,
    features,
    githubLink,
    tags,
    technologies,
  } = project;

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="focus:outline-none">
        <div className="max-h-[80vh] w-full overflow-y-auto scrollbar-thin">
          <div className="mx-auto grid max-w-screen-2xl gap-8 p-5 scrollbar-thin sm:px-10 md:grid-cols-2">
            <Carousel className="relative aspect-video w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative mx-auto aspect-video w-full">
                      <Image
                        src={image}
                        alt={`${name}-${index + 1}-photo`}
                        className="rounded-md object-cover"
                        fill
                        placeholder="blur"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-background" />
              <CarouselNext className="absolute right-0 bg-background" />
            </Carousel>
            <div className="">
              <Text variant="h3">{name}</Text>
              <TechnologyList
                technologies={technologies}
                className="mt-5 flex-wrap"
              />
              <div className="mt-5 flex gap-5">
                <MotionButton href={githubLink} variant="secondary" size="lg">
                  Github
                  <FaGithub className="size-4" />
                </MotionButton>
                <MotionButton href={deployedLink} size="lg">
                  Live
                  <IoEarthSharp className="size-4" />
                </MotionButton>
              </div>
              <Separator className="my-4" />
              <ol className="flex list-inside flex-col space-y-2">
                {features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span>{index + 1}.</span>
                    {feature}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
