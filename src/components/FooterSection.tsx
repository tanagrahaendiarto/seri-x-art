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
      <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h4>

      <div className="space-y-3.5 text-[#A0A3B1]">
        {children}
      </div>
    </div>
  );
}