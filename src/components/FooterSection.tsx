import { ReactNode } from "react";

type FooterSectionProps = {
  title: string;
  children: ReactNode;
};

export default function FooterSection({
  title,
  children,
}: FooterSectionProps) {
  return (
    <div>
      <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
        {title}
      </h4>

      <div className="space-y-4 text-[#A0A3B1]">
        {children}
      </div>
    </div>
  );
}