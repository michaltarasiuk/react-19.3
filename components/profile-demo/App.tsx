"use client";

import { Suspense, ViewTransition, startTransition, useState } from "react";

import { Button } from "@/components/ui/button";

import { ProfileCard, ProfileCardLoading } from "./ProfileCard";
import type { ProfileResources } from "./ProfileCard";
import { VanillaProfileCard } from "./VanillaProfileCard";
import { fetchProfile } from "./data";
import { freshImageUrl, freshStylesheetUrl } from "./resources";

export default function App() {
  const [resources, setResources] = useState<ProfileResources | null>(null);

  return (
    <main className="demo-shell relative min-h-dvh overflow-hidden">
      <div
        className="demo-grid pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <header className="max-w-xl space-y-2">
          <h1 className="text-3xl leading-display font-semibold tracking-tight text-demo-ink sm:text-4xl">
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
          <div className="min-h-32 md:col-start-1 md:row-start-4">
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
      </div>
    </main>
  );
}
