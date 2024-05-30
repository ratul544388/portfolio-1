"use client";
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import { Container } from "@/components/container";
import { PageNavigation } from "@/components/page-navigation";
import { SectionHeading } from "@/components/section-heading";
import { CarouselItem } from "@/components/ui/carousel";
import { skills } from "@/config";
import Image from "next/image";
import { SkillList } from "./_components/skill-list";
const SkillsPage = () => {
  const frontendSkills = skills.filter((skill) => Boolean(skill.frontend));
  const backendSkills = skills.filter((skill) => Boolean(skill.backend));

  return (
    <Container className="flex h-full flex-col">
      <div className="grid gap-12 md:grid-cols-2">
        <section className="flex flex-col gap-4">
          <SectionHeading>Frontend</SectionHeading>
          {frontendSkills.map(({ label, skillPercentage }) => (
            <SkillList label={label} percent={skillPercentage} key={label} />
          ))}
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeading>Backend</SectionHeading>
          {backendSkills.map(({ label, skillPercentage }) => (
            <SkillList label={label} percent={skillPercentage} key={label} />
          ))}
        </section>
      </div>
      <section className="mt-10">
        <AutoScrollCarousel>
          {skills.map(({ label, image }) => (
            <CarouselItem
              key={label}
              className="mr-6 bg-card flex max-w-[170px] flex-col items-center justify-center gap-3 rounded-lg border p-5 shadow-lg"
            >
              {label}
              <Image src={image} alt={label} width={40} height={40} />
            </CarouselItem>
          ))}
        </AutoScrollCarousel>
      </section>
      <PageNavigation
        nextPageLabel="Contact"
        nextPageUrl="/contact"
        previousPageLabel="About"
        previousPageUrl="/about"
      />
    </Container>
  );
};

export default SkillsPage;
