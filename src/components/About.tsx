import AboutMascot from "@/components/AboutMascot";
import Reveal from "@/components/Reveal";

export default function About() {
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
            Seri X Art Exhibition 2026 adalah pagelaran seni dan budaya tahunan,
            hadir sebagai bagian dari Dies Natalis IPB University. Di sinilah
            mahasiswa KM PKU IPB University, khususnya Angkatan 63, menemukan
            ruang untuk berekspresi, berkarya, dan diapresiasi.
          </p>

          <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-[#F1D2B1]">
            Mengusung tema Wonderland Nusantara, ajang ini merayakan
            kreativitas, kolaborasi, dan kekayaan budaya Indonesia dalam satu
            panggung seni.
          </p>
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
