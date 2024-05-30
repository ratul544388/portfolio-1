"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import nature1 from "@/../public/nature/1.jpg";
import nature2 from "@/../public/nature/2.jpg";
import nature3 from "@/../public/nature/3.jpg";

import { useRef } from "react";
import { WhileInView } from "@/components/while-in-view";
export const ScrollToSlide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  return (
    <WhileInView y={30} className="mt-20 space-y-3">
      <Slide
        left="-20%"
        progress={scrollYProgress}
        direction={-1}
        src={nature1}
      />
      <Slide
        left="-10%"
        progress={scrollYProgress}
        direction={1}
        src={nature2}
      />
      <Slide
        left="-25%"
        progress={scrollYProgress}
        direction={-1}
        src={nature3}
      />
    </WhileInView>
  );
};

const Slide = ({
  left,
  progress,
  direction,
  src,
}: {
  left: string;
  progress: MotionValue<number>;
  direction: number;
  src: StaticImageData;
}) => {
  const x = useTransform(progress, [0, 1], [-250 * direction, 250 * direction]);
  return (
    <motion.div style={{ left, x }} className="relative flex overflow-hidden">
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <Image
          src={src}
          alt="nature"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <p className="whitespace-nowrap pr-5 text-[8vw] font-semibold">
        Full Stack Web Developer
      </p>
    </div>
  );
};
