import { Suspense } from "react";

import { PageHeader } from "@/components/page-header";

import {
  SavedDraft,
  SavedDraftFallback,
} from "./_components/saved-draft";

export default function BrowserPage() {
  return (
    <>
      <PageHeader title="browser">
        Mark a component as browser-only during server rendering with{" "}
        <code className="text-foreground">use(browser())</code>. Reload to see
        the Suspense fallback in the initial HTML, then the draft from
        localStorage after hydration.
      </PageHeader>

      <Suspense fallback={<SavedDraftFallback />}>
        <SavedDraft />
      </Suspense>
    </>
  );
}
