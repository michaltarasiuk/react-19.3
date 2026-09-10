import { Suspense } from "react";

import { PageHeader } from "@/components/page-header";

import { SavedDraft, SavedDraftFallback } from "./_components/saved-draft";

export default function BrowserPage() {
  return (
    <>
      <PageHeader title={<code>browser</code>}>
        Call <code className="text-foreground">use(browser())</code> to opt a component out of
        server rendering when it depends on browser-only APIs. Reload to see the Suspense fallback
        in the initial HTML, then the draft from localStorage after hydration.
      </PageHeader>

      <Suspense fallback={<SavedDraftFallback />}>
        <SavedDraft />
      </Suspense>
    </>
  );
}
