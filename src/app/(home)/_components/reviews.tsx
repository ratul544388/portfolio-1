import { Container } from "@/components/container";
import { HorizontalInfinityScroll } from "@/components/horizontal-infinity-scroll";
import { StaggerWords } from "@/components/stagger-words";
import { Text } from "@/components/ui/text";
import { WhileInView } from "@/components/while-in-view";
import { reviews } from "@/config";
import Image from "next/image";

export const Reviews = () => {
  return (
    <WhileInView>
      <Container className="mt-14 flex w-full flex-col items-center">
        <Text variant="h2">
          <StaggerWords highlights={["Reviews"]}>Reviews</StaggerWords>
        </Text>
        <HorizontalInfinityScroll
          speed={20}
          className="mt-10"
        >
          {reviews.map(({ comment, image, name, username }, index) => (
            <li
              key={index}
              className="min-w-[300px] space-y-3 rounded-md bg-card p-5"
            >
              <div className="flex gap-3">
                <Image
                  src={image}
                  alt={`Review by - ${name}`}
                  width={40}
                  height={40}
                  placeholder="blur"
                  className="max-h-10 rounded-full object-cover"
                />
                <div className="text-sm">
                  <h6 className="font-medium">{name}</h6>
                  <p className="text-muted-foreground">@{username}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{comment}</p>
            </li>
          ))}
        </HorizontalInfinityScroll>
      </Container>
    </WhileInView>
  );
};
