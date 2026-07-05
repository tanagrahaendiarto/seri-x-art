import FAQItem from "@/components/FAQItem";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const faqItems = [
    {
      question: "Who can participate in Seri X Art?",
      answer:
        "Seri X Art is open to students, young artists, and creative enthusiasts from various backgrounds.",
    },
    {
      question: "How many competition categories are available?",
      answer:
        "Participants can compete in Digital Art, Illustration, Photography, Animation, and 3D Art.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No. Registration is completely free for all participants.",
    },
    {
      question: "Where will the winners be announced?",
      answer:
        "The winners will be announced on the official Seri X Art website and social media platforms.",
    },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-32 text-white"
    >
      <Reveal className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Heading + help block */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#A0A3B1]">
              Find answers to the most common questions about the Seri X
              Art competition.
            </p>

            <div className="mt-12 max-w-md border-t border-white/10 pt-8">
              <p className="text-sm font-semibold text-white">
                Still have questions?
              </p>

              <p className="mt-2 text-sm leading-6 text-[#A0A3B1]">
                Reach out to us at{" "}
                <a
                  href="mailto:serixart@email.com"
                  className="text-[#F1D2B1] transition-colors duration-300 hover:text-white"
                >
                  serixart@email.com
                </a>
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl border-b border-white/10">
              {faqItems.map((faqItem, index) => (
                <FAQItem
                  key={faqItem.question}
                  id={`faq-${index}`}
                  question={faqItem.question}
                  answer={faqItem.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
