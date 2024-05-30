import { navLinks } from "@/config";
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const animate = open ? "open" : "closed";
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="group relative z-[100] flex size-10 items-center justify-center md:hidden"
      >
        <MotionConfig
          transition={{ duration: 0.3, easings: ["0.83, 0, 0.17, 1"] }}
        >
          <motion.span
            variants={{
              closed: {
                top: "27%",
                rotate: 0,
              },
              open: {
                top: "46%",
                rotate: 45,
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
          <motion.span
            variants={{
              closed: {
                top: "46%",
                opacity: 1,
                x: 0,
              },
              open: {
                top: "46%",
                opacity: 0,
                x: "100%",
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
          <motion.span
            variants={{
              closed: {
                top: "65%",
                rotate: 0,
              },
              open: {
                top: "46%",
                rotate: -45,
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-[0.2rem] w-[60%] rounded-full bg-gray-300 transition-colors duration-1000 group-hover:bg-foreground"
          />
        </MotionConfig>
      </motion.button>
      <motion.div
        variants={{
          closed: { height: 0 },
          open: { height: "100dvh" },
        }}
        initial="closed"
        animate={animate}
        className="absolute left-0 top-0 z-50 w-full overflow-hidden bg-background/95 md:hidden"
      >
        <nav className="h-full">
          <ul className="flex h-full flex-col justify-center pb-20">
            {navLinks.map(({ href, label, icon: Icon }, index) => {
              const active = pathname === href;
              return (
                <motion.li
                  variants={{
                    open: { opacity: 1 },
                    closed: { opacity: 0 },
                  }}
                  transition={{ delay: 0.1 * index }}
                  key={label}
                  className="relative overflow-hidden"
                >
                  <Link
                    onClick={handleClose}
                    href={href}
                    className={cn(
                      "flex items-center px-8 w-fit py-3.5 text-4xl font-medium text-gray-400 transition-all duration-1000 ease-in-out hover:text-foreground",
                      active && "text-primary hover:text-primary",
                    )}
                  >
                    <Icon className="size-9 mr-5" />
                    {label}
                    {active && <span>/</span>}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};
