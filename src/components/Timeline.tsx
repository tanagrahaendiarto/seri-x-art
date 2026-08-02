import TimelineItem from "@/components/TimelineItem";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";

export default function Timeline() {
  const timelineSteps = [
    {
      title: "Open Registration",
      date: "20–29 Agustus 2026",
      description:
        "Pendaftaran seluruh cabang lomba dan rangkaian Seri X Art 2026.",
      isActive: true,
    },
    {
      title: "Pra-Event",
      date: "26–28 Agustus 2026",
      description: "Rangkaian pembuka menuju Seri X Art Exhibition 2026.",
      isActive: false,
    },
    {
      title: "Opening Ceremony",
      date: "30 Agustus 2026",
      description: "Pembukaan resmi seluruh rangkaian Seri X Art Exhibition.",
      isActive: false,
    },
    {
      title: "Technical Meeting",
      date: "31 Agustus 2026",
      description: "Penyampaian informasi teknis kepada seluruh peserta.",
      isActive: false,
    },
    {
      title: "Main Event",
      date: "01–13 September 2026",
      description: "Kompetisi, pameran, dan berbagai aktivitas utama.",
      isActive: false,
    },
    {
      title: "Closing Ceremony",
      date: "20 September 2026",
      description:
        "Penutupan dan pengumuman apresiasi seluruh rangkaian kegiatan.",
      isActive: false,
    },
  ];

  return (
    <section
      id="timeline"
      className="relative isolate scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-14 text-white sm:py-20 lg:py-24"
    >
      <SectionOrnament section="timeline" />

      <Reveal className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            Timeline
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Competition Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A0A3B1]">
            Ikuti setiap tahapan kompetisi Seri X Art, mulai dari registrasi
            hingga pengumuman pemenang.
          </p>
        </div>

        <div className="relative mt-8 max-w-3xl sm:mt-12 lg:mt-16">
          {/* Journey line */}
          <div className="absolute bottom-2 left-2 top-2 w-px bg-white/10" />

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {timelineSteps.map((timelineStep) => (
              <TimelineItem
                key={timelineStep.title}
                title={timelineStep.title}
                date={timelineStep.date}
                description={timelineStep.description}
                isActive={timelineStep.isActive}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
