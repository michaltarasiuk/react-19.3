import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({
  variable: "--font-demo-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-demo-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-demo-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "React 19.3",
    template: "%s | React 19.3",
  },
  description:
    "Hands-on demos of React 19.3: Suspense, ViewTransition, and coordinated reveals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexMono.variable} ${caveat.variable}`}
    >
      <body>
        <main className="demo-shell relative min-h-dvh overflow-hidden">
          <div
            className="demo-grid pointer-events-none absolute inset-0"
            aria-hidden
          />
          {children}
        </main>
      </body>
    </html>
  );
}
