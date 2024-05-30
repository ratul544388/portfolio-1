"use client";

import { tags } from "@/config";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ProjectCategories = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (tag: (typeof tags)[number]) => void;
}) => {
  return (
    <ul className="flex w-full items-center gap-3 overflow-x-auto scrollbar-none">
      {tags.map((tag) => {
        const isActive = active === tag;
        return (
          <Button
            onClick={() => setActive(tag)}
            key={tag}
            variant="outline"
            size="sm"
            className={cn(
              "relative shadow-none capitalize",
              isActive && "hover:bg-transparent",
            )}
          >
            {tag}
            {isActive && (
              <motion.span
                layoutId="activeProject"
                style={{ borderRadius: "20px" }}
                className="absolute inset-0 -z-10 bg-primary"
              />
            )}
          </Button>
        );
      })}
    </ul>
  );
};
