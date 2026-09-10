"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { TEAM, fetchProfile } from "../_lib/data";
import {
  avatarUrl,
  freshImageUrl,
  freshStylesheetUrl,
} from "../_lib/resources";

/**
 * Non-React comparison: loads the same resources without Suspense / ViewTransition
 * coordination, so text and image pop in on their own schedules.
 */
export function VanillaProfile() {
  const ref = useRef<HTMLIFrameElement>(null);

  async function show() {
    const profile = await fetchProfile();
    const doc = ref.current?.contentWindow?.document;
    if (!doc) return;

    const origin = window.location.origin;
    const image = `${origin}${freshImageUrl(profile.avatar)}`;
    const team = TEAM.map(
      (member) => `
        <img
          class="team-avatar"
          src="${origin}${avatarUrl(member.avatar)}"
          alt="${member.name}"
          width="24"
          height="24"
        />`,
    ).join("");

    doc.open();
    doc.write(`
      <style>
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow: hidden;
          font-family: "Sora", system-ui, sans-serif;
          color: #122033;
          background: transparent;
        }
        .card {
          overflow: hidden;
          border: 1px solid #d7dde8;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
        }
        .header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
        }
        .header img {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: #e2e8f0;
          object-fit: cover;
          flex-shrink: 0;
        }
        .name {
          margin: 0;
          font-family: "Caveat", cursive;
          font-size: 22px;
          line-height: 1;
          font-weight: 600;
        }
        .bio {
          margin: 4px 0 0;
          font-family: "Caveat", cursive;
          font-size: 15px;
          line-height: 1.25;
          color: #5b6b7c;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 16px;
          border-top: 1px solid #d7dde8;
          background: #f3f6fa;
        }
        .team {
          display: flex;
        }
        .team-avatar {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          margin-left: -8px;
          object-fit: cover;
          /* Match AvatarGroup ring-2 ring-card */
          box-shadow: 0 0 0 2px #fff;
        }
        .team-avatar:first-child {
          margin-left: 0;
        }
        .footer p {
          margin: 0;
          font-size: 12px;
          color: #5b6b7c;
        }
      </style>
      <div class="card">
        <div class="header">
          <img src="${image}" alt="${profile.name}" width="48" height="48" />
          <div>
            <p class="name">${profile.name}</p>
            <p class="bio">${profile.description}</p>
          </div>
        </div>
        <div class="footer">
          <div class="team">${team}</div>
          <p>${TEAM.length} people on this project</p>
        </div>
      </div>
      <link rel="stylesheet" href="${freshStylesheetUrl()}">
    `);
    doc.close();
  }

  return (
    <>
      <h2 className="text-base font-medium text-foreground md:col-start-2 md:row-start-1">
        Without React
      </h2>
      <p className="min-h-10 text-sm text-muted-foreground md:col-start-2 md:row-start-2">
        Same assets, no Suspense wait, so font and image settle whenever they
        arrive.
      </p>
      <div className="md:col-start-2 md:row-start-3">
        <Button type="button" size="sm" variant="outline" onClick={show}>
          Show profile
        </Button>
      </div>
      <iframe
        ref={ref}
        title="Vanilla profile"
        className="block h-36 w-full overflow-hidden border-0 md:col-start-2 md:row-start-4"
      />
    </>
  );
}
