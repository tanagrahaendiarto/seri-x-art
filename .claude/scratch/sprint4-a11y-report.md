# Laporan Audit Accessibility — Sprint 4

**Tanggal:** 2026-07-05
**Scope:** Accessibility only (Semantic HTML, Images, Interactive Elements, Keyboard Navigation, ARIA, Color Contrast, Form & CTA)
**Tidak diubah:** layout, spacing, typography, desain visual, animasi, SEO metadata, performance

---

## 1. Ringkasan Audit

Secara umum fondasi accessibility project ini sudah cukup baik — Navbar dan FAQItem sebelumnya sudah memakai pola `aria-expanded`/`aria-controls`/`focus-visible` dengan benar, dan warna teks sekunder (`#A0A3B1`, `#F1D2B1`) terbukti memenuhi kontras AA di atas seluruh warna background resmi.

Namun ditemukan beberapa pelanggaran nyata: **dua elemen `<h1>` di satu halaman**, **landmark `<main>` yang hanya membungkus Hero** (bukan seluruh konten utama), **`aria-controls` yang menunjuk ke elemen yang tidak selalu ada di DOM**, **tombol CTA Hero tanpa focus state**, dan yang paling serius — **kontras teks putih di atas tombol Gold (`#DF9621`) hanya ±2.46:1**, jauh di bawah standar WCAG AA (4.5:1 untuk teks normal).

Semua temuan di bawah ini sudah diperbaiki tanpa mengubah tampilan visual (diverifikasi lewat `tsc --noEmit` dan `eslint`, keduanya bersih).

---

## 2. Temuan

| # | Kategori | Temuan | Tingkat |
|---|----------|--------|---------|
| 1 | Semantic HTML | Dua `<h1>` di halaman: logo "Seri X Art" di Navbar dan judul utama di Hero | Tinggi |
| 2 | Semantic HTML | `<main>` hanya membungkus Hero, bukan seluruh section konten (About–FAQ) | Tinggi |
| 3 | ARIA | `aria-controls="mobile-menu"` menunjuk ke `<div>` yang tidak dirender sama sekali saat menu tertutup (invalid reference) | Sedang |
| 4 | ARIA | Ikon SVG dekoratif (hamburger, chevron FAQ) tidak diberi `aria-hidden="true"` | Rendah |
| 5 | Semantic HTML | Pertanyaan FAQ (trigger accordion) tidak dibungkus heading (`h3`) — navigasi via heading oleh screen reader akan melewatkan seluruh daftar FAQ | Sedang |
| 6 | Keyboard Navigation | Tombol "Register Now" & "Explore Competition" di Hero tidak punya `focus-visible` state — tidak konsisten dengan seluruh elemen interaktif lain di situs | Tinggi |
| 7 | Color Contrast | Teks putih di atas tombol Gold (`#DF9621`) → rasio kontras **≈2.46:1**, gagal WCAG AA (butuh 4.5:1) pada 3 tombol: Register (Navbar desktop & mobile), Register Now (Hero) | **Kritis** |
| 8 | Interactive Elements | Tombol Hero tidak punya `type="button"` eksplisit (tidak konsisten dengan Navbar/FAQItem/Footer) | Rendah |
| 9 | Semantic HTML | Paragraf brand statement Footer berbahasa Indonesia tidak diberi atribut `lang="id"` (halaman `<html lang="en">`) | Rendah |

---

## 3. Perbaikan yang Diimplementasikan

### a. Menghapus duplikasi `<h1>` (Navbar.tsx)
Logo teks "Seri X Art" di Navbar diubah dari `<h1>` menjadi `<span>`. Alasan: heading level 1 harus unik dan merepresentasikan judul utama halaman — itu perannya "Create. Inspire. Compete." di Hero, bukan brand label yang berulang di setiap section. Untuk mempertahankan tampilan visual (font Fraunces), ditambahkan class utility `font-display` secara eksplisit, karena CSS global sebelumnya menerapkan font tersebut lewat selector `h1, h2` — begitu tag diubah, aturan itu tidak lagi berlaku otomatis.

### b. Memperbaiki lingkup landmark `<main>` (page.tsx, Hero.tsx)
Sebelumnya `<main>` hanya membungkus Hero, sehingga screen reader user yang lompat ke landmark "main" hanya sampai di Hero — About sampai FAQ berada di luar landmark utama. Sekarang `<main id="main-content">` di `page.tsx` membungkus Hero–FAQ, dan tag Hero diubah dari `<main>` menjadi `<section>` (isi & class tidak berubah). `<header>` (Navbar) dan `<footer>` (Footer) tetap sebagai sibling langsung agar tetap mendapat landmark role "banner" dan "contentinfo" yang benar.

