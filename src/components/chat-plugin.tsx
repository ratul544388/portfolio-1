"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";
export const ChatPlugin = () => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID!, {
      autoload: false,
    });
    Crisp.chat.show();
  }, []);

  return <div></div>;
};
