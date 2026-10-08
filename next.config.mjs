import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for optimized Docker builds (~150MB vs 1.7GB)
  output: 'standalone',

  // Turbopack configuration
  turbopack: {},

  experimental: {
    cpus: 2,
    // Enable partial prerendering for faster loads
    // // Only available in canary
    // Optimize bundling
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-hook-form",
      "@radix-ui/react-label",
      "@radix-ui/react-slot"],
  },

  // Suppress hydration warnings globally
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.robot-speed.com",
      },
      {
        protocol: "https",
        hostname: "robot-speed.com",
      }],
    formats: ["image/avif", "image/webp"],
    // Use sharp for better performance
    loader: "default",
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // TypeScript configuration - Fail build on TS errors (run `pnpm type-check` locally first)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Compiler optimizations
  compiler: {
    // Remove console logs in production only
    removeConsole: process.env.NODE_ENV === "production",
    // Remove dev-only attributes in production
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? { properties: ["^data-testid$"] }
        : false,
  },

  // Force webpack to resolve @ aliases (in case tsconfig.json is not read)
  webpack: (config, { _isServer, webpack, dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("."),
      "@components": path.resolve("./components"),
      "@lib": path.resolve("./lib"),
      "@constants": path.resolve("./constants"),
      "@context": path.resolve("./context"),
    };

    void dev;
    void webpack;

    return config;
  },

  // Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://formspree.io https://rxdpvfeqdbenrlupzewy.supabase.co",
              "frame-src https://www.google.com https://ohmyphoto.app",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io"
            ].join("; "),
          },
        ],
      },
    ];
  },
};


export default nextConfig;
