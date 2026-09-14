import { DemosLayout } from "@/components/demos-layout";

export default function Layout({ children }: LayoutProps<"/browser">) {
  return <DemosLayout>{children}</DemosLayout>;
}
