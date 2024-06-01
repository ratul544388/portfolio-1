import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { MotionButton } from "@/components/ui/motion-button";
import { Text } from "@/components/ui/text";
import { services } from "@/config";
import { MdOutlineClose, MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { StaggerWords } from "@/components/stagger-words";
import { WhileInView } from "@/components/while-in-view";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  return (
    <WhileInView className="w-full">
      <Container className="mt-28 flex w-full flex-col items-center gap-14">
        <div className="flex flex-col items-center">
          <Text variant="h2">
            <StaggerWords highlights={["Services"]}>
              My Awesome Services
            </StaggerWords>
          </Text>
          <Text className="mt-3 text-center text-muted-foreground md:text-start">
            Elevate your online presence with our premium services. Let&apos;s
            turn your ideas into reality.
          </Text>
          <Link href="/ratul.cv.pdf" className="mt-5">
            <MotionButton target="_blank" variant="gradient" className="w-fit">
              Download CV
              <MdOutlineFileDownload className="transition duration-300 ease-in-out group-hover:translate-y-1" />
            </MotionButton>
          </Link>
        </div>
        <div className="grid w-full max-w-[550px] gap-12 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              {...service}
              key={service.title}
              className={cn("odd:ml-auto sm:first:row-span-2 sm:first:my-auto")}
            />
          ))}
        </div>
      </Container>
    </WhileInView>
  );
};

const ServiceCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  const [isFilpped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFilpped);
  };

  return (
    <motion.div
      className={cn(
        "group flex h-fit min-w-[250px] max-w-[250px] [perspective:1000px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex-col items-center justify-center rounded-lg border bg-card p-5 shadow-md transition-all duration-1000 ease-in-out [transform-style:preserve-3d]",
          isFilpped && "[transform:rotateY(180deg)]",
        )}
      >
        <div className="flex flex-col items-center [backface-visibility:hidden]">
          <Image src={image} alt={`${title} Image`} height={40} width={40} />
          <h4 className="mt-1 font-medium">{title}</h4>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <MotionButton
            onClick={handleFlip}
            variant="outline"
            size="xs"
            className="mt-3 border-none text-primary ring-1 ring-border hover:text-primary hover:ring-primary"
          >
            Read More
          </MotionButton>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-between overflow-y-auto text-sm text-muted-foreground scrollbar-thin [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="p-5 flex flex-col">
            <Button
              onClick={handleFlip}
              size="icon"
              variant="ghost"
              className="sticky z-20 top-5 -translate-x-5 -translate-y-5"
            >
              <MdOutlineClose className="size-4" />
            </Button>
            <p className="-translate-y-6">{description}</p>
            <MotionButton
              onClick={handleFlip}
              variant="outline"
              size="xs"
              className="border-none mx-auto text-primary ring-1 ring-border hover:text-primary hover:ring-primary"
            >
              Read Less
            </MotionButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
