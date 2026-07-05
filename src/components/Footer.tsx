import FooterSection from "./FooterSection";
import Reveal from "@/components/Reveal";

const navigation = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Competition", href: "#competition" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const contact = [
  { label: "serixart@email.com", href: "mailto:serixart@email.com" },
  { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
  { label: "Bogor, Indonesia", href: null },
];

const socialMedia = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

const linkClassName =
  "transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]";

export default function Footer() {
  return (
    <footer className="bg-[#20283A] text-white">
      <Reveal className="mx-auto max-w-7xl px-8 py-32">
        {/* Brand statement */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold sm:text-5xl">Seri X Art</h2>

          <p lang="id" className="mt-6 text-lg leading-8 text-[#A0A3B1]">
            Seri X Art merupakan kompetisi seni modern yang menjadi wadah
            bagi generasi muda untuk berkarya, berkolaborasi, dan
            menunjukkan kreativitas terbaiknya.
          </p>

          <p className="mt-6 text-xl font-medium leading-relaxed text-[#F1D2B1]">
            Where every stroke tells a story, and every artist finds
            their stage.
          </p>
        </div>

        {/* Links */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <FooterSection title="Navigation">
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Contact">
            <ul className="space-y-3">
              {contact.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className={linkClassName}>
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Follow Us">
            <ul className="space-y-3">
              {socialMedia.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-[#A0A3B1] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Seri X Art. All Rights Reserved.</p>
          <p>Developed by Biro Riset dan Teknologi</p>
        </div>
      </Reveal>
    </footer>
  );
}
