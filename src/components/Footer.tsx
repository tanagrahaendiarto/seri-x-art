import Image from "next/image";
import FooterSection from "./FooterSection";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";
import { footer } from "@/lib/site";

// Color is applied per usage — pure white only for primary elements,
// secondary (#A0A3B1) for supporting links, inherited otherwise. Hover
// always resolves to gold so white stays reserved for the brand hierarchy.
const linkClassName =
  "transition-colors duration-300 hover:text-[#DF9621] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]";

// External links (socials, WhatsApp, email) open in a new tab; internal
// anchors keep the single-page navigation behavior.
const externalLinkAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// Monochrome outline icons in the lucide style — kept inline so the footer
// adds no dependency. Stroke inherits currentColor: white at rest, gold on
// hover, via the shared `footerIconClassName` below.
type IconProps = { className?: string };

const iconBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...iconBaseProps} className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...iconBaseProps} className={className}>
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...iconBaseProps} className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function MessageCircleIcon({ className }: IconProps) {
  return (
    <svg {...iconBaseProps} className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg {...iconBaseProps} className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
} as const;

// White at rest, ~90% opacity; gold accent on hover (text turns white).
const footerIconClassName =
  "h-4 w-4 text-white opacity-90 transition-colors duration-300 group-hover:text-[#DF9621]";

export default function Footer() {
  return (
    <footer className="relative isolate border-t border-white/10 bg-[#20283A] text-[#A0A3B1]">
      <SectionOrnament section="footer" />

      <Reveal className="mx-auto max-w-7xl px-8">
        {/* CTA — the footer's focal point */}
        <div className="mx-auto max-w-2xl py-20 text-center sm:py-24 lg:py-28">
          {/* Gold ornament */}
          <div
            aria-hidden="true"
            className="mx-auto mb-8 flex w-fit items-center gap-3"
          >
            <span className="h-px w-10 bg-[#DF9621]/70" />
            <svg
              viewBox="0 0 8 8"
              className="h-2 w-2 text-[#DF9621]"
              fill="currentColor"
            >
              <rect width="8" height="8" transform="rotate(45 4 4)" />
            </svg>
            <span className="h-px w-10 bg-[#DF9621]/70" />
          </div>

          <h2 className="font-display text-3xl font-semibold leading-tight text-balance text-white/95 sm:text-4xl lg:text-5xl">
            {footer.cta.title}
          </h2>

          <p
            lang="id"
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#A0A3B1] sm:mt-7"
          >
            {footer.cta.description}
          </p>
        </div>

        {/* Brand — the focus of the footer */}
        <div className="pb-14 lg:pb-20">
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="Seri X Art Logo"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 lg:h-20 lg:w-20"
            />

            <h3 className="font-display text-3xl font-semibold leading-tight text-balance text-white md:text-4xl">
              {footer.brand.name}
            </h3>
          </div>

          <p
            lang="id"
            className="mt-6 max-w-xl text-base leading-7 text-[#A0A3B1] text-pretty"
          >
            {footer.brand.description}
          </p>

          <p className="mt-5 text-sm font-medium tracking-wide text-[#DF9621] text-pretty">
            {footer.brand.tagline}
          </p>
        </div>

        {/* Columns — supporting information */}
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-3 sm:gap-8 lg:gap-12 lg:pb-20">
          <FooterSection title="Navigation">
            <ul className="space-y-4">
              {footer.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${linkClassName} text-sm text-[#A0A3B1] hover:underline decoration-[#DF9621]/70 underline-offset-8`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <div>
            <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
              Contact
            </h4>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/55">
                  Narahubung
                </p>
                <p className="mt-1.5 text-sm font-medium text-white/90">
                  {footer.contact.name}
                </p>
              </div>

              <a
                href={footer.contact.whatsappHref}
                className={`${linkClassName} group flex items-center gap-3 text-sm font-medium text-white/90`}
                {...externalLinkAttrs}
              >
                <MessageCircleIcon className={footerIconClassName} />
                <span>{footer.contact.whatsapp}</span>
              </a>

              <a
                href={footer.contact.emailHref}
                className={`${linkClassName} group flex items-center gap-3 text-sm font-medium text-white/90`}
                {...externalLinkAttrs}
              >
                <MailIcon className={footerIconClassName} />
                <span>{footer.contact.email}</span>
              </a>
            </div>
          </div>

          <FooterSection title="Follow Us">
            <ul className="space-y-4">
              {footer.socials.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`${linkClassName} group flex items-center gap-3 text-sm text-[#A0A3B1]`}
                      {...externalLinkAttrs}
                    >
                      <Icon className={footerIconClassName} />
                      <span>{item.handle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </FooterSection>
        </div>

        {/* Closing quote — closes the landing page experience */}
        <p className="pb-6 text-center text-xs italic text-white/50">
          “Setiap karya memiliki cerita. Saatnya ceritamu dimulai.”
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-[#A0A3B1] opacity-80 sm:flex-row sm:items-center sm:justify-between lg:py-8">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </Reveal>
    </footer>
  );
}
