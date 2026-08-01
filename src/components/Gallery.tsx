import GalleryCard from "@/components/GalleryCard";
import { openRecruitment } from "@/data/openRecruitment";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";

export default function Gallery() {
  return (
    <section
      id="open-recruitment"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[linear-gradient(to_bottom,#20283A_80%,#171D2D)] py-14 text-white sm:py-20 lg:py-24"
    >
      <SectionOrnament section="open-recruitment" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#A171D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DF9621]/10 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            Open Recruitment
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Open Recruitment
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A0A3B1]">
            Jadilah bagian dari Seri X Art Exhibition 2026 sebagai Brand
            Ambassador, SERA (Volunteer), atau nantikan pembukaan pendaftaran
            lomba.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {openRecruitment.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
