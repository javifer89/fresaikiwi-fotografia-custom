import type { Metadata } from "next";
// Ignore missing type declarations for CSS modules in this project setup
// @ts-ignore: Implicit any for CSS import
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar";
import { DevToolsGuard } from "./devtools-guard";
import { CookieBanner } from "@/components/CookieBanner";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/site-config";

const LOGO_URL = "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LOGO_WEB.png";

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
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
  manifest: "/site.webmanifest",
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
        {/* Enable light and dark color schemes */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#fdf8f4" />
        {/* Theme provider for automatic dark mode support */}
        <ThemeProvider defaultTheme="system" attribute="data-theme" />
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
      </head>
      <body
        className={cn(
          "font-sans",
          "antialiased h-full w-full",
          "transition-colors",
        )}
        suppressHydrationWarning // Prevents browser extension conflicts
      >
            <a href="#main" className="sr-only focus:focus-internal focus:outline-none">Ir al contenido principal</a>
        <DevToolsGuard />
        <CookieBanner />
        <main className={siteConfig.showNavbar !== false ? "pt-24" : ""}>
          {siteConfig.showNavbar !== false && <NavBar />}
          {children}
        </main>
      </body>
    </html>
  );
}
