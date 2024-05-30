"use client";

import Image7 from "@/../public/projects/calm-landing-page/1.png";
import Image1 from "@/../public/projects/digital-marketplace/1.png";
import Image5 from "@/../public/projects/ecommerce/1.png";
import Image6 from "@/../public/projects/gym/1.png";
import Image4 from "@/../public/projects/twitter/1.png";
import Image3 from "@/../public/projects/university-landing-page/1.png";
import Image2 from "@/../public/projects/waffles/1.png";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/button";

export const ParallaxProjects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6.5]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  const images = [
    {
      src: Image1,
      className: "w-[25vw] h-[25dvh] left-1/2 -translate-x-1/2",
      scale: scale1,
    },
    {
      src: Image2,
      className: "h-[35vh] w-[20vw] left-[12vw] top-[27.5vh]",
      scale: scale2,
    },
    {
      src: Image3,
      className: "top-[4vh] w-[40vw] h-[30vh] left-[36vw]",
      scale: scale3,
    },
    {
      src: Image4,
      className: "left-[65vw]",
      scale: scale4,
    },
    {
      src: Image5,
      className: "top-[67vh] left-[3vw] w-[33vw]",
      scale: scale5,
    },
    {
      src: Image6,
      className: "top-[67vh] left-[40vw] w-[20vw]",
      scale: scale6,
    },
    {
      src: Image7,
      className: "top-[67vh] left-[63vw] w-[15vw] h-[15vh]",
      scale: scale7,
    },
  ];

  return (
    <div ref={containerRef} className="mt-6 h-[300dvh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.map(({ src, className, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute flex h-full w-full items-center justify-center"
          >
            <div className={cn("absolute h-[25vh] w-[25vw]", className)}>
              <Image
                src={src}
                alt="project"
                fill
                quality={index === 0 ? 100 : 75}
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
