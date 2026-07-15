import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Vimigo Proposal for Byon Suites",
    description: "A focused 30-day business transformation proposal to connect Byon Suites' direction, performance, visibility and fair recognition.",
    openGraph: {
      title: "Vimigo × Byon Suites — Business Transformation Proposal",
      description: "From daily operations to visible, accountable performance.",
      type: "website",
      images: [{ url: `${origin}/og-proposal.png`, width: 1200, height: 630, alt: "Vimigo business transformation proposal for Byon Suites" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vimigo × Byon Suites — Business Transformation Proposal",
      description: "From daily operations to visible, accountable performance.",
      images: [`${origin}/og-proposal.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
