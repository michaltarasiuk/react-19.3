"use client";

import { use, useState, type ChangeEvent } from "react";
import { browser } from "react-dom";

import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

const STORAGE_KEY = "react-19.3:browser-draft";

export function SavedDraft() {
  use(browser("The draft is stored in localStorage."));
  const [draft, setDraft] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? "",
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const nextDraft = event.target.value;
    setDraft(nextDraft);
    localStorage.setItem(STORAGE_KEY, nextDraft);
  }

  return (
    <Textarea
      value={draft}
      onChange={handleChange}
      placeholder="Type here…"
      className="h-32 max-w-md resize-none"
    />
  );
}

export function SavedDraftFallback() {
  return <Skeleton className="h-32 max-w-md resize-none" />;
}
