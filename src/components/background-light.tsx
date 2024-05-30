"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
export const BackgroundLight = () => {
  const COLORS = ["#a121fc", "#ce84cf", "#1e67c6", "#dd335c"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, black 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 -z-20"
    />
  );
};
