// TODO: Replace with the real production domain before deploying.
export const siteUrl = "https://seri-x-art.example.com";

export const siteName = "Seri X Art";

// Replace with the event's published Google Form URL when it is available.
// Keeping it here ensures every competition uses the same registration entry point.
export const registrationUrl = "https://forms.gle/";

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
      handle: "@sxae26",
      href: "https://tiktok.com/@sxae26",
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
