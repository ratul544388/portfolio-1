"use client";

import { cn } from "@/lib/utils";

interface TechnologyListProps {
  technologies: string[];
  className?: string;
}

export const TechnologyList = ({
  technologies,
  className,
}: TechnologyListProps) => {
  return (
    <ul
      className={cn(
        "flex w-full gap-3 overflow-x-auto text-ellipsis whitespace-nowrap scrollbar-none",
        className,
      )}
    >
      {technologies.map((item) => (
        <li key={item} className="rounded-full border px-4 py-1.5 text-xs">
          {item}
        </li>
      ))}
    </ul>
  );
};
