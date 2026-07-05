type TimelineItemProps = {
  title: string;
  date: string;
  description: string;
  isActive: boolean;
};

export default function TimelineItem({
  title,
  date,
  description,
  isActive,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <div
        className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
          isActive
            ? "border-[#DF9621] bg-[#DF9621]"
            : "border-white/20 bg-[#171D2D]"
        }`}
      />

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A0A3B1]">
        {date}
      </p>

      <h3
        className={`mt-3 text-2xl font-bold sm:text-3xl ${
          isActive ? "text-white" : "text-white/80"
        }`}
      >
        {title}
      </h3>

      <p className="mt-3 max-w-xl leading-7 text-[#A0A3B1]">
        {description}
      </p>
    </div>
  );
}
