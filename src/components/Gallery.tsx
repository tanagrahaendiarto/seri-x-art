import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/components/galleryItems";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(to_bottom,#20283A_80%,#171D2D)] py-32 text-white"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#A171D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DF9621]/10 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Artwork Showcase
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A0A3B1]">
            Explore a curated collection of creative artworks submitted by
            talented participants from various artistic disciplines.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.title}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
