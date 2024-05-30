import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { MotionButton } from "@/components/ui/motion-button";
import { Text } from "@/components/ui/text";
import { services } from "@/config";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { StaggerWords } from "@/components/stagger-words";
import { WhileInView } from "@/components/while-in-view";

export const Services = () => {
  return (
    <WhileInView className="w-full">
      <Container className="mt-28 flex w-full flex-col items-center gap-14 xl:flex-row">
        <div className="flex flex-col items-center xl:translate-x-[5rem] xl:items-start">
          <Text variant="h2">
            <StaggerWords highlights={["Services"]}>
              My Awesome Services
            </StaggerWords>
          </Text>
          <Text className="mt-3 text-center text-muted-foreground md:text-start">
            Elevate your online presence with our premium services. Let&apos;s
            turn your ideas into reality.
          </Text>
          <Link href="/ratuls-cv.pdf" className="mt-5">
            <MotionButton target="_blank" variant="gradient" className="w-fit">
              Download CV
              <MdOutlineFileDownload className="transition duration-300 ease-in-out group-hover:translate-y-1" />
            </MotionButton>
          </Link>
        </div>
        <div className="relative flex w-full flex-col gap-6 sm:pb-[500px]">
          {services.map((service, index) => (
            <ServiceCard
              {...service}
              key={service.title}
              className={cn(
                index === 0 &&
                  "mr-auto sm:absolute sm:left-1/2 sm:top-[70%] sm:-translate-x-[18rem] sm:-translate-y-[14rem]",
                index === 1 &&
                  "ml-auto sm:absolute  sm:left-1/2 sm:top-[70%] sm:-translate-y-[20rem] sm:translate-x-[2rem]",
                index === 2 &&
                  "mr-auto sm:absolute  sm:left-1/2 sm:top-[70%] sm:-translate-y-[5rem] sm:translate-x-0",
              )}
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
  return (
    <motion.div
      className={cn(
        "flex h-fit min-w-[250px] max-w-[250px] flex-col items-center justify-center rounded-xl border bg-card p-5 shadow-md",
        className,
      )}
    >
      <Image src={image} alt={`${title} Image`} height={40} width={40} />
      <h4 className="mt-1 font-medium">{title}</h4>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {description}
      </p>
      <MotionButton
        variant="outline"
        size="sm"
        className="mt-3 text-blue-500 hover:border-blue-500/50 hover:text-blue-500"
      >
        Read More
      </MotionButton>
    </motion.div>
  );
};
