"use client";

import { Suspense, ViewTransition, startTransition, useState } from "react";

import { Button } from "@/components/ui/button";

import { ProfileCard, ProfileCardLoading } from "./_components/ProfileCard";
import type { ProfileResources } from "./_components/ProfileCard";
import { VanillaProfileCard } from "./_components/VanillaProfileCard";
import { fetchProfile } from "./_lib/data";
import { freshImageUrl, freshStylesheetUrl } from "./_lib/resources";

export default function ProfileDemoPage() {
  const [resources, setResources] = useState<ProfileResources | null>(null);

  return (
    <>
      <header className="max-w-xl space-y-2">
        <h1 className="text-2xl leading-display font-semibold tracking-tight text-demo-ink sm:text-3xl">
          Profile reveal
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-demo-muted">
          React holds the skeleton until profile data, stylesheet, font, and
          avatar are ready, then ViewTransition crossfades them in.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 lg:gap-x-12">
        <h2 className="text-base font-medium text-demo-ink md:col-start-1 md:row-start-1">
          With React
        </h2>
        <p className="min-h-10 text-sm text-demo-muted md:col-start-1 md:row-start-2">
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
              <Suspense fallback={<ProfileCardLoading />}>
                <ProfileCard resources={resources} />
              </Suspense>
            </ViewTransition>
          )}
        </div>

        <VanillaProfileCard />
      </div>
    </>
  );
}
