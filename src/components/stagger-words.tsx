"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StaggerWords extends React.HTMLAttributes<HTMLElement> {
  children: string;
  highlights?: string[];
  className?: string;
}

export const StaggerWords = ({
  children,
  highlights,
  className,
}: StaggerWords) => {
  return (
    <motion.span
      className={cn("flex w-fit flex-wrap", className)}
      aria-hidden="true"
    >
      {children?.split(" ").map((word, index) => {
        return (
          <span
            key={index}
            className={cn(
              "inline-block",
              highlights?.includes(word) && "text-primary",
            )}
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  initial="initial"
                  whileInView="animate"
                  key={index}
                >
                  {char}
                </motion.span>
              );
            })}
            <span>&nbsp;</span>
          </span>
        );
      })}
    </motion.span>
  );
};
