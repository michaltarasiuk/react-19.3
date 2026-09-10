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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexMono.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