Sekalian ditambahkan **skip link** ("Skip to main content") sebagai elemen pertama yang bisa di-*tab*, tersembunyi visual (`sr-only`) dan baru muncul saat difokus keyboard — pola standar agar pengguna keyboard/screen reader bisa melompati 5 item navigasi berulang di setiap kunjungan halaman.

### c. Memperbaiki `aria-controls` yang invalid (Navbar.tsx)
`<div id="mobile-menu">` sebelumnya hanya dirender saat `isMenuOpen === true` (conditional mount), sehingga saat menu tertutup, `aria-controls="mobile-menu"` di tombol toggle menunjuk ke ID yang tidak ada di DOM. Diperbaiki dengan selalu me-render `<div>` tersebut dan mengganti kondisi tampil/sembunyi memakai atribut native `hidden` — perilaku visual identik (100% `display:none` saat tertutup), tapi referensi ARIA sekarang selalu valid.

### d. Menandai ikon dekoratif dengan `aria-hidden="true"` (Navbar.tsx, FAQItem.tsx)
Ikon hamburger dan chevron FAQ murni dekoratif — makna aksesibelnya sudah diwakili oleh `aria-label` (hamburger) atau teks pertanyaan (FAQ). Menambahkan `aria-hidden="true"` mencegah screen reader mengumumkan elemen grafis yang redundan.

### e. Membungkus trigger FAQ dengan heading (FAQItem.tsx)
Sesuai WAI-ARIA Accordion Pattern, tombol pemicu tiap item FAQ dibungkus `<h3>`. Ini memungkinkan pengguna screen reader menavigasi antar pertanyaan lewat shortcut heading, bukan hanya lewat Tab satu per satu. Tidak ada style ditambahkan pada `<h3>` — karena Tailwind preflight menetralkan heading (margin/font-size mengikuti konteks), tampilan tidak berubah, dan levelnya konsisten dengan pola h2 (FAQ) → h3 (pertanyaan) yang sudah dipakai di Competition/Timeline/Gallery.

### f. Menambahkan focus state pada tombol Hero (Hero.tsx)
Tombol "Register Now" dan "Explore Competition" sebelumnya tidak punya style focus-visible sendiri. Ditambahkan `focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2` — pola yang identik dengan tombol lain di situs (Navbar, Footer, FAQItem) — sehingga fokus keyboard konsisten dan jelas terlihat di seluruh halaman.

### g. Memperbaiki kontras teks pada tombol Gold — perbaikan paling signifikan (Navbar.tsx, Hero.tsx)
Teks putih di atas background Gold (`#DF9621`) hanya mencapai kontras ≈2.46:1 — gagal total WCAG AA (minimal 4.5:1 untuk teks biasa). Ini kritis karena mengenai CTA utama situs (Register / Register Now).

Perbaikan: warna teks tombol diganti dari `text-white` menjadi `text-[#171D2D]` (Primary Background — warna resmi dari palet Seri X Art). Kombinasi ini menghasilkan kontras ≈6.8:1, lolos AA dengan baik. **Background Gold tidak disentuh sama sekali** — identitas visual "Gold CTA" tetap dipertahankan, hanya warna teks di atasnya yang disesuaikan memakai warna yang sudah ada di palet resmi. Ini sejalan dengan instruksi sprint: "Jangan mengubah warna kecuali memang diperlukan" — kontras 2.46:1 pada CTA utama adalah kasus yang jelas "memang diperlukan". Diterapkan pada 3 tombol: Register (Navbar desktop), Register (Navbar mobile), Register Now (Hero).

### h. Menambahkan `type="button"` pada tombol Hero (Hero.tsx)
Untuk konsistensi dengan tombol lain di situs dan mencegah ambiguitas semantik (default `<button>` tanpa `type` adalah `"submit"`).

### i. Menandai bahasa paragraf Footer (Footer.tsx)
Paragraf brand statement berbahasa Indonesia diberi `lang="id"`, agar screen reader (yang mengikuti `<html lang="en">`) tetap melafalkan teks tersebut dengan pengucapan Bahasa Indonesia yang benar, bukan dipaksa logika Bahasa Inggris.

