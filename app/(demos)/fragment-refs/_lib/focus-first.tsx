"use client";

import { Fragment, type FragmentInstance, type ReactNode } from "react";

function focusFirst(fragment: FragmentInstance | null) {
  fragment?.focus();
}

export function FocusFirst({ children }: { children: ReactNode }) {
  return <Fragment ref={focusFirst}>{children}</Fragment>;
}
