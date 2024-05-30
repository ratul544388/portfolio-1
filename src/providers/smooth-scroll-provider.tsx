"use client";
import { useModalStore } from "@/hooks/use-modal-store";
import { ReactLenis } from "@studio-freight/react-lenis";

import { PropsWithChildren } from "react";

export const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  const { isOpen } = useModalStore();
  return <ReactLenis root={!isOpen}>{children}</ReactLenis>;
};
