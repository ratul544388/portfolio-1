import { BackgroundLight } from "@/components/background-light";
import { ChatPlugin } from "@/components/chat-plugin";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fonts } from "@/fonts";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Portfolio, Ratul Hossain",
  description: "Hello there, welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-purple-900/10 scrollbar-thumb-purple-500"
    >
      <body className={cn(fonts, "font-primary")}>
        <Header />
        <SmoothScrollProvider>
          <main className="min-h-screen pt-5">{children}</main>
        </SmoothScrollProvider>
        <Footer />
        <ModalProvider />
        <ChatPlugin />
        <BackgroundLight />
      </body>
    </html>
  );
}
