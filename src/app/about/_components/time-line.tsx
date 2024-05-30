import { StaggerWords } from "@/components/stagger-words";
import { Text } from "@/components/ui/text";
import { WhileInView } from "@/components/while-in-view";
import { experiences } from "@/config";
import { cn } from "@/lib/utils";
import { useWindowSize } from "usehooks-ts";

export const TimeLine = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      <Text variant="h2">
        <StaggerWords highlights={["Experience"]}>My Experience</StaggerWords>
      </Text>
      <ul className="mt-8 space-y-20 lg:translate-x-[calc(50%_-_30px)]">
        {experiences.map((experience, index) => (
          <TimeLineItem
            index={index}
            key={experience.title}
            experience={experience}
          />
        ))}
      </ul>
    </section>
  );
};

const TimeLineItem = ({
  experience: { icon: Icon, date, description, location, title },
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) => {
  const even = index % 2 !== 0;
  const { width } = useWindowSize();
  const lg = width >= 1024;
  return (
    <div
      className={cn(
        "flex gap-6",
        even && "lg:-translate-x-[calc(100%_-_211px)] lg:flex-row-reverse",
      )}
    >
      <WhileInView y={0} x={even ? 100 : -100} className="hidden lg:block">
        <p>{date}</p>
      </WhileInView>
      <WhileInView className="relative flex flex-col items-center">
        <div className="grid size-10 min-h-10 place-content-center rounded-full bg-card">
          <Icon className="size-4 text-primary" />
        </div>
        <span className="absolute top-10 h-[calc(100%_+_10px)] w-1.5 rounded-b-full border-t-0 bg-card" />
      </WhileInView>
      <WhileInView
        y={0}
        x={lg && even ? -100 : 100}
        className="relative max-w-[400px] rounded-md bg-card p-5"
      >
        <span
          className={cn(
            "absolute left-0 top-3 size-4 -translate-x-[52%] rotate-45 border-r-0 border-t-0 bg-card backdrop-blur-xl",
            even && "lg:left-full lg:rotate-[225deg]",
          )}
        />
        <Text variant="h3">{title}</Text>
        <p>{location}</p>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <p className="mt-3 text-sm text-muted-foreground">{date}</p>
      </WhileInView>
    </div>
  );
};
