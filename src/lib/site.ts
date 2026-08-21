// TODO: Replace with the real production domain before deploying.
export const siteUrl = "https://seri-x-art.example.com";

export const siteName = "Seri X Art";

// Replace with the event's published Google Form URL when it is available.
// Keeping it here ensures every competition uses the same registration entry point.
export const registrationUrl = "https://forms.gle/";

// Official guidebooks for Seri X Art Exhibition 2026, keyed by Open
// Recruitment category — keeping them here ensures every detail page uses the
// right link and each category can be updated independently.
export const guidebookUrls = {
  "brand-ambassador":
    "https://drive.google.com/file/d/1tbsT_trsFhVvcuabIxK77w94A4Of7NWl/view?usp=drivesdk",
  "sera-volunteer":
    "https://drive.google.com/file/d/1awWLNckRNPGAN3d1DmxdRcU3M8km3CF-/view?usp=drivesdk",
  "oprec-perlombaan":
    "https://drive.google.com/file/d/1wQVHwEhz5e05mYjacUK53U5b05qfHmdX/view?usp=sharing",
} as const;

export type GuidebookKey = keyof typeof guidebookUrls;

// Official Linktree for Seri X Art Exhibition 2026 — destination for the
// primary Navbar CTA.
export const linktreeUrl =
  "https://linktr.ee/serixart2026?utm_source=linktree_profile_share&ltsid=2ad40c99-6c1a-4b88-9d08-ee43f9d5c79b";

export const footer = {
  cta: {
    title: "Masih memiliki pertanyaan?",
    description:
      "Hubungi kami melalui narahubung atau media sosial resmi Seri X Art Exhibition 2026.",
  },
  brand: {
    name: "Seri X Art Exhibition 2026",
    description:
      "Seri X Art Exhibition 2026 merupakan wadah berkarya, berkompetisi, dan mengapresiasi seni bagi mahasiswa KM PKU IPB melalui tema Wonderland Nusantara.",
    tagline: "Merayakan kreativitas, menghidupkan budaya.",
  },
  navigation: [
    { label: "Beranda", href: "#" },
    { label: "Tentang", href: "#about" },
    { label: "Open Recruitment", href: "#open-recruitment" },
    { label: "Timeline", href: "#timeline" },
    { label: "Kilas Balik", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],
  contact: {
    name: "Cherryl Madina",
    whatsapp: "+62 895-3220-17513",
    whatsappHref: "https://wa.me/62895322017513",
    email: "serixart8@gmail.com",
    emailHref: "mailto:serixart8@gmail.com",
  },
  socials: [
    {
      label: "Instagram",
      handle: "@serixart_ipb",
      href: "https://instagram.com/serixart_ipb",
      icon: "instagram",
    },
    {
      label: "TikTok",
      handle: "@sxae2026",
      href: "https://www.tiktok.com/@sxae2026",
      icon: "tiktok",
    },
    {
      label: "YouTube",
      handle: "@ormawaeksekutifpkuipb",
      href: "https://youtube.com/@ormawaeksekutifpkuipb",
      icon: "youtube",
    },
  ],
  copyright: "© 2026 Seri X Art Exhibition. All Rights Reserved.",
  credit: "Website developed by Biro Riset dan Teknologi",
} as const;
