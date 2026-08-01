import TimelineItem from "@/components/TimelineItem";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";

export default function Timeline() {
  const timelineSteps = [
    {
      title: "Open Registration",
      date: "20–29 Agustus 2026",
      description:
        "Periode pendaftaran resmi seluruh rangkaian Seri X Art Exhibition 2026. Peserta dapat memilih kategori lomba yang diinginkan dan melengkapi proses registrasi.",
      isActive: true,
    },
    {
      title: "Pra-Event",
      date: "26–28 Agustus 2026",
      description:
        "Rangkaian kegiatan pra-acara sebagai pembuka menuju Seri X Art Exhibition 2026 serta membangun antusiasme peserta dan pengunjung.",
      isActive: false,
    },
    {
      title: "Opening Ceremony",
      date: "30 Agustus 2026",
      description:
        "Pembukaan resmi Seri X Art Exhibition 2026 sekaligus dimulainya seluruh rangkaian kegiatan Wonderland Nusantara.",
      isActive: false,
    },
    {
      title: "Technical Meeting",
      date: "31 Agustus 2026",
      description:
        "Penyampaian informasi teknis, peraturan, dan mekanisme pelaksanaan kepada seluruh peserta sesuai cabang lomba masing-masing.",
      isActive: false,
    },
    {
      title: "Main Event",
      date: "01–13 September 2026",
      description:
        "Pelaksanaan seluruh kompetisi, pameran, pertunjukan, serta berbagai aktivitas utama Seri X Art Exhibition 2026.",
      isActive: false,
    },
    {
      title: "Closing Ceremony",
      date: "20 September 2026",
      description:
        "Penutupan resmi Seri X Art Exhibition 2026, pengumuman apresiasi, serta perayaan seluruh rangkaian kegiatan.",
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
            Follow every stage of the Seri X Art competition from
            registration until the winner announcement.
          </p>
        </div>

        <div className="relative mt-8 max-w-3xl sm:mt-12 lg:mt-16">
          {/* Journey line */}
          <div className="absolute bottom-2 left-2 top-2 w-px bg-white/10" />

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
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
