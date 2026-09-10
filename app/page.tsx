import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";

export default function Home() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <PageHeader title="React 19.3">
        Demos for View Transitions, Fragment Refs,{" "}
        <code className="text-foreground">browser()</code>, and other features from the React 19.3
        release.
      </PageHeader>

      <ItemGroup className="max-w-xl">
        <Item
          variant="outline"
          className="border-border bg-card/80 hover:bg-muted"
          render={<Link href="/view-transition" />}
        >
          <ItemContent>
            <ItemTitle className="text-foreground">View Transitions</ItemTitle>
            <ItemDescription className="text-muted-foreground">
              Animate elements as they enter, exit, move, or resize with{" "}
              <code className="text-foreground">{"<ViewTransition>"}</code> and the browser View
              Transition API.
            </ItemDescription>
          </ItemContent>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
        </Item>
        <Item
          variant="outline"
          className="border-border bg-card/80 hover:bg-muted"
          render={<Link href="/fragment-refs" />}
        >
          <ItemContent>
            <ItemTitle className="text-foreground">Fragment Refs</ItemTitle>
            <ItemDescription className="text-muted-foreground">
              Pass a ref to a <code className="text-foreground">Fragment</code> to get a{" "}
              <code className="text-foreground">FragmentInstance</code> with DOM methods for its
              children, without a wrapper element.
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
            <ItemTitle className="text-foreground">
              <code>browser</code>
            </ItemTitle>
            <ItemDescription className="text-muted-foreground">
              Call <code className="text-foreground">use(browser())</code> to opt a component out of
              server rendering when it depends on browser-only APIs.
            </ItemDescription>
          </ItemContent>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
        </Item>
      </ItemGroup>
    </div>
  );
}
