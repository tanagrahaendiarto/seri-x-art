import Reveal from "@/components/Reveal";

export default function About() {
  const highlights = [
    {
      title: "National Competition",
      description:
        "Compete with talented artists from various regions and showcase your creativity.",
    },
    {
      title: "Multiple Categories",
      description:
        "Explore diverse competition categories designed for different artistic skills.",
    },
    {
      title: "Open for Everyone",
      description:
        "Join creators from everywhere and become part of a growing creative community.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-32 text-white"
    >
      <Reveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-12 lg:gap-12">
        {/* Narrative */}
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Where Creativity Meets Innovation
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A0A3B1]">
            Seri X Art is a modern art competition platform created to
            inspire young creators, encourage artistic innovation, and
            connect talented individuals through meaningful competitions.
          </p>

          <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-[#F1D2B1]">
            More than a competition — a stage where imagination becomes
            exhibition.
          </p>

          {/* Editorial list */}
          <dl className="mt-16 divide-y divide-white/10 border-t border-white/10">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-3 sm:gap-8"
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
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#A171D5]/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#DF9621]/20 blur-3xl" />
        </div>
      </Reveal>
    </section>
  );
}
