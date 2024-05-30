"use client";

import { navLinks } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className={cn("hidden md:flex")}>
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            href={href}
            key={label}
            className={cn(
              "flex items-center gap-4 rounded-md px-3 py-1 font-medium text-muted-foreground transition duration-300 hover:text-foreground",
              isActive && "text-foreground",
            )}
          >
            <span className="relative">
              {label}
              <motion.span
                variants={{
                  initial: {
                    width: 0,
                  },
                  animate: {
                    width: "100%",
                  },
                }}
                initial="initial"
                animate={isActive ? "animate" : "initial"}
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-purple-500"
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
