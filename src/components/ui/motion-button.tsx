"use client";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, buttonVariants } from "./button";

interface MotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  whileHoverScale?: number;
  target?: "_blank" | "";
}

export const MotionButton = ({
  variant,
  size,
  href,
  children,
  className,
  whileHoverScale = 1.03,
  target,
}: MotionButtonProps) => {
  const Comp = href ? motion(Link) : motion.button;

  return (
    <Comp
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: 1.06 }}
      href={href || ""}
      className={cn(
        "group gap-2",
        buttonVariants({ variant, size, className }),
      )}
      target={target}
    >
      {children}
    </Comp>
  );
};
