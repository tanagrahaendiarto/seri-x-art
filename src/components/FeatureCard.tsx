type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-zinc-900">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-3xl transition-colors duration-300 group-hover:bg-violet-500">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}