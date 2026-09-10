import { PageHeader } from "@/components/page-header";

import { PaymentMethodForm } from "./_components/PaymentMethodForm";

export default function FragmentRefsPage() {
  return (
    <>
      <PageHeader title="Fragment Refs">
        Pass a ref to a <code className="text-foreground">Fragment</code> to get a{" "}
        <code className="text-foreground">FragmentInstance</code> with DOM methods for its children,
        without a wrapper element.
      </PageHeader>

      <PaymentMethodForm />
    </>
  );
}
