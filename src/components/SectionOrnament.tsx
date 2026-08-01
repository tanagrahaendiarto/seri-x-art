type OrnamentMotif = "parang" | "kawung" | "megaMendung" | "floral" | "geometris";
type OrnamentCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type OrnamentSection =
  | "hero"
  | "about"
  | "competition"
  | "timeline"
  | "open-recruitment"
  | "faq"
  | "footer";

type Placement = {
  corner: OrnamentCorner;
  motif: OrnamentMotif;
  opacity: number;
  color: string;
};

const CORNER_POSITION_CLASSES: Record<OrnamentCorner, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

// Origin the fade radiates from — matches each corner so the motif reads as
// rooted in the edge and dissolves inward, never as a hard-edged sticker.
const CORNER_FADE_ORIGIN: Record<OrnamentCorner, string> = {
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
};

// Tone-on-tone only, navy-dominant — purple/gold are desaturated toward the
// backdrop itself so they read as warmth, not as a distinct hue competing
// with the navy. Never pure white, per the "emboss on premium paper" brief.
const NAVY_TINT = "#4A5578";
const PURPLE_TINT = "#5D5480";
const GOLD_TINT = "#6B5A3E";

// One composition per section — corners and motif vary so no two sections
// read as the same decorative pass, but color stays navy almost everywhere;
// only the Footer (the one section allowed a touch more presence) carries
// the muted purple/gold accents, and even those stay low-contrast.
const SECTION_LAYOUT: Record<OrnamentSection, Placement[]> = {
  hero: [
    { corner: "top-right", motif: "geometris", opacity: 0.012, color: NAVY_TINT },
    { corner: "bottom-left", motif: "megaMendung", opacity: 0.012, color: NAVY_TINT },
  ],
  about: [
    { corner: "top-left", motif: "kawung", opacity: 0.02, color: NAVY_TINT },
    { corner: "bottom-right", motif: "floral", opacity: 0.015, color: NAVY_TINT },
  ],
  competition: [
    { corner: "bottom-right", motif: "parang", opacity: 0.022, color: NAVY_TINT },
  ],
  timeline: [
    { corner: "bottom-left", motif: "megaMendung", opacity: 0.022, color: NAVY_TINT },
  ],
  "open-recruitment": [
    { corner: "top-right", motif: "kawung", opacity: 0.022, color: NAVY_TINT },
  ],
  faq: [
    { corner: "top-left", motif: "floral", opacity: 0.02, color: NAVY_TINT },
    { corner: "bottom-right", motif: "geometris", opacity: 0.015, color: NAVY_TINT },
  ],
  footer: [
    { corner: "top-left", motif: "parang", opacity: 0.028, color: GOLD_TINT },
    { corner: "bottom-right", motif: "kawung", opacity: 0.028, color: PURPLE_TINT },
    { corner: "top-right", motif: "floral", opacity: 0.02, color: NAVY_TINT },
  ],
};

// Abstracted, large-scale line-art — deliberately simplified so each motif
// reads as texture/ambience rather than a literal batik reproduction.
function OrnamentMotifSvg({ motif }: { motif: OrnamentMotif }) {
  switch (motif) {
    case "parang":
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
            <line x1="-20" y1="240" x2="240" y2="-20" />
            <line x1="20" y1="240" x2="240" y2="20" />
            <line x1="60" y1="240" x2="240" y2="60" />
            <line x1="100" y1="240" x2="240" y2="100" />
          </g>
        </svg>
      );
    case "kawung":
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="70" cy="100" r="42" />
            <circle cx="130" cy="100" r="42" />
            <circle cx="100" cy="70" r="42" />
            <circle cx="100" cy="130" r="42" />
          </g>
        </svg>
      );
    case "megaMendung":
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,150 Q35,110 60,150 T110,150 T160,150" />
            <path d="M0,110 Q25,70 50,110 T100,110 T150,110" />
            <path d="M-10,70 Q15,30 40,70 T90,70 T140,70" />
          </g>
        </svg>
      );
    case "floral":
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M100,190 C85,140 85,90 100,20" />
            <path d="M100,150 C75,135 55,115 45,85" />
            <path d="M100,150 C125,135 145,115 155,85" />
            <path d="M100,95 C82,80 72,62 78,35" />
            <path d="M100,95 C118,80 128,62 122,35" />
          </g>
        </svg>
      );
    case "geometris":
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="30" y="30" width="140" height="140" transform="rotate(45 100 100)" />
            <rect x="60" y="60" width="80" height="80" transform="rotate(45 100 100)" />
            <rect x="80" y="80" width="40" height="40" transform="rotate(45 100 100)" />
          </g>
        </svg>
      );
  }
}

type SectionOrnamentProps = {
  section: OrnamentSection;
};

// Ambient corner ornament — a single reusable decorative layer whose
// composition (motif, corners, tint, opacity) is driven entirely by the
// `section` prop, so no section hand-rolls its own decoration markup.
export default function SectionOrnament({ section }: SectionOrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {SECTION_LAYOUT[section].map((placement, index) => (
        <div
          key={index}
          className={`absolute h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 ${CORNER_POSITION_CLASSES[placement.corner]}`}
          style={{
            color: placement.color,
            opacity: placement.opacity,
            maskImage: `radial-gradient(circle at ${CORNER_FADE_ORIGIN[placement.corner]}, black 0%, transparent 55%)`,
            WebkitMaskImage: `radial-gradient(circle at ${CORNER_FADE_ORIGIN[placement.corner]}, black 0%, transparent 55%)`,
          }}
        >
          <OrnamentMotifSvg motif={placement.motif} />
        </div>
      ))}
    </div>
  );
}
