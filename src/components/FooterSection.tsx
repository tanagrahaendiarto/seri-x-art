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
      <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
        {title}
      </h3>

      <div className="space-y-3 text-[#A0A3B1]">
        {children}
      </div>
    </div>
  );
}