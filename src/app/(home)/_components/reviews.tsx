import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import { Container } from "@/components/container";
import { StaggerWords } from "@/components/stagger-words";
import { CarouselItem } from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { WhileInView } from "@/components/while-in-view";
import { reviews } from "@/config";
import Image from "next/image";

export const Reviews = () => {
  return (
    <WhileInView>
      <Container className="mt-14 flex w-full flex-col items-center gap-5">
        <Text variant="h2">
          <StaggerWords highlights={["Reviews"]}>Reviews</StaggerWords>
        </Text>
        <AutoScrollCarousel>
          {reviews.map(({ name, username, image, comment }) => (
            <CarouselItem
              key={name}
              className="mr-6 select-none max-w-[300px] xs:max-w-[450px] rounded-lg bg-card p-5 shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h3 className="font-medium leading-4">{name}</h3>
                  <p className="leading-4 text-muted-foreground">{username}</p>
                </div>
              </div>
              <p className="mt-3">{comment}</p>
            </CarouselItem>
          ))}
        </AutoScrollCarousel>
      </Container>
    </WhileInView>
  );
};
