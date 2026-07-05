# PROJECT_STATE

Last updated: 2026-07-06 (end of Sprint 7 — Motion Design System)

---

## Status Umum

Landing page single-page Seri X Art (Navbar, Hero, About, Competition, Timeline, Gallery, FAQ, Footer) sudah **feature-complete, accessible, dioptimasi performance/SEO, dan punya motion system** — siap production kecuali beberapa placeholder di bawah.

Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Motion (`motion` package).

---

## Riwayat Sprint

- **UI Polish** — redesign editorial seluruh section, typography Fraunces+Poppins, official color palette.
- **Sprint 4 — Accessibility**: fix duplikasi `h1`, landmark `<main>`, skip link, kontras tombol Gold, ARIA accordion FAQ.
- **Sprint 5 — Performance**: resize `logo.png` (3.3MB→65KB), font weight Fraunces dipangkas ke yang dipakai saja.
- **Sprint 6 — SEO**: metadata lengkap, OG image dinamis, robots.txt, sitemap.xml, JSON-LD Event, favicon brand.
- **Sprint 6.5 — Production QA**: audit Lighthouse production (Perf 96-100, A11y/BP/SEO 100), tanpa broken link.
- **Sprint 7 — Motion**: satu motion system (`src/lib/motion.ts`) untuk hero reveal, scroll reveal, hover button/gallery, accordion FAQ, mobile menu — menghormati `prefers-reduced-motion`.

Juga: fix scroll-to-top saat refresh (`ScrollRestoration.tsx`).

---

## Known Issues / Placeholder yang Harus Diganti

- **Domain masih placeholder** (`seri-x-art.example.com` di `src/lib/site.ts`) — wajib diganti sebelum deploy (dipakai metadata, sitemap, robots.txt).
- **Register CTA** (Navbar & Hero) belum punya destination nyata.
- **Footer social links** (Instagram/TikTok/YouTube) masih `href="#"`, menunggu URL asli.
- **`SectionHeader.tsx` & `FeatureCard.tsx`** dead component, belum dihapus — menunggu keputusan.
- `aria-current`/scroll-spy Navbar belum diimplementasikan (sengaja ditunda).

## Next Recommended Priorities

1. Tentukan destination Register CTA.
2. Isi domain production asli + URL sosial media Footer.
3. Putuskan nasib dead component (`SectionHeader`/`FeatureCard`).
4. Manual QA visual di device/browser nyata (belum pernah dilakukan sejak awal).
