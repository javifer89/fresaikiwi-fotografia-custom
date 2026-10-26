import type { Metadata, Viewport } from "next";
// Ignore missing type declarations for CSS modules in this project setup
// @ts-ignore: Implicit any for CSS import
import "./globals.css";
import { Cormorant_Garamond, Roboto, Rouge_Script } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DevToolsGuard } from "./devtools-guard";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig } from "@/lib/site-config";

const LOGO_URL = "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LOGO_WEB.png";

// Self-hosted by next/font: no request to fonts.googleapis.com, no layout shift.
// The CSS variables are consumed by the inline fontFamily styles across the site.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rouge",
  display: "swap",
});

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
    locale: "es_ES",
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
    ...(siteConfig.twitter ? { creator: siteConfig.twitter } : {}),
    ...(siteConfig.ogImage ? { images: [siteConfig.ogImage] } : {}),
  },
  metadataBase: (() => {
    try {
      return new URL(siteConfig.url);
    } catch {
      return new URL("https://localhost:3000");
    }
  })(),
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#fdf8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showNavbar = siteConfig.showNavbar !== false;

  return (
    <html
      lang="es"
      className={cn(cormorant.variable, roboto.variable, rougeScript.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn("font-sans", "antialiased h-full w-full", "transition-colors")}
        suppressHydrationWarning // Prevents browser extension conflicts
      >
        {/* ThemeProvider must live inside <body>: it renders a script, which is invalid inside <head>. */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
          >
            Ir al contenido principal
          </a>
          <DevToolsGuard />
          <CookieBanner />
          {showNavbar && <NavBar />}
          {/* Single <main> landmark for the whole app; pages render plain <div> wrappers. */}
          <main id="main" className={showNavbar ? "pt-24" : ""}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
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
      </body>
    </html>
  );
}
