"use client";

import { Container } from "@/components/container";
import { PageNavigation } from "@/components/page-navigation";
import { Separator } from "@/components/ui/separator";
import { Hero } from "./_components/hero";
import { LatestProjects } from "./_components/latest-projects";
import { Reviews } from "./_components/reviews";
import { Services } from "./_components/services";
import { ScrollToSlide } from "./_components/scroll-to-slide";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Hero />
      <Separator className="my-10 h-[80px]" orientation="vertical" />
      <LatestProjects />
      <ScrollToSlide />
      <Services />
      <Reviews />
      <Container>
        <PageNavigation nextPageLabel="Projects" nextPageUrl="/projects" />
      </Container>
    </div>
  );
}
