type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        {title}
      </h2>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}