# Fresaikiwi Fotografía

Website for Fresaikiwi Fotografía, a photography studio in Villajoyosa (Alicante, Spain) specializing in pregnancy, newborn, children, communion, family, and themed photo sessions.

Built with Next.js App Router, statically generated, with images served from Supabase Storage.

## Stack

- **Next.js 16** (App Router, Turbopack, standalone output)
- **React 19** with Server Components by default
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **next/font** — Cormorant Garamond, Roboto, and Rouge Script are self-hosted at build time
- **sharp** for image optimization

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

The site runs at http://localhost:3000.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `FORMSPREE_ENDPOINT` | Yes | Formspree form URL that receives contact submissions. `/api/contact` returns HTTP 500 while it is missing — it fails closed by design. |
| `NEXT_PUBLIC_URL` | No | Public site origin used by metadata, `sitemap.xml`, and `robots.txt`. Falls back to `https://fresaikiwifotografia.com`. |

Locally these live in `.env.local`, which is gitignored. On Vercel they must be set in the project settings; `.env.local` is not committed and is not copied into the standalone build output.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run type-check` | `tsc --noEmit` |
| `npm run ci` | Type check plus lint |
| `npm run clean` | Remove `.next` and the dependency cache |

## Project structure

```
app/
├── page.tsx                    # Home (hero carousel, highlights)
├── sesiones/
│   ├── page.tsx                # Session index with filters
│   └── [slug]/page.tsx         # Session detail, driven by lib/data/sessions.ts
├── sobre-nosotros/page.tsx
├── reservas/page.tsx
├── contacto/page.tsx
├── privacidad/                 # Legal pages
├── aviso-legal/
├── politica-de-cookies/
├── accesibilidad/
├── api/contact/route.ts        # Forwards contact submissions to Formspree
├── layout.tsx                  # Fonts, theme, navbar, footer, single <main>
├── sitemap.ts
└── robots.ts

components/                     # Navbar, footer, forms, gallery, lightbox
lib/
├── data/sessions.ts            # Single source of truth for the 8 sessions
├── site-config.ts              # Site name, contact details, keywords, nav links
└── utils.ts
public/                         # Icons, legal illustrations, llms.txt, manifest
```

### Adding or editing a session

All session content lives in `lib/data/sessions.ts`. Each entry declares its slug, title, copy, badge, gallery images, aspect ratio, and SEO metadata. The detail route generates one static page per entry via `generateStaticParams`, and `dynamicParams = false` means an unknown slug returns 404 instead of rendering on demand.

Because of that, adding a session requires no new route file: append an entry to `sessions` and the page, the sitemap, and the session index pick it up automatically.

## Contact form flow

`components/formspree-form.tsx` posts to `/api/contact`, which validates the payload, applies a per-IP rate limit, and forwards it to the Formspree endpoint from `FORMSPREE_ENDPOINT`. A hidden `_gotcha` field provides basic bot filtering. Delivery failures are surfaced to the user in a `role="alert"` container rather than being swallowed by a console log.

## Redirects

`next.config.mjs` keeps permanent (308) redirects for URLs merged during the SEO cleanup:

- `/about` → `/sobre-nosotros`
- `/sesiones/comuniones` → `/sesiones/comunion`

## Deployment

### Vercel

1. Import the repository.
2. Set `FORMSPREE_ENDPOINT` (and optionally `NEXT_PUBLIC_URL`) in the project environment variables.
3. Deploy.

### Self-hosting

The build uses `output: 'standalone'`, so `next start` is not the right entry point. Run:

```bash
node .next/standalone/server.js
```

Environment variables must be provided by the host (Docker, systemd, or similar); standalone output does not read `.env.local`.

## Notes

- Images are optimized by `next/image`. Remote images are limited to `*.supabase.co` in `next.config.mjs`; add a host there before referencing it.
- `X-Frame-Options: DENY` and the Content Security Policy are set in `next.config.mjs`. Any new third-party script, font, or frame origin must be added to the CSP or it will be blocked.
