/**
 * Script exécuté AVANT le build sur Vercel (via prebuild)
 * 1. Installe @tailwindcss/postcss pour Vercel
 * 2. Supprime le code CDN Tailwind pour éviter le double-chargement
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("
🔧 [PREBUILD] Starting Vercel preparation script...");
console.log("📋 Environment:", {
  VERCEL: process.env.VERCEL,
  NEXT_PUBLIC_VERCEL: process.env.NEXT_PUBLIC_VERCEL,
  NODE_ENV: process.env.NODE_ENV,
});

// Seulement sur Vercel
if (process.env.VERCEL === "1" || process.env.NEXT_PUBLIC_VERCEL === "1") {
  console.log("✅ Running on Vercel - preparing for build...
");

  // Install Tailwind CSS v4 for Vercel build (per official docs)
  console.log("📦 Installing Tailwind CSS v4 packages...");
  try {
    // Per https://tailwindcss.com/docs/installation/framework-guides
    // Need to install: tailwindcss @tailwindcss/postcss postcss
    execSync(
      "npm install tailwindcss @tailwindcss/postcss postcss --legacy-peer-deps",
      {
        stdio: "inherit",
      },
    );
    console.log("✅ Tailwind CSS v4 installed with lightningcss bindings
");
  } catch (error) {
    console.error("❌ Failed to install Tailwind CSS:", error.message);
    process.exit(1);
  }

  // Remove CDN loader
  console.log("🗑️  Removing Tailwind CDN loader...");

  const loaderPath = path.join(
    __dirname,
    "..",
    "components",
    "tailwind-cdn-loader.tsx",
  );
  console.log("📂 Replacing file:", loaderPath);

  // Remplacer complètement le fichier par un composant vide
  const emptyComponent = `'use client'

/**
 * Tailwind CSS v4 Loader (Vercel Build)
 *
 * This file was emptied by prebuild script (scripts/remove-cdn-for-vercel.js)
 * On Vercel, Tailwind v4 is compiled via lightningcss (no CDN needed)
 */
export function TailwindCDNLoader() {
  return null;
}
`;

  try {
    const originalContent = fs.readFileSync(loaderPath, "utf-8");
    const originalSize = originalContent.length;

    fs.writeFileSync(loaderPath, emptyComponent);
    const newSize = emptyComponent.length;

    console.log("
📊 Results:");
    console.log("   - Original size:", originalSize, "bytes");
    console.log("   - New size:", newSize, "bytes");
    console.log("   - Removed:", originalSize - newSize, "bytes");
    console.log("
✅ SUCCESS! CDN code removed from tailwind-cdn-loader.tsx");
    console.log("🚀 Vercel build will use compiled Tailwind v4 (no CDN)
");
  } catch (error) {
    console.log("
❌ ERROR:", error.message);
    console.log("   Build will continue but CDN might be present
");
  }
} else {
  console.log("⏭️  Not on Vercel - skipping CDN removal");
  console.log("   (CDN will be used for CodeSandbox development)
");
}
