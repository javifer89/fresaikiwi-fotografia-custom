export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar";
import { DevToolsGuard } from "./devtools-guard";
import { TailwindCDNClient } from "@/components/tailwind-cdn-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    ...(siteConfig.ogImage
      ? {
          images: [
            {
              url: siteConfig.ogImage,
              width: 1200,
              height: 630,
              alt: `${siteConfig.name} - ${siteConfig.tagline}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    ...(siteConfig.ogImage ? { images: [siteConfig.ogImage] } : {}),
  },
  metadataBase: (() => {
    try {
      return new URL(siteConfig.url);
    } catch {
      return new URL("https://localhost:3000");
    }
  })(),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Google Fonts: Cormorant Garamond (elegant serif) + Outfit (modern sans) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rouge+Script:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        {/* Force light mode — prevents OS dark theme from bleeding into the preview/screenshots */}
        <meta name="color-scheme" content="light only" />
        {/* Schema.org: site metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            }),
          }}
        />
        {/*
          CRITICAL: Base styles to prevent FOUC and hydration errors
          ⚠️ DO NOT REMOVE OR MODIFY WITHOUT CAREFUL TESTING ⚠️
          React 19 requires href and precedence attributes on style tags
        */}
        <style href="base-styles" precedence="high">{`
          /* Base styles to prevent FOUC - always rendered server+client */
          .bg-white { background-color: white; }
          .bg-black { background-color: black; }
          .text-white { color: white; }
          .text-black { color: black !important; }
          .text-neutral-700 { color: rgb(64 64 64) !important; }
          .text-neutral-600 { color: rgb(82 82 82) !important; }
          .text-neutral-500 { color: rgb(115 115 115) !important; }
          .text-muted { color: rgb(82 82 82) !important; }
          .antialiased { -webkit-font-smoothing: antialiased; }
          .h-full { height: 100%; }
          .w-full { width: 100%; }

          /*
            IMPORTANT: Button and shadcn/ui color styles (fallback before Tailwind CDN loads)
            Uses official shadcn/ui Neutral theme with OKLCH colors
            DO NOT REMOVE - Required for FOUC prevention
          */
          .bg-primary { background-color: oklch(0.205 0 0); }
          .text-primary-foreground { color: oklch(0.985 0 0); }
          .hover\\:bg-primary\\/90:hover { background-color: oklch(0.205 0 0 / 0.9); }
          .bg-secondary { background-color: oklch(0.97 0 0); }
          .text-secondary-foreground { color: oklch(0.205 0 0); }
          .hover\\:bg-secondary\\/80:hover { background-color: oklch(0.97 0 0 / 0.8); }
          .bg-destructive { background-color: oklch(0.577 0.245 27.325); }
          .text-destructive-foreground { color: oklch(0.985 0 0); }
          .hover\\:bg-destructive\\/90:hover { background-color: oklch(0.577 0.245 27.325 / 0.9); }
          .border-input { border-color: oklch(0.922 0 0); }
          .bg-background { background-color: oklch(1 0 0); }
          .text-foreground { color: oklch(0.145 0 0); }
          .bg-accent { background-color: oklch(0.97 0 0); }
          .text-accent-foreground { color: oklch(0.205 0 0); }
          .hover\\:bg-accent:hover { background-color: oklch(0.97 0 0); }
          .hover\\:text-accent-foreground:hover { color: oklch(0.205 0 0); }
          .ring-offset-background { --tw-ring-offset-color: oklch(1 0 0); }
          .focus-visible\\:ring-ring:focus-visible { --tw-ring-color: oklch(0.708 0 0); }

          body { opacity: 1; }
        `}</style>
      </head>
      <body
        className={cn(
          "font-sans",
          "bg-white antialiased h-full w-full",
        )}
        suppressHydrationWarning // Prevents browser extension conflicts
      >
        <TailwindCDNClient />
        <DevToolsGuard />
        <main className={siteConfig.showNavbar !== false ? "pt-24" : ""}>
          {siteConfig.showNavbar !== false && <NavBar />}
          {children}
        </main>
      </body>
    </html>
  );
}
