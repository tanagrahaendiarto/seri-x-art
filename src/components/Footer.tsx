import Image from "next/image";
import FooterSection from "./FooterSection";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";
import { footer } from "@/lib/site";

const linkClassName =
  "text-sm text-[#A0A3B1] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]";

// External links (socials, WhatsApp, email) open in a new tab; internal
// anchors keep the single-page navigation behavior.
const externalLinkAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function Footer() {
  return (
    <footer className="relative isolate border-t border-white/10 bg-[#20283A] text-white">
      <SectionOrnament section="footer" />

      <Reveal className="mx-auto max-w-7xl px-8">
        {/* CTA — transition into the footer, not a standalone call-to-action */}
        <div className="mx-auto max-w-2xl py-16 text-center sm:py-20 lg:py-24">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {footer.cta.title}
          </h2>

          <p
            lang="id"
            className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#A0A3B1] sm:mt-5"
          >
            {footer.cta.description}
          </p>
        </div>

        {/* Brand — the focus of the footer */}
        <div className="pb-12 lg:pb-16">
          <div className="flex items-center gap-5">
            <Image
              src="/logo.png"
              alt="Seri X Art Logo"
              width={80}
              height={80}
              className="h-16 w-16 lg:h-20 lg:w-20"
            />

            <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              {footer.brand.name}
            </h3>
          </div>

          <p lang="id" className="mt-5 max-w-xl text-base leading-7 text-[#A0A3B1]">
            {footer.brand.description}
          </p>

          <p className="mt-4 text-sm font-medium tracking-wide text-[#DF9621]">
            {footer.brand.tagline}
          </p>
        </div>

        {/* Columns — supporting information */}
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-3 sm:gap-8 lg:gap-12 lg:pb-16">
          <FooterSection title="Navigation">
            <ul className="space-y-3.5">
              {footer.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A0A3B1]">
                  Narahubung
                </p>
                <p className="mt-1.5 text-base font-medium text-white">
                  {footer.contact.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A0A3B1]">
                  WhatsApp
                </p>
                <a
                  href={footer.contact.whatsappHref}
                  className={`${linkClassName} mt-1.5 block text-base font-medium text-white`}
                  {...externalLinkAttrs}
                >
                  {footer.contact.whatsapp}
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A0A3B1]">
                  Email
                </p>
                <a
                  href={footer.contact.emailHref}
                  className={`${linkClassName} mt-1.5 block text-base font-medium text-white`}
                  {...externalLinkAttrs}
                >
                  {footer.contact.email}
                </a>
              </div>
            </div>
          </div>

          <FooterSection title="Follow Us">
            <ul className="space-y-3.5">
              {footer.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={linkClassName}
                    {...externalLinkAttrs}
                  >
                    {item.handle}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-[#A0A3B1] sm:flex-row sm:items-center sm:justify-between lg:py-8">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </Reveal>
    </footer>
  );
}
