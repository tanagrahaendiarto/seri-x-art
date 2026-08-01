import FAQItem from "@/components/FAQItem";
import Reveal from "@/components/Reveal";
import SectionOrnament from "@/components/SectionOrnament";
import { footer } from "@/lib/site";

export default function FAQ() {
  const faqItems = [
    {
      question: "Apa itu Seri X Art Exhibition 2026?",
      answer:
        "Seri X Art Exhibition 2026 merupakan program unggulan Departemen Seni dan Budaya Ormawa Eksekutif PKU IPB yang menjadi wadah bagi mahasiswa untuk berkarya, berkompetisi, dan mengapresiasi seni melalui tema Wonderland Nusantara.",
    },
    {
      question: "Siapa yang dapat mengikuti Seri X Art Exhibition 2026?",
      answer:
        "Kompetisi terbuka bagi mahasiswa KM PKU IPB sesuai ketentuan pada masing-masing cabang lomba. Khusus untuk Malam Puncak, acara akan terbuka untuk masyarakat umum.",
    },
    {
      question: "Cabang lomba apa saja yang tersedia?",
      answer:
        "Terdapat tujuh cabang lomba yang dapat diikuti, yaitu Band, Fashion Show, Tari Kreasi, Textile Painting, Music Video, Twibbon, dan Tenant.",
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer:
        "Pendaftaran dilakukan melalui website resmi Seri X Art Exhibition 2026. Pilih cabang lomba yang diinginkan, lengkapi formulir pendaftaran, kemudian ikuti seluruh tahapan registrasi sesuai ketentuan yang berlaku.",
    },
    {
      question: "Di mana saya bisa mendapatkan informasi terbaru?",
      answer:
        "Seluruh informasi mengenai jadwal, guidebook, pengumuman, hasil lomba, dan pembaruan acara akan diumumkan melalui website serta media sosial resmi Seri X Art Exhibition 2026.",
    },
    {
      question: "Apakah seluruh cabang lomba dipungut biaya?",
      answer:
        "Informasi mengenai biaya pendaftaran dapat dilihat pada guidebook masing-masing cabang lomba. Ketentuan dapat berbeda sesuai kategori yang dipilih.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative isolate scroll-mt-20 bg-[linear-gradient(to_bottom,#171D2D_80%,#20283A)] py-14 text-white sm:py-20 lg:py-24"
    >
      <SectionOrnament section="faq" />

      <Reveal className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Heading + help block */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p lang="id" className="mt-6 max-w-md text-lg leading-8 text-[#A0A3B1]">
              Temukan jawaban atas pertanyaan yang paling sering diajukan
              mengenai Seri X Art Exhibition 2026.
            </p>

            <div className="mt-8 max-w-md border-t border-white/10 pt-6 lg:mt-12 lg:pt-8">
              <p lang="id" className="text-sm font-semibold text-white">
                Masih punya pertanyaan?
              </p>

              <div className="mt-5 space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                    Hubungi Kami
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-white/85">
                    {footer.contact.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                    WhatsApp
                  </p>
                  <a
                    href={footer.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-base font-medium text-white/85 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]"
                  >
                    {footer.contact.whatsapp}
                  </a>
                </div>
              </div>
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
