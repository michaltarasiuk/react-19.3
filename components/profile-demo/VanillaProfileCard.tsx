"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { TEAM, fetchProfile } from "./data";
import { avatarUrl, freshImageUrl, freshStylesheetUrl } from "./resources";

/**
 * Non-React comparison: loads the same resources without Suspense / ViewTransition
 * coordination, so text and image pop in on their own schedules.
 */
export function VanillaProfileCard() {
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
        body {
          margin: 0;
          font-family: "Sora", system-ui, sans-serif;
          color: #122033;
          background: transparent;
        }
        .card {
          overflow: hidden;
          border: 1px solid #d7dde8;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
        }
        .header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
        }
        .header img {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: #e2e8f0;
          object-fit: cover;
          flex-shrink: 0;
        }
        .name {
          margin: 0;
          font-family: "Caveat", cursive;
          font-size: 26px;
          line-height: 1;
          font-weight: 600;
        }
        .bio {
          margin: 6px 0 0;
          font-family: "Caveat", cursive;
          font-size: 17px;
          line-height: 1.25;
          color: #5b6b7c;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 20px;
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
          border: 2px solid #fff;
          margin-left: -8px;
          background: #e2e8f0;
          object-fit: cover;
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
          <img src="${image}" alt="${profile.name}" width="64" height="64" />
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
      <h2 className="font-(family-name:--font-demo-display) text-lg font-medium text-(--demo-ink) md:col-start-2 md:row-start-1">
        Without React
      </h2>
      <p className="min-h-10 text-sm text-(--demo-muted) md:col-start-2 md:row-start-2">
        Same assets, no Suspense wait, so font and image settle whenever they
        arrive.
      </p>
      <div className="md:col-start-2 md:row-start-3">
        <Button type="button" variant="outline" onClick={show}>
          Show profile
        </Button>
      </div>
      <iframe
        ref={ref}
        title="Vanilla profile card"
        className="block h-37 w-full border-0 md:col-start-2 md:row-start-4"
      />
    </>
  );
}
