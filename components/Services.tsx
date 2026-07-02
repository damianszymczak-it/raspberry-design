import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site";

function ServiceIcon({ type }: { type: string }) {
  if (type === "card") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 10H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 14H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "screen") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M4 20L8.5 18.8L19.2 8.1C20 7.3 20 6 19.2 5.2C18.4 4.4 17.1 4.4 16.3 5.2L5.6 15.9L4 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14.8 6.7L17.7 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="uslugi" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Usługi"
          title="Zakres, którego potrzebuje Twoja marka"
          description="Od pojedynczych grafik po spójny zestaw materiałów i prostą stronę internetową — bez chaosu, przypadkowych kolorów i prowizorycznego wyglądu."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-premium group rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8B7C8]/45"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A45C]/45 text-[#C9A45C] transition group-hover:border-[#E8B7C8] group-hover:text-[#E8B7C8]">
                <ServiceIcon type={service.icon} />
              </div>

              <h3 className="font-display text-2xl leading-tight text-[#F6EFE7]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#D8D0C3]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}