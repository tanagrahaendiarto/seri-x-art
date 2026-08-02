import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";

export default function Competition() {
  const competitions = [
    {
      title: "Digital Art",
      description:
        "Ciptakan ilustrasi digital yang memukau menggunakan berbagai alat kreatif favoritmu.",
    },
    {
      title: "Photography",
      description:
        "Abadikan momen bermakna melalui sudut pandangmu yang unik.",
    },
    {
      title: "Illustration",
      description:
        "Ubah ide menjadi ilustrasi ekspresif dengan gaya seni khasmu sendiri.",
    },
    {
      title: "Painting",
      description: "Tampilkan teknik melukis tradisional maupun kontemporer.",
    },
  ];

  return (
    <section
      id="competition"
      className="relative isolate scroll-mt-20 bg-[linear-gradient(to_bottom,#20283A_80%,#171D2D)] py-14 text-white sm:py-20 lg:py-24"
    >
      <SectionOrnament section="competition" />

      <Reveal className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            Competitions
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Choose Your Category
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A0A3B1]">
            Temukan berbagai kategori lomba yang dirancang untuk menantang
            kreativitasmu dan menunjukkan bakat seni terbaikmu.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-16 sm:mt-12 md:grid-cols-2 lg:mt-16">
          {competitions.map((competition, index) => (
            <div
              key={competition.title}
              className={`border-t border-white/10 py-8 lg:py-10 ${
                index % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold sm:text-3xl">
                {competition.title}
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-[#A0A3B1]">
                {competition.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
