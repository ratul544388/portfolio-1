import { Noto_Sans, Libre_Baskerville, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--noto" });

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--libre",
});

export const fonts = `${notoSans.variable} ${libreBaskerville.variable}`;
