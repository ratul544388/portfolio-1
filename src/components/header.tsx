"use client";

import { Container } from "./container";
import { Logo } from "./logo";
import { MobileMenuButton } from "./mobile-menu-button";
import { NavLinks } from "./navLinks";
import { SocialIcons } from "./social-icons";

export const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[60px] backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <NavLinks />
        </div>
        <div className="flex items-center gap-6">
          <SocialIcons className="hidden md:flex" />
          <MobileMenuButton />
        </div>
      </Container>
    </header>
  );
};
