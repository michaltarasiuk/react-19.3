import Link from "next/link";
import { ChevronRightIcon, LayersIcon } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function Home() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <header className="max-w-xl space-y-2">
        <h1 className="text-2xl leading-display font-semibold tracking-tight text-demo-ink sm:text-3xl">
          React 19.3
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-demo-muted">
          Small interactive demos for Suspense, ViewTransition, and the other
          release APIs. Open one and try it.
        </p>
      </header>

      <ItemGroup className="max-w-xl">
        <Item
          variant="outline"
          className="border-demo-line bg-demo-surface/80 hover:bg-demo-wash"
          render={<Link href="/profile-demo" />}
        >
          <ItemMedia variant="icon" className="text-demo-accent">
            <LayersIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-demo-ink">Profile reveal</ItemTitle>
            <ItemDescription className="text-demo-muted">
              Hold a skeleton until data, stylesheet, font, and avatar are
              ready, then crossfade with ViewTransition.
            </ItemDescription>
          </ItemContent>
          <ChevronRightIcon className="size-4 shrink-0 text-demo-muted" />
        </Item>
      </ItemGroup>
    </div>
  );
}
