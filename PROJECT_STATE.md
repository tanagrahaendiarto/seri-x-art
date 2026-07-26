# PROJECT_STATE

Last Updated: 2026-07-26 (Competition Detail Modal Navigation)

---

# Project Overview

**Project Name**
Seri X Art

**Purpose**

Seri X Art adalah sebuah premium editorial landing page untuk kompetisi seni yang dibangun sebagai project pembelajaran Frontend Engineering menggunakan Next.js.

Project ini dikembangkan dengan pendekatan production-first, sehingga fokus tidak hanya pada UI, tetapi juga:

- Clean Architecture
- Maintainability
- Scalability
- Accessibility
- Performance
- SEO
- Production Readiness

Tech Stack:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion
- Next.js Metadata API

---

# Current Status

## Sprint Progress

✅ Sprint 1 — Landing Page

✅ Sprint 2 — UI Polish

✅ Sprint 3 — Responsive Design

✅ Sprint 4 — Accessibility

✅ Sprint 5 — Performance Optimization

✅ Sprint 6 — SEO

✅ Sprint 6.5 — Production QA

✅ Sprint 7 — Motion Design System

✅ Competition Detail Pages & Modal Navigation

---

# Current Architecture

Landing Page terdiri dari:

- Navbar
- Hero
- About
- Competition
- Timeline
- Gallery
- FAQ
- Footer

Semua section sudah selesai dan dianggap production-ready.

Competition detail pages are available through dynamic routes at
`/competition/[slug]`. Gallery content is centralized in
`src/data/competitions.ts`, so each route shares one template while its slug,
title, category, description, and image remain data-driven. Navigation from
the Gallery is intercepted into an accessible modal that keeps the landing
page and its scroll position visible; direct visits still render the full
detail page for SEO and sharing.

The shared registration destination is configured in `src/lib/site.ts` and
currently awaits the published Google Form URL.

---

# Motion Design

Sudah diimplementasikan.

Motion mengikuti prinsip:

- Premium
- Elegant
- Minimal
- Purposeful

Implementasi meliputi:

- Hero reveal
- Scroll reveal setiap section
- Gallery hover
- Button hover
- FAQ transition
- Mobile navigation transition

Motion tetap menjaga:

- Performance
- Accessibility
- prefers-reduced-motion

---

# Accessibility

Sudah selesai.

Implementasi:

- Semantic HTML
- Heading hierarchy
- Keyboard navigation
- Focus states
- ARIA audit
- Alt text
- Contrast review

---

# Performance

Sudah selesai.

Optimasi:

- Logo

3.37 MB

↓

65 KB

- Fraunces variable

↓

700 & 900 only

Tidak dilakukan:

- React.memo
- useMemo
- useCallback
- Dynamic Import

karena dianggap over-engineering.

Production build bersih.

---

# SEO

Sudah selesai.

Menggunakan Next.js Metadata API.

Implementasi:

- Metadata
- Open Graph
- Twitter Card
- Dynamic OG Image
- JSON-LD
- robots.ts
- sitemap.ts
- favicon
- canonical
- metadataBase

Konfigurasi website dipusatkan di:

src/lib/site.ts

---

# Production QA

Production build:

✅ Clean

TypeScript:

✅ Clean

ESLint:

✅ Clean

Lighthouse:

Desktop

Performance: 100

Accessibility: 100

Best Practices: 100

SEO: 100

Mobile

Performance: 97

Accessibility: 100

Best Practices: 100

SEO: 100

Tidak ada blocker teknis.

---

# Git Status

Sudah dilakukan:

- git init
- git config
- Initial Commit
- Repository GitHub dibuat
- Branch main

Sedang proses:

- Push ke GitHub
- Deploy ke Vercel

---

# Known Issues

Bukan bug, hanya placeholder yang memang menunggu data final.

- Register CTA belum diarahkan ke Linktree.
- Guidebook CTA belum ditambahkan.
- Footer social media masih placeholder.
- siteUrl masih placeholder.
- Domain production belum tersedia.
- SectionHeader.tsx & FeatureCard.tsx masih dead component (belum diputuskan dihapus atau dipertahankan).

---

# Planned Integrations

Setelah deployment:

Register

↓

Linktree

Guidebook

↓

Google Drive

Footer

↓

Instagram

↓

TikTok

↓

YouTube

Semua URL nantinya dipusatkan melalui:

src/lib/site.ts

agar mudah diubah tanpa menyentuh komponen.

---

# Next Priorities

## 1.

Selesaikan push GitHub.

---

## 2.

Deploy ke Vercel.

---

## 3.

Hubungkan domain production.

---

## 4.

Tambahkan:

- Linktree
- Guidebook
- Social Media

---

## 5.

Final Content

Ganti:

- Gallery
- Timeline
- FAQ
- Competition
- Contact

menggunakan data sebenarnya.

---

## 6.

Portfolio Polish

Tambahkan:

- Screenshot README
- Live Demo
- GIF Preview

---

# Development Philosophy

Project ini menggunakan workflow:

Review

↓

Diskusi

↓

Approval

↓

Implementation

↓

Local Testing

↓

UI Review

↓

Production QA

↓

Commit Git

↓

Push GitHub

↓

Deploy

Seluruh keputusan engineering mengutamakan:

- Readability
- Maintainability
- Scalability
- Production Quality

dibanding over-engineering.

---

# Notes for Future Development

Jangan mengubah visual language.

Design direction tetap:

- Premium
- Editorial
- Elegant
- Minimal

Jika ada fitur baru, utamakan:

- reusable components
- semantic HTML
- explicit TypeScript
- maintainable architecture

Hindari:

- duplicate JSX
- unnecessary abstraction
- premature optimization
- over-engineering

Website saat ini dianggap production-ready. Pengembangan selanjutnya lebih berfokus pada integrasi konten, deployment, dan penyempurnaan pengalaman pengguna, bukan perubahan arsitektur.
