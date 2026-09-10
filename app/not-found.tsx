import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <div className="grid w-full items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8">
        <div className="flex max-w-xl flex-col gap-8">
          <header className="space-y-5">
            <h1 className="text-2xl leading-display font-semibold tracking-tight text-demo-ink sm:text-3xl">
              React 19.3
            </h1>
            <Separator className="max-w-16 bg-demo-accent/50" />
            <div className="space-y-3">
              <p className="text-lg font-medium tracking-tight text-demo-ink sm:text-xl">
                Page not found
              </p>
              <p className="max-w-md text-sm leading-relaxed text-demo-muted">
                That path isn&apos;t part of this release tour. Head home and
                pick a demo to try.
              </p>
            </div>
          </header>

          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "w-fit border-demo-line bg-demo-surface/80 text-demo-ink hover:bg-demo-wash hover:text-demo-ink",
            })}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            Back to demos
          </Link>
        </div>

        <p
          aria-hidden
          className="pointer-events-none select-none font-mono text-[clamp(5.5rem,18vw,9.5rem)] leading-none font-medium tracking-tighter text-demo-accent/30 lg:justify-self-end"
        >
          404
        </p>
      </div>
    </div>
  );
}