---

## 4. File yang Diubah

- `src/app/page.tsx` — skip link, restrukturisasi `<main>`
- `src/components/Navbar.tsx` — fix duplikasi h1, fix `aria-controls`, `aria-hidden` ikon, fix kontras tombol Register
- `src/components/Hero.tsx` — ubah `<main>`→`<section>`, focus state, `type="button"`, fix kontras tombol Register Now
- `src/components/FAQItem.tsx` — heading wrapper `<h3>`, `aria-hidden` ikon chevron
- `src/components/Footer.tsx` — `lang="id"` pada paragraf Bahasa Indonesia

Verifikasi: `npx tsc --noEmit` bersih, `npx eslint .` bersih (tidak ada warning/error baru).

---

## 5. Remaining Accessibility Issues

- **Touch target nav link desktop** (`About`, `Competition`, dst. di Navbar) tidak punya padding vertikal eksplisit — tinggi klik-nya kemungkinan sedikit di bawah rekomendasi 24×24px (WCAG 2.5.8). Tidak diperbaiki karena solusinya (menambah `py-*`) berarti mengubah spacing, yang eksplisit di luar scope sprint ini.
- **Tombol Register (Navbar & Hero) masih tanpa destination fungsional** — ini sudah tercatat di `PROJECT_STATE.md` sebagai keputusan produk yang belum dibuat, bukan bug accessibility. Secara accessibility tombolnya sudah benar (fokusabel, punya label jelas, kontras sudah diperbaiki); begitu destination/aksi ditentukan pada sprint lain, pastikan tetap mempertahankan atribut `type="button"` + focus state yang sudah ada.
- **Footer social links (`Instagram`/`TikTok`/`YouTube`) masih `href="#"` placeholder** — juga sudah tercatat sebelumnya di `PROJECT_STATE.md`, menunggu URL asli dari user; bukan isu accessibility.

Tidak ada blocker teknis yang menghalangi penyelesaian sprint ini.

---

## 6. Future Improvements (di luar scope Sprint 4 — tidak diimplementasikan)

- **SEO:** `metadata` di `layout.tsx` masih default template Next.js ("Create Next App") — perlu di-custom untuk Seri X Art (title, description, Open Graph, dll).
- **Performance:** belum ada audit terhadap ukuran gambar gallery (`gallery-1.jpg`–`gallery-6.jpg`), lazy-loading strategy, atau Core Web Vitals.
- **Dead code cleanup:** `SectionHeader.tsx` dan `FeatureCard.tsx` masih ada di codebase tapi tidak dipakai di manapun — keputusan hapus/simpan belum dibuat (bukan isu accessibility, murni maintainability).
- **Scroll-spy / `aria-current`:** highlight menu Navbar sesuai posisi scroll aktif belum diimplementasikan — sengaja ditunda sejak sesi sebelumnya; ini murni fitur UX/interaksi, bisa masuk sprint terpisah (bisa disentuh accessibility juga lewat `aria-current="page"` / `"true"`, tapi lebih tepat digabung dengan pekerjaan scroll-spy itu sendiri).
- **Form registrasi nyata** untuk CTA "Register" — keputusan produk, di luar scope accessibility murni.

---

## 7. Sprint Evaluation

**Sprint 4 (Accessibility Audit) dapat dianggap SELESAI** untuk scope yang didefinisikan di awal sprint. Seluruh 7 kategori (Semantic HTML, Images, Interactive Elements, Keyboard Navigation, ARIA, Color Contrast, Form & CTA) sudah diaudit, dan semua temuan yang tergolong "diperlukan" sudah diperbaiki tanpa menyentuh layout/spacing/typography/desain.

Tidak ada blocker yang menghalangi lanjut ke sprint berikutnya. Satu-satunya catatan: ada finding kecil yang sengaja tidak diperbaiki (touch target nav link) karena solusinya akan melanggar batasan "jangan ubah spacing" — ini murni keputusan scope, bukan pekerjaan yang tertunda/gagal.

**Rekomendasi:** sebelum lanjut ke sprint UI/desain berikutnya, disarankan melakukan quick manual test dengan keyboard-only navigation (Tab melalui seluruh halaman) dan screen reader (NVDA/VoiceOver) sekali untuk memvalidasi hasil audit ini secara langsung — sejauh ini verifikasi baru lewat pembacaan kode + type-check/lint, belum manual testing di device/AT nyata.
