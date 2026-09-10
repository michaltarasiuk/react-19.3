import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function DemoBackLink() {
  return (
    <Link
      href="/"
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
        className:
          "-ms-2.5 w-fit text-demo-muted hover:bg-demo-wash hover:text-demo-ink",
      })}
    >
      <ArrowLeftIcon data-icon="inline-start" />
      All demos
    </Link>
  );
}
