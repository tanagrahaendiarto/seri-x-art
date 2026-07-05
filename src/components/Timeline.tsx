import TimelineItem from "@/components/TimelineItem";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  const timelineSteps = [
    {
      title: "Registration",
      date: "July 1 - July 15",
      description: "Sign up and secure your spot in the competition.",
      isActive: true,
    },
    {
      title: "Submission",
      date: "July 16 - July 25",
      description: "Submit your best work within your chosen category.",
      isActive: false,
    },
    {
      title: "Judging",
      date: "July 26 - July 30",
      description: "Our curators review every submission with care.",
      isActive: false,
    },
    {
      title: "Winner",
      date: "August 1",
      description: "Winners are announced and celebrated across all categories.",
      isActive: false,
    },
  ];

  return (
    <section
      id="timeline"
      className="scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-32 text-white"
    >
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

        <div className="relative mt-20 max-w-3xl">
          {/* Journey line */}
          <div className="absolute bottom-2 left-2 top-2 w-px bg-white/10" />

          <div className="flex flex-col gap-16">
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
