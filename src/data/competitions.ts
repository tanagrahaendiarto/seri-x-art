export type Competition = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const competitions: Competition[] = [
  {
    slug: "digital-painting",
    title: "Digital Painting",
    category: "Illustration",
    description:
      "Hadirkan dunia imajinatif dan karakter ekspresif melalui gaya digital painting khasmu. Eksplorasi warna, komposisi, dan storytelling dalam karya yang sepenuhnya mencerminkan dirimu.",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    slug: "future-vision",
    title: "Future Vision",
    category: "Concept Art",
    description:
      "Bayangkan apa yang akan terjadi selanjutnya. Ciptakan konsep visual yang kuat, mengubah ide berani tentang masa depan menjadi dunia yang bisa dimasuki dan diingat oleh siapa pun yang melihatnya.",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    slug: "cyber-dreams",
    title: "Cyber Dreams",
    category: "Digital Art",
    description:
      "Jelajahi ruang antara teknologi dan imajinasi melalui karya seni digital dengan sudut pandang yang jelas, suasana yang kuat, dan bahasa visual kontemporer.",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    slug: "creative-motion",
    title: "Creative Motion",
    category: "Animation",
    description:
      "Gunakan gerakan, ritme, dan storytelling visual untuk menciptakan karya animasi yang menarik perhatian dan memberi ruang bagi ide kreatifmu untuk berkembang.",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    slug: "modern-sculpture",
    title: "Modern Sculpture",
    category: "3D Art",
    description:
      "Bentuk karya tiga dimensi kontemporer yang menyeimbangkan bentuk, material, dan konsep. Tunjukkan bagaimana sudut pandangmu mampu mengubah ruang menjadi pernyataan artistik.",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    slug: "visual-story",
    title: "Visual Story",
    category: "Photography",
    description:
      "Ceritakan kisah yang membekas melalui satu bidikan foto. Bingkai sudut pandang yang jujur, momen bermakna, atau detail tak terduga dengan niat dan kejelasan yang kuat.",
    image: "/images/gallery/gallery-6.jpg",
  },
];

export function getCompetition(slug: string) {
  return competitions.find((competition) => competition.slug === slug);
}
