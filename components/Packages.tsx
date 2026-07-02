import SectionHeading from "@/components/SectionHeading";
import { packages } from "@/data/site";

export default function Packages() {
  return (
    <section id="pakiety" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pakiety"
          title="Możesz zacząć od małego projektu albo zbudować spójny wizerunek marki"
          description="Bez sztywnych cen i przypadkowych pakietów. Zakres dobieramy do realnych potrzeb, a wycenę przygotowujemy indywidualnie."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`card-premium relative rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "border-[#E8B7C8]/65 shadow-[0_24px_90px_rgba(184,50,91,0.18)]"
                  : ""
              }`}
            >
              {item.featured ? (
                <div className="absolute right-6 top-6 rounded-full bg-[#C9A45C] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#171719]">
                  Polecany
                </div>
              ) : null}

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A45C]">
                Pakiet
              </p>

              <h3 className="mt-4 font-display text-4xl text-[#F6EFE7]">
                {item.title}
              </h3>

              <p className="mt-4 min-h-14 text-sm leading-7 text-[#D8D0C3]">
                {item.description}
              </p>

              <ul className="mt-7 space-y-3">
                {item.items.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-[#EFE7DA]">
                    <span className="mt-1 text-[#C9A45C]" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#E8B7C8] px-6 py-4 text-sm font-semibold text-[#171719] transition hover:-translate-y-0.5 hover:bg-[#F0C8D2]"
              >
                Wycena indywidualna
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}