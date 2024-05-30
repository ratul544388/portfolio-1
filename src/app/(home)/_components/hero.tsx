"use client";
import { Container } from "@/components/container";
import { StaggerWords } from "@/components/stagger-words";
import { MotionButton } from "@/components/ui/motion-button";
import { Text } from "@/components/ui/text";
import { motion } from "framer-motion";
import { myGithubLink } from "@/config";
import Link from "next/link";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <Container
      elem="section"
      className="flex h-[calc(100vh_-_60px)] max-h-[500px] max-w-[900px] flex-col items-center justify-center"
    >
      <Text variant="h1" className="text-center">
        <StaggerWords
          highlights={["Ratul", "Hossain"]}
          className="justify-center"
        >
          Hi, I&apos;m Ratul Hossain
        </StaggerWords>
      </Text>
      <motion.div
        className="opacity-0"
        animate={{ opacity: [0, 1], y: [-15, 0], transition: { delay: 0.2 } }}
      >
        <Text className="mt-5 text-center text-lg text-muted-foreground">
          I&apos;m a&nbsp;
          <span className="font-semibold">full stack web developer</span> . My
          main focus is building websites using{" "}
          <Link
            target="_blank"
            href="https://react.dev"
            className="font-semibold text-foreground underline"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            href="https://nextjs.org/"
            className="font-semibold text-foreground underline"
          >
            Next.js.
          </Link>
        </Text>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [0, 1], transition: { delay: 0.3 } }}
        className="mt-6 flex justify-center gap-6 opacity-0"
      >
        <MotionButton href="/contact">
          Contact me
          <FaLongArrowAltRight className="h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
        </MotionButton>
        <MotionButton
          href={myGithubLink}
          className="border-2"
          variant="secondary"
          target="_blank"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </MotionButton>
      </motion.div>
    </Container>
  );
};
