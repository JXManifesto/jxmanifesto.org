import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "JX Manifesto", template: "%s | JX Manifesto" },
  description: "A multilingual manifesto for Journalist Experience.",
  openGraph: {
    title: "JX Manifesto",
    description: "A multilingual manifesto for Journalist Experience.",
    url: siteUrl,
    siteName: "JX Manifesto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
