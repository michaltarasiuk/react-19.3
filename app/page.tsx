import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
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
      <PageHeader title="React 19.3">
        Interactive demos for Suspense, ViewTransition, Fragment Refs, browser,
        and the other React 19.3 APIs.
      </PageHeader>

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
        <Item
          variant="outline"
          className="border-border bg-card/80 hover:bg-muted"
          render={<Link href="/browser" />}
        >
          <ItemContent>
            <ItemTitle className="text-foreground">browser</ItemTitle>
            <ItemDescription className="text-muted-foreground">
              Mark a component as browser-only during server rendering with{" "}
              <code className="text-foreground">use(browser())</code>.
            </ItemDescription>
          </ItemContent>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
        </Item>
      </ItemGroup>
    </div>
  );
}
