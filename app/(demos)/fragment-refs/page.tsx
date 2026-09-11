import { PageHeader } from "@/components/page-header";

import { PaymentMethodForm } from "./_components/payment-method-form";
import { FocusFirst } from "@/app/(demos)/fragment-refs/_lib/focus-first";

export default function FragmentRefsPage() {
  return (
    <>
      <PageHeader title="Fragment Refs">
        Pass a ref to a <code className="text-foreground">Fragment</code> to get a{" "}
        <code className="text-foreground">FragmentInstance</code> with DOM methods for its children,
        without a wrapper element.
      </PageHeader>

      <FocusFirst>
        <PaymentMethodForm />
      </FocusFirst>
    </>
  );
}
