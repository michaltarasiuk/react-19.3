import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function DemosLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <Link
        href="/"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "-ms-3 w-fit text-muted-foreground hover:bg-muted hover:text-foreground",
        })}
      >
        <ArrowLeftIcon data-icon="inline-start" />
        All demos
      </Link>

      {children}
    </div>
  );
}
