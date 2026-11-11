# Visual effects pack A + B

Objective: add tasteful motion and finishing touches to the Fresaikiwi site without changing palette, typography, or copy.
Branch: current working branch. Delivery: single PR. Test runner: none (Next.js app; checks are `npm run type-check`, `npm run lint`).

## Specs

- S1. Motion animates only `transform` and `opacity`. No layout-affecting property is animated.
- S2. `prefers-reduced-motion: reduce` disables every added motion and renders the final state (Ken Burns, parallax, word reveal, scroll reveal, FAB entrance, lightbox entrance).
- S3. Zero new dependencies are added; every effect is plain CSS plus React.
- S4. Content stays visible without JavaScript: the hidden pre-reveal state only applies when an inline script has set `reveal-ready` on `<html>`.
- S5. The navbar reacts to scroll: translucent cream while at the top, nearly opaque cream with a soft shadow and a slightly smaller logo once the page is scrolled.
- S6. Blocks fade and rise into view once per page visit, with a small stagger between siblings.
- S7. The hero carousel caps its height, applies a slow Ken Burns scale to the active slide, advances on its own every 5 s with the same fade it uses on a manual click, pauses only for keyboard focus of its controls, and does not autoplay under reduced motion.
- S8. *(Withdrawn: the session marquee is removed. The sessions grid is the sessions showcase.)*
- S9. The sessions-grid heading reveals word by word once in view, with `su` and `historia` set in italic accent.
- S10. A final CTA band sits after the contact section with a background photo and a subtle clamped parallax.
- S11. Session imagery keeps photographic proportions: listing cards use a 4:5 portrait frame; the bento keeps square tiles with the redundant ternary removed.
- S12. The lightbox fades its backdrop and pops its panel in; a floating WhatsApp button is available site-wide.

## Tasks

- T1. Effect CSS in `app/globals.css` (reveal, ken burns, marquee, word reveal, lightbox, FAB, reduced-motion overrides). S1, S2, S4 — inline — done.
- T2. `components/reveal.tsx`: IntersectionObserver reveal wrapper with optional delay. S6 — inline — done.
- T3. `components/words-reveal.tsx`: word-by-word heading reveal with emphasis words. S9 — inline — done.
- T4. ~~`components/photo-marquee.tsx`: seamless session photo marquee.~~ S8 — withdrawn, component and CSS deleted.
- T5. `components/parallax-cta.tsx`: closing CTA band with clamped parallax background. S10 — inline — done.
- T6. `components/whatsapp-fab.tsx`: fixed WhatsApp button with safe-area inset. S12 — inline — done.
- T7. `components/navbar.tsx`: scroll state, background/shadow transition, logo scale. S5 — inline — done.
- T8. `components/hero-carousel.tsx`: height cap, Ken Burns, reduced-motion autoplay guard. Autoplay corrected in L5. S7 — inline — done.
- T9. `app/page.tsx`, `components/sessions-grid.tsx`, `app/sesiones/page.tsx`, `components/contact-cta.tsx`, `components/session-lightbox.tsx`: wire reveals, parallax CTA, aspect ratios, lightbox classes. S6, S9, S10, S11, S12 — inline — done. (`app/page.tsx` also lost the marquee and changed its `h1` in L4.)
- T10. `app/layout.tsx`: `reveal-ready` inline script and site-wide WhatsApp FAB. S4, S12 — inline — done.
- T11. Checks: `npm run type-check` and `npm run lint`. S1–S12 — inline — done.

## Log

- L1. "si, empieza con a y b"
- L2. Guardrails confirmed by the implementer: transform/opacity only, reduced-motion support, no dependencies, no-JS content visible.
- L3. The bento grid's `aspect-square` ternary is redundant but harmless: a 2-column large tile is exactly as wide as two square rows plus the gap. Only the ternary is simplified; layout math is untouched.
- L4. "el carrousel que hay de imagenes de sesiones, justo debajo de 'Fotógrafo de embarazo, newborn y familia en Villajoyosa', no me gusta, además es redundante ya que en la seccion siguiente aparecen las sesiones en el grid, lo cual me parece más optimo. Podrias corregirlo? También quiero que esa frase cambie por ' Fotografía de embarazo, newborn y familia en La Vila Joiosa'"
- L5. "me gusta la animacion que tiene ahora mismo pero no tiene transiciones ahora, si no le doy al botón de siguiente foto, no cambia". Root cause: the added `onMouseEnter`/`onFocus` pause on a section that covers the whole viewport left `isPaused` true on load (the pointer is always over the hero, and a click focuses the arrow). Hover pause removed; only keyboard focus (`:focus-visible`, so a mouse click does not trigger it) pauses. Autoplay also moved from a `setInterval` recreated by every state change to a `setTimeout` re-armed after each slide settles. The fade itself is untouched.
- L6. Marquee removal: `components/photo-marquee.tsx`, its import in `app/page.tsx`, and the `.marquee-track`/`.marquee-wrap`/`@keyframes marquee-x` CSS (plus its reduced-motion entry) deleted. Verified: no `marquee` string in the generated `index.html`, no `marquee-x` in the compiled CSS.
- L7. Checks after L4–L6: `npm run type-check` clean, `npm run build` clean (20 static pages).
