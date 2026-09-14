import { DemosLayout } from "@/components/demos-layout";

export default function Layout({ children }: LayoutProps<"/fragment-refs">) {
  return <DemosLayout>{children}</DemosLayout>;
}
