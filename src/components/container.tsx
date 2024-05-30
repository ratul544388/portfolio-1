import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  elem?: "div" | "section" | "main" | "header";
}

export const Container = ({
  children,
  className,
  elem: Elem = "div",
}: ContainerProps) => {
  return (
    <Elem className={cn("mx-auto w-full max-w-screen-2xl px-6", className)}>
      {children}
    </Elem>
  );
};
