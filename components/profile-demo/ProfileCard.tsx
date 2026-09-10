"use client";

import { use } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { TEAM, type Profile } from "./data";
import { avatarUrl } from "./resources";

export type ProfileResources = {
  profilePromise: Promise<Profile>;
  stylesheet: string;
  image: string;
};

export function ProfileCard({ resources }: { resources: ProfileResources }) {
  const profile = use(resources.profilePromise);

  return (
    <>
      <link rel="stylesheet" href={resources.stylesheet} precedence="default" />
      <article className="overflow-hidden rounded-2xl border border-demo-line bg-demo-surface shadow-demo-card">
        <div className="flex items-center gap-4 px-5 py-5">
          <Avatar className="size-16 shrink-0 ring-2 ring-demo-surface ring-offset-2 ring-offset-demo-ink/10">
            <AvatarImage src={resources.image} alt={profile.name} />
            <AvatarFallback>{profile.fallback}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h2 className="truncate font-hand text-profile font-semibold tracking-tight text-demo-ink">
              {profile.name}
            </h2>
            <p className="mt-1.5 truncate font-hand text-profile-bio text-demo-muted">
              {profile.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-demo-line bg-demo-wash px-5 py-3">
          <AvatarGroup className="*:data-[slot=avatar]:ring-demo-surface">
            {TEAM.map((member) => (
              <Avatar key={member.handle} size="sm">
                <AvatarImage src={avatarUrl(member.avatar)} alt={member.name} />
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="text-xs text-demo-muted">
            {TEAM.length} people on this project
          </p>
        </div>
      </article>
    </>
  );
}

export function ProfileCardLoading() {
  return (
    <article className="overflow-hidden rounded-2xl border border-demo-line bg-demo-surface">
      <div className="flex items-center gap-4 px-5 py-5">
        <Skeleton className="size-16 shrink-0 rounded-full" />
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton className="h-7 w-36" />
          <Skeleton className="h-5 w-52" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-demo-line bg-demo-wash px-5 py-3">
        <div className="flex -space-x-2">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="size-6 rounded-full" />
        </div>
        <Skeleton className="h-3 w-36" />
      </div>
    </article>
  );
}
