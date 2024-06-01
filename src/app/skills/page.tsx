"use client";
import { Container } from "@/components/container";
import { HorizontalInfinityScroll } from "@/components/horizontal-infinity-scroll";
import { PageNavigation } from "@/components/page-navigation";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/config";
import Image from "next/image";
import { SkillList } from "./_components/skill-list";
const SkillsPage = () => {
  const frontendSkills = skills.filter((skill) => Boolean(skill.frontend));
  const backendSkills = skills.filter((skill) => Boolean(skill.backend));

  return (
    <div className="flex h-full flex-col">
      <Container className="grid gap-12 md:grid-cols-2">
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
      </Container>
      <Container elem="section" className="mt-24 p-0">
        <HorizontalInfinityScroll speed={40}>
          {skills.map(({ label, image }) => (
            <li
              key={label}
              className="flex min-w-[170px] flex-col items-center justify-center gap-3 rounded-lg border bg-card p-5 shadow-lg"
            >
              <p className="whitespace-nowrap">{label}</p>
              <Image src={image} alt={label} width={40} height={40} className="size-10 object-cover"/>
            </li>
          ))}
        </HorizontalInfinityScroll>
      </Container>
      <Container className="mt-10">
        <PageNavigation
          nextPageLabel="Contact"
          nextPageUrl="/contact"
          previousPageLabel="About"
          previousPageUrl="/about"
        />
      </Container>
    </div>
  );
};

export default SkillsPage;
