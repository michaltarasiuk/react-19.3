import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function DemoBackLink({
  className,
  href = "/",
  label = "All demos",
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "-ml-2.5 w-fit text-demo-muted hover:bg-demo-wash hover:text-demo-ink",
        className,
      )}
    >
      <ArrowLeftIcon data-icon="inline-start" />
      {label}
    </Link>
  );
}
