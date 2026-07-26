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
      "Bring imaginative worlds and expressive characters to life through your distinct digital painting practice. Explore colour, composition, and storytelling in a work that feels entirely your own.",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    slug: "future-vision",
    title: "Future Vision",
    category: "Concept Art",
    description:
      "Imagine what comes next. Create a compelling visual concept that turns a bold idea for the future into a world viewers can step into and remember.",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    slug: "cyber-dreams",
    title: "Cyber Dreams",
    category: "Digital Art",
    description:
      "Explore the space between technology and imagination through a digital artwork with a clear point of view, striking atmosphere, and contemporary visual language.",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    slug: "creative-motion",
    title: "Creative Motion",
    category: "Animation",
    description:
      "Use movement, rhythm, and visual storytelling to create an animated piece that captures attention and gives your creative idea room to unfold.",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    slug: "modern-sculpture",
    title: "Modern Sculpture",
    category: "3D Art",
    description:
      "Shape a contemporary three-dimensional work that balances form, material, and concept. Show how your perspective can transform space into an artistic statement.",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    slug: "visual-story",
    title: "Visual Story",
    category: "Photography",
    description:
      "Tell a resonant story through a single photograph. Frame an honest perspective, a meaningful moment, or an unexpected detail with intention and clarity.",
    image: "/images/gallery/gallery-6.jpg",
  },
];

export function getCompetition(slug: string) {
  return competitions.find((competition) => competition.slug === slug);
}
