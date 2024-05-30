"use client";

import { socialIcons } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const MotionLink = motion(Link);

  return (
    <footer className="wavy-shape mt-32 bg-gradient-to-r from-blue-500/60 via-indigo-600/60 to-purple-600/60">
      <div className="flex flex-col items-center gap-2 px-5 py-8 pt-20 shadow-[0_-3px_10px_rgba(0,0,0,0.2)]">
        <nav className="mt-1 flex">
          {socialIcons.map(({ icon: Icon, href }, i) => (
            <MotionLink
              target="_blank"
              whileTap={{
                scale: 1.05,
              }}
              key={i}
              className="p-2"
              href={href}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
            >
              <Icon className="h-5 w-5" />
            </MotionLink>
          ))}
        </nav>
        <p className="text-center text-sm text-slate-400 dark:text-gray-500">
          Inspiring through design, code, and creativity. Let&apos;s collaborate
          and make magic happen! © Ratul Hossain - 2024
        </p>
      </div>
    </footer>
  );
};
