import Image from "next/image";
import type { Competition } from "@/data/competitions";
import { registrationUrl } from "@/lib/site";

type CompetitionDetailContentProps = {
  competition: Competition;
  priority?: boolean;
};

export default function CompetitionDetailContent({
  competition,
  priority = false,
}: CompetitionDetailContentProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#171D2D] shadow-2xl shadow-black/20 lg:order-2">
        <div className="relative aspect-4/5">
          <Image
            src={competition.image}
            alt={`${competition.title} competition poster`}
            fill
            priority={priority}
            sizes="(max-width:1024px) 100vw, (max-width:1280px) 40vw, 28rem"
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
          {competition.category}
        </p>
        <h1
          id="competition-title"
          className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          {competition.title}
        </h1>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">About Competition</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#A0A3B1]">
            {competition.description}
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">Participant</h2>
          <p className="mt-3 text-lg leading-8 text-[#F1D2B1]">Individual</p>
        </div>

        <a
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-[#DF9621] px-7 py-3.5 text-sm font-semibold text-[#171D2D] transition-transform duration-300 hover:scale-105 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A] lg:px-8 lg:py-4"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
