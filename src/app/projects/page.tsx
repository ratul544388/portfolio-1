"use client";

import { ProjectList } from "@/app/projects/_components/project-list";
import { Container } from "@/components/container";
import { PageNavigation } from "@/components/page-navigation";
import { ProjectCategories } from "@/components/project-categories";
import { tags } from "@/config";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeTag, setActiveTag] =
    useState<(typeof tags)[number]>("all projects");

  return (
    <Container className="flex h-full flex-col items-center">
      <ProjectCategories active={activeTag} setActive={setActiveTag} />
      <ProjectList activeTag={activeTag} />
      <PageNavigation
        nextPageLabel="About"
        nextPageUrl="/about"
        previousPageLabel="Home"
        previousPageUrl="/"
      />
    </Container>
  );
};

export default ProjectsPage;
