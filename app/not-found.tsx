import Link from "next/link";
import { FileQuestionIcon, HomeIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <Empty className="border border-dashed border-demo-line bg-demo-surface/80">
        <EmptyHeader>
          <EmptyMedia variant="icon" className="bg-demo-wash text-demo-accent">
            <FileQuestionIcon />
          </EmptyMedia>
          <EmptyTitle className="text-base text-demo-ink sm:text-lg">
            404 — Page not found
          </EmptyTitle>
          <EmptyDescription className="text-demo-muted">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Head back home to browse the React 19.3 demos.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            <HomeIcon data-icon="inline-start" />
            Back to home
          </Link>
        </EmptyContent>
      </Empty>
    </div>
  );
}
