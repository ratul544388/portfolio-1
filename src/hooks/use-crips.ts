"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const useCrisp = () => {
  useEffect(() => {
    Crisp.configure("9ed0fbbc-ff1f-434b-b619-053d6534da47", {
      autoload: false,
    });
    //@ts-ignore
    Crisp.setColorTheme("orange");
  }, []);
};
