"use client";
import { HorizontalInfinityScroll } from "@/components/horizontal-infinity-scroll";
import { reviews } from "@/config";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-20">
      <HorizontalInfinityScroll speed={20}>
        {reviews.map(({ comment, image, name, username }, index) => (
          <div
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
          </div>
        ))}
      </HorizontalInfinityScroll>
    </div>
  );
};

export default Page;
