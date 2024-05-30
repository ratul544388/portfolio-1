import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { WhileInView } from "./while-in-view";

interface PageNavigationProps {
  nextPageLabel?: string;
  previousPageLabel?: string;
  nextPageUrl?: string;
  previousPageUrl?: string;
}

export const PageNavigation = ({
  nextPageLabel,
  previousPageLabel,
  nextPageUrl,
  previousPageUrl,
}: PageNavigationProps) => {
  return (
    <WhileInView className="mx-auto mt-12 flex w-full max-w-[900px] flex-col items-center justify-between gap-x-12 gap-y-6 sm:flex-row">
      {previousPageUrl && (
        <Link
          href={previousPageUrl}
          className="mx-auto flex w-full max-w-[500px] items-center justify-between rounded-lg border bg-card px-4 py-3 shadow-sm hover:bg-card/90"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <div>
            <p className="text-lg font-medium">Previous</p>
            <p className="text-sm text-muted-foreground">{previousPageLabel}</p>
          </div>
        </Link>
      )}
      {nextPageUrl && (
        <Link
          href={nextPageUrl}
          role="button"
          className="mx-auto flex w-full max-w-[500px] items-center justify-between rounded-lg border bg-card px-4 py-3 shadow-sm hover:bg-card/90"
        >
          <div>
            <p className="text-lg font-medium">Next</p>
            <p className="text-sm text-muted-foreground">{nextPageLabel}</p>
          </div>
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      )}
    </WhileInView>
  );
};
