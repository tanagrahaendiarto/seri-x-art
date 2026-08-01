export type OpenRecruitmentItem = {
  slug: string;
  category: string;
  title: string;
  description: string[];
  image: string;
  cta: string;
  href?: string;
  locked?: boolean;
};

export const openRecruitment: OpenRecruitmentItem[] = [
  {
    slug: "brand-ambassador",
    category: "OPEN RECRUITMENT",
    title: "Brand Ambassador",
    description: [
      "Brand Ambassador Seri X Art Exhibition 2026 merupakan representasi sekaligus wajah dari Seri X Art Exhibition 2026 yang berperan sebagai penghubung antara panitia dan peserta, serta mempromosikan acara secara kreatif kepada mahasiswa.",
      "Program ini menjadi wadah untuk mengembangkan kemampuan komunikasi, memperluas relasi, meningkatkan kreativitas, dan membangun personal branding.",
      "Yuk, jadilah bagian dari perjalanan Seri X Art Exhibition 2026 dan tunjukkan pesonamu sebagai wajah yang menginspirasi di balik kemeriahan Wonderland Nusantara!",
    ],
    image: "/images/gallery/ba.png",
    cta: "Registrasi",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe8VAwmnNao_ZsAZxeWB55sxqgMt821NIJTyBVaf9ndCqhAww/viewform",
  },
  {
    slug: "sera-volunteer",
    category: "OPEN RECRUITMENT",
    title: "SERA (Volunteer)",
    description: [
      "SERA (Seri X Art Volunteer) merupakan tim volunteer yang berperan dalam mendukung kelancaran seluruh rangkaian Seri X Art Exhibition 2026.",
      "Sebagai bagian dari wajah di balik acara, SERA bertugas menciptakan pengalaman terbaik bagi peserta dan pengunjung melalui kerja sama, pelayanan, dan semangat kolaborasi.",
      "Program ini menjadi wadah untuk mengembangkan kemampuan kepemimpinan, komunikasi, kerja sama tim, serta memperluas relasi dan pengalaman kepanitiaan.",
      "Yuk, bergabung menjadi SERA dan jadilah bagian dari tim yang mewujudkan keajaiban Wonderland Nusantara di Seri X Art Exhibition 2026!",
    ],
    image: "/images/gallery/sera.png",
    cta: "Registrasi",
    href: "https://forms.gle/LaRznsbxQFyYZpdd7",
  },
  {
    slug: "oprec-perlombaan",
    category: "OPEN RECRUITMENT",
    title: "Perlombaan",
    description: [
      "Pendaftaran seluruh cabang lomba Seri X Art Exhibition 2026 akan segera dibuka.",
      "Informasi mengenai kategori lomba, guidebook, persyaratan, serta jadwal pendaftaran akan diumumkan melalui website dan media sosial resmi Seri X Art Exhibition 2026.",
    ],
    image: "/images/gallery/lock.png",
    cta: "Segera Dibuka",
    locked: true,
  },
];

export function getOpenRecruitmentItem(slug: string) {
  return openRecruitment.find((item) => item.slug === slug);
}
