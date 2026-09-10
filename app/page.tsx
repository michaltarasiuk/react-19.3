import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

export default function Home() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <header className="max-w-xl space-y-2">
        <h1 className="text-2xl leading-display font-semibold tracking-tight text-foreground sm:text-3xl">
          React 19.3
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Interactive demos for Suspense, ViewTransition, Fragment Refs,
          browser, and the other React 19.3 APIs.
        </p>
      </header>

      <ItemGroup className="max-w-xl">
        <Item
          variant="outline"
          className="border-border bg-card/80 hover:bg-muted"
          render={<Link href="/view-transition" />}
        >
          <ItemContent>
            <ItemTitle className="text-foreground">View Transition</ItemTitle>
            <ItemDescription className="text-muted-foreground">
              Keep the skeleton visible until data, stylesheet, font, and image
              are ready, so the card appears complete.
            </ItemDescription>
          </ItemContent>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
        </Item>
      </ItemGroup>
    </div>
  );
}
