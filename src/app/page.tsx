import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Competition from "@/components/Competition";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

// Assumption: dates follow the "SERI X ART 2026" cycle shown in the Timeline
// section, and the event is treated as online (submission-based). Verify
// eventAttendanceMode/location before relying on this for rich results.
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Seri X Art 2026",
  description:
    "An art competition platform where creativity meets innovation. Showcase your talent, compete with the best, and inspire the world.",
  startDate: "2026-07-01",
  endDate: "2026-08-01",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: siteUrl,
  },
  image: [`${siteUrl}/opengraph-image`],
  organizer: {
    "@type": "Organization",
    name: "Seri X Art",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-[#DF9621] focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#171D2D] focus:outline-none focus:ring-2 focus:ring-[#A171D5] focus:ring-offset-2 focus:ring-offset-[#171D2D]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Competition />
        <Timeline />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}