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

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <header className="max-w-2xl space-y-3">
          <p className="font-(family-name:--font-demo-mono) text-[0.7rem] tracking-[0.18em] text-(--demo-accent)">
            React 19.3
          </p>
          <h1 className="font-(family-name:--font-demo-display) text-4xl leading-[1.05] font-semibold tracking-tight text-(--demo-ink) sm:text-5xl">
            Profile reveal
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-(--demo-muted)">
            React holds the skeleton until profile data, stylesheet, font, and
            avatar are ready, then ViewTransition crossfades them in.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-2 lg:gap-x-16">
          <h2 className="font-(family-name:--font-demo-display) text-lg font-medium text-(--demo-ink) md:col-start-1 md:row-start-1">
            With React
          </h2>
          <p className="min-h-12 text-sm text-(--demo-muted) md:col-start-1 md:row-start-2">
            Coordinated Suspense + ViewTransition reveal.
          </p>
          <div className="md:col-start-1 md:row-start-3">
            <Button
              type="button"
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
          <div className="min-h-40 md:col-start-1 md:row-start-4">
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
