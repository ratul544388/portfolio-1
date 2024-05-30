"use client";

import { Container } from "@/components/container";
import { PageNavigation } from "@/components/page-navigation";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { AboutText } from "./_components/about-text";
import { TimeLine } from "./_components/time-line";

const AboutPage = () => {
  return (
    <Container className="flex h-full w-full flex-col items-center gap-6">
      <Text variant="h2" className="text-primary">
        About me
      </Text>
      <AboutText />
      <Separator className="h-[80px]" orientation="vertical" />
      <TimeLine/>
      <PageNavigation
        nextPageLabel="Skills"
        nextPageUrl="/skills"
        previousPageLabel="Projects"
        previousPageUrl="/projects"
      />
    </Container>
  );
};

export default AboutPage;
