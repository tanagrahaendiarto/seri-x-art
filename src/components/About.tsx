import AboutMascot from "@/components/AboutMascot";
import Reveal from "@/components/Reveal";

export default function About() {
  const highlights = [
    {
      title: "Ekspresi Kreatif",
      description:
        "Ruang bagi mahasiswa menuangkan ide dan bakat lewat beragam cabang seni.",
    },
    {
      title: "7 Kategori Lomba",
      description:
        "Textile Painting, Fashion Show, Band, Tari Kreasi, Music Video, Twibbon, hingga Tenant.",
    },
    {
      title: "Perayaan Budaya",
      description:
        "Kekayaan budaya Nusantara hadir lewat kompetisi, kolaborasi, dan apresiasi karya mahasiswa.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-14 text-white sm:py-20 lg:py-24"
    >
      <Reveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-12 lg:gap-12">
        {/* Narrative */}
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Ruang Bagi Kreativitas
            <br />
            dan Budaya Nusantara
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A0A3B1]">
            Seri X Art Exhibition 2026 adalah pagelaran seni dan budaya
            tahunan, hadir sebagai bagian dari Dies Natalis IPB University. Di
            sinilah mahasiswa KM PKU IPB University, khususnya Angkatan 63,
            menemukan ruang untuk berekspresi, berkarya, dan diapresiasi.
          </p>

          <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-[#F1D2B1]">
            Mengusung tema Wonderland Nusantara, ajang ini merayakan
            kreativitas, kolaborasi, dan kekayaan budaya Indonesia dalam satu
            panggung seni.
          </p>

          {/* Editorial list */}
          <dl className="mt-8 divide-y divide-white/10 border-t border-white/10 sm:mt-10 lg:mt-12">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-3 sm:gap-8 lg:py-8"
              >
                <dt className="text-xl font-semibold text-white sm:col-span-1">
                  {highlight.title}
                </dt>
                <dd className="text-base leading-7 text-[#A0A3B1] sm:col-span-2">
                  {highlight.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div
          aria-hidden="true"
          className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#20283A] to-[#171D2D] lg:col-span-5"
        >
          <AboutMascot />
        </div>
      </Reveal>
    </section>
  );
}
