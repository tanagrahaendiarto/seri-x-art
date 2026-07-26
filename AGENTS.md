# CLAUDE.md

# Seri X Art

Project Context for Claude Code

---

# Project Overview

Seri X Art adalah landing page modern untuk sebuah event seni nasional.

Project dibangun menggunakan Next.js, React, TypeScript, dan Tailwind CSS.

Target utama project adalah menghasilkan landing page yang memiliki kualitas visual profesional dengan codebase yang bersih, konsisten, mudah dipelihara, dan mudah dikembangkan.

---

# Current Tech Stack

Framework

- Next.js (App Router)

Library

- React

Language

- TypeScript

Styling

- Tailwind CSS

Optimization

- Next/Image

Package Manager

- npm

---

# Project Architecture

Landing page menggunakan Single Page Architecture.

Current Sections

- Navbar
- Hero
- About
- Competition
- Timeline
- Gallery
- FAQ
- Footer

Semua section berada pada halaman utama.

Navigation menggunakan anchor navigation.

---

# Existing Components

Sections

- Navbar
- Hero
- About
- Competition
- Timeline
- Gallery
- FAQ
- Footer

Reusable Components

- FeatureCard
- TimelineItem
- GalleryCard
- FAQItem
- FooterSection

Gunakan reusable component apabila memang terdapat pola UI yang berulang.

---

# Design Direction

Visual Style

- Premium
- Editorial
- Modern
- Luxury
- Creative
- Elegant
- Art Exhibition
- Minimal

Landing page harus terasa seperti event seni nasional.

Hindari tampilan dashboard SaaS.

Hero menjadi acuan visual seluruh section.

Semua section harus terasa berasal dari design language yang sama.

---

# Typography

Display Font

Foremost

Digunakan untuk:

- Hero
- Display Heading

Body Font

Poppins

Digunakan untuk:

- Navbar
- Paragraph
- Button
- Card
- Label

---

# Color Palette

Primary Background

#171D2D

Dark Surface

#20283A

Primary Purple

#A171D5

Secondary Purple

#594C8C

Nature Accent

#396465

Gold Accent

#DF9621

Rose Accent

#CC445C

Light Accent

#F1D2B1

Secondary Text

#A0A3B1

White

#FFFFFF

---

# Engineering Decisions

Current decisions for this project:

- Single Page Architecture.
- Navigation menggunakan anchor navigation.
- Hero menjadi acuan visual seluruh section.
- Tailwind CSS menjadi styling utama.
- Next/Image digunakan untuk image optimization.
- Reusable component digunakan apabila memberikan manfaat nyata.
- Data dipisahkan dari UI apabila mulai memiliki pola berulang.
- Hindari over engineering.

---

# Development Rules

Saat melakukan implementasi:

- Jangan mengubah arsitektur project tanpa alasan yang jelas.
- Jangan membuat dependency baru tanpa kebutuhan nyata.
- Pertahankan konsistensi codebase.
- Pertahankan konsistensi visual.
- Pertahankan konsistensi naming.
- Ikuti struktur folder yang sudah ada.
- Jelaskan alasan apabila melakukan refactor.

---

# Quality Standard

Semua implementasi diharapkan memenuhi standar berikut.

- Readable
- Maintainable
- Consistent
- Responsive
- Semantic
- Accessible
- Production Ready

Jika menemukan area yang dapat ditingkatkan, berikan rekomendasi beserta alasan teknisnya.

---

# Current Workflow

Workflow pengembangan:

Reference

↓

Planning

↓

Implementation

↓

Code Review

↓

Refactor (jika diperlukan)

↓

UI Review

↓

Testing

↓

Done

---

# Progress Tracking

Current progress disimpan pada:

PROJECT_STATE.md

Selalu gunakan PROJECT_STATE.md sebagai sumber informasi terbaru mengenai progress project.

Jangan menyimpan progress di file ini.

---

# Scope

Fokus project saat ini adalah menyelesaikan landing page dengan kualitas engineering dan UI yang tinggi.

Prioritas:

1. UI Consistency
2. Clean Code
3. Maintainability
4. Responsive Design
5. Accessibility
6. Performance
7. SEO

---

# Final Notes

Selalu pahami codebase sebelum melakukan perubahan.

Apabila terdapat beberapa solusi yang valid, pilih solusi yang paling sederhana dan paling maintainable.

Jika terdapat trade-off, jelaskan secara singkat sebelum melakukan implementasi.

Selalu berusaha meningkatkan kualitas codebase tanpa mengubah perilaku aplikasi yang sudah benar.

# Working Agreement

Before writing code:

- Review the current implementation.
- Explain the implementation plan briefly (3–5 bullet points).
- Then implement the solution.

After implementation:

- Summarize what changed.
- Explain why the changes improve the project.
- Mention any follow-up improvements if applicable.
- If a milestone is completed, update PROJECT_STATE.md.