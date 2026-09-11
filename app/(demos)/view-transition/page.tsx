"use client";

import { Suspense, ViewTransition, startTransition, useState } from "react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

import { Profile, ProfilePlaceholder } from "./_components/profile";
import type { Resources } from "./_components/profile";
import { VanillaProfile } from "./_components/vanilla-profile";
import { fetchProfile } from "./_lib/data";
import { freshImageUrl, freshStylesheetUrl } from "./_lib/resources";

export default function ViewTransitionPage() {
  const [resources, setResources] = useState<Resources | null>(null);

  return (
    <>
      <PageHeader title="View Transitions">
        Animate elements as they enter, exit, move, or resize with{" "}
        <code className="text-foreground">{"<ViewTransition>"}</code> and the browser View
        Transition API.
      </PageHeader>

      <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 lg:gap-x-12">
        <h2 className="text-base font-medium text-foreground md:col-start-1 md:row-start-1">
          With React
        </h2>
        <p className="min-h-10 text-sm text-muted-foreground md:col-start-1 md:row-start-2">
          Coordinated Suspense + ViewTransition reveal.
        </p>
        <div className="md:col-start-1 md:row-start-3">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => {
              startTransition(() => {
                setResources({
                  profilePromise: fetchProfile(),
                  stylesheet: freshStylesheetUrl(),
                  image: freshImageUrl("teal"),
                });
              });
            }}
          >
            Show profile
          </Button>
        </div>
        <div className="min-h-36 md:col-start-1 md:row-start-4">
          {resources && (
            <ViewTransition update="auto" default="none">
              <Suspense fallback={<ProfilePlaceholder />}>
                <Profile resources={resources} />
              </Suspense>
            </ViewTransition>
          )}
        </div>

        <VanillaProfile />
      </div>
    </>
  );
}
