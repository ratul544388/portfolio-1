"use client";

import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./ui/button";

interface TestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {

    }

export const TestButton = ({
    variant,
    className,
    
}: TestButtonProps) => {
  return <div>TestButton</div>;
};
