"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface WhileInViewProps {
  children: ReactNode;
  className?: string;
  elem?: "div" | "section";
  x?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  duration?: number;
}

export const WhileInView = ({
  children,
  className,
  elem = "section",
  x = 0,
  y = 30,
  scale = 1,
  once = false,
  duration = 0.5,
}: WhileInViewProps) => {
  const Motion = motion[elem];
  return (
    <Motion
      whileInView={{
        opacity: [0, 1],
        y: [y, 1],
        x: [x, 1],
        scale: [scale, 1],
        transition: { duration },
      }}
      viewport={{ once }}
      className={cn("opacity-0", className)}
    >
      {children}
    </Motion>
  );
};
