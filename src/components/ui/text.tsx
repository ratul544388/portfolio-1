"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      p: "font-secondary",
      h1: "font-medium text-5xl sm:text-6xl lg:text-7xl",
      h2: "text-3xl sm:text-4xl lg:text-5xl",
      h3: "text-lg lg:text-xl",
    },
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}

export const Text = ({ className, children, variant }: TextProps) => {
  const Element = variant || "p";
  return (
    <Element className={cn(textVariants({ variant, className }))}>
      {children}
    </Element>
  );
};
