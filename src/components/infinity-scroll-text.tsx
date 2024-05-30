"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface InfinityScrollTextProps {
  text: string;
}

export const InfinityScrollText = ({ text }: InfinityScrollTextProps) => {
  const animation = useAnimation();

  return (
    <div className="w-full overflow-hidden">
      <motion.h1
        variants={{
          left: { x: "-100%" },
          right: { x: "100%" },
          reset: { x: "0%", transition: { duration: 0.00001 } },
        }}
        transition={{ duration: 5, ease: "linear" }}
        animate={animation}
        className="relative w-fit whitespace-nowrap text-8xl font-bold"
      >
        {text}
        &nbsp;
        <span className="absolute left-[100%] top-0">{text}</span>
      </motion.h1>
    </div>
  );
};
