import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/site";

function PortfolioVisual({ type }: { type: string }) {
  if (type === "candle") {
    return (
      <div className="relative min-h-[16rem] overflow-hidden rounded-[1.4rem] bg-[#EFE7DA] p-5 text-[#171719]">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#E8B7C8]" />
        <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[#C9A45C]/25" />

        <div className="relative rounded-[1.2rem] bg-[#F6EFE7] p-4 shadow-xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-display text-2xl">Raspberry Candle</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#171719]/55">
                sklep ze świecami sojowymi
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#B8325B]" />
          </div>

          <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
            <div className="rounded-2xl bg-[#171719] p-4 text-[#F6EFE7]">
              <p className="font-display text-3xl text-[#C9A45C]">RC</p>
              <p className="mt-3 text-xs leading-5 text-[#D8D0C3]">
                świece sojowe, zestawy, prezenty i marka handmade
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-[#E8B7C8] p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  baner sklepu
                </p>
                <p className="mt-2 font-display text-xl leading-tight">
                  Darmowa dostawa od 149 zł
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#171719]/10 bg-[#F6EFE7] p-3">
                  <div className="mx-auto h-12 w-8 rounded-t-full bg-[#B8325B]/80" />
                  <div className="mt-3 h-1.5 rounded bg-[#171719]/20" />
                </div>
                <div className="rounded-2xl border border-[#171719]/10 bg-[#F6EFE7] p-3">
                  <div className="mx-auto h-12 w-8 rounded-t-full bg-[#C9A45C]/80" />
                  <div className="mt-3 h-1.5 rounded bg-[#171719]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-3">
          <div className="h-16 rounded-2xl bg-[#171719]" />
          <div className="h-16 rounded-2xl bg-[#E8B7C8]" />
          <div className="h-16 rounded-2xl bg-[#B8325B]" />
        </div>
      </div>
    );
  }

  if (type === "banners") {
    return (
      <div className="grid min-h-[16rem] gap-3 rounded-[1.4rem] bg-[#EFE7DA] p-4 text-[#171719]">
        <div className="rounded-2xl bg-[#171719] p-4 text-[#F6EFE7]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A45C]">
            promocja
          </p>
          <p className="mt-3 font-display text-3xl leading-tight">
            Nowa kolekcja świec
          </p>
          <div className="mt-4 h-8 w-28 rounded-full bg-[#E8B7C8]" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#E8B7C8] p-4">
            <p className="font-display text-2xl">-15%</p>
            <p className="mt-2 text-xs leading-4 text-[#171719]/70">
              grafika sprzedażowa
            </p>
          </div>
          <div className="rounded-2xl bg-[#F6EFE7] p-4">
            <div className="h-10 w-10 rounded-full bg-[#B8325B]" />
            <div className="mt-4 h-2 w-20 rounded bg-[#171719]/20" />
            <div className="mt-2 h-2 w-14 rounded bg-[#171719]/15" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="grid min-h-[16rem] grid-cols-3 gap-3 rounded-[1.4rem] bg-[#EFE7DA] p-4">
        <div className="rounded-2xl bg-[#F6EFE7] p-3">
          <div className="h-24 rounded-xl bg-[#E8B7C8]" />
          <div className="mt-4 h-2 w-16 rounded bg-[#171719]/25" />
          <div className="mt-2 h-2 w-12 rounded bg-[#171719]/15" />
        </div>
        <div className="rounded-2xl bg-[#E8B7C8] p-3 text-[#171719]">
          <p className="font-display text-3xl leading-none">post</p>
          <p className="mt-4 text-xs leading-4 text-[#171719]/70">
            premiera produktu
          </p>
        </div>
        <div className="rounded-2xl bg-[#F6EFE7] p-3">
          <div className="h-12 w-12 rounded-full bg-[#B8325B]/70" />
          <div className="mt-8 h-2 w-14 rounded bg-[#171719]/20" />
          <div className="mt-2 h-2 w-10 rounded bg-[#171719]/15" />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="min-h-[16rem] rounded-[1.4rem] bg-[#EFE7DA] p-4">
        <div className="h-full rounded-2xl border-8 border-[#171719] bg-[#F6EFE7] p-5 text-[#171719]">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-display text-xl">Landing page</p>
            <div className="flex gap-2">
              <span className="h-1.5 w-7 rounded bg-[#171719]/20" />
              <span className="h-1.5 w-7 rounded bg-[#171719]/20" />
            </div>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div>
              <p className="font-display text-3xl leading-tight">
                Oferta, zaufanie i kontakt
              </p>
              <div className="mt-4 h-7 w-28 rounded-full bg-[#B8325B]" />
            </div>
            <div className="rounded-2xl bg-[#E8B7C8]/70 p-3">
              <div className="h-24 rounded-xl bg-[#F6EFE7]" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="h-10 rounded-xl bg-[#171719]/10" />
            <div className="h-10 rounded-xl bg-[#171719]/10" />
            <div className="h-10 rounded-xl bg-[#171719]/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "print") {
    return (
      <div className="relative min-h-[16rem] overflow-hidden rounded-[1.4rem] bg-[#EFE7DA] p-5">
        <div className="absolute right-4 top-4 h-28 w-20 rotate-6 rounded-2xl bg-[#F6EFE7] p-3 shadow-xl">
          <div className="h-8 rounded-xl bg-[#E8B7C8]" />
          <div className="mt-5 h-1.5 rounded bg-[#171719]/25" />
          <div className="mt-2 h-1.5 w-10 rounded bg-[#171719]/15" />
        </div>

        <div className="absolute bottom-8 left-8 h-36 w-52 rotate-[-5deg] rounded-2xl bg-[#171719] p-5 text-[#F6EFE7] shadow-xl">
          <p className="font-display text-2xl text-[#C9A45C]">Voucher</p>
          <p className="mt-3 text-xs leading-5 text-[#D8D0C3]">
            materiał drukowany przygotowany dla marki usługowej
          </p>
        </div>

        <div className="absolute bottom-10 right-10 h-28 w-44 rotate-3 rounded-2xl bg-[#E8B7C8] p-4 text-[#171719] shadow-xl">
          <p className="font-display text-xl">Cennik</p>
          <div className="mt-4 h-2 rounded bg-[#171719]/25" />
          <div className="mt-2 h-2 w-20 rounded bg-[#171719]/15" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[16rem] overflow-hidden rounded-[1.4rem] bg-[#EFE7DA] p-5">
      <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#E8B7C8]" />
      <div className="absolute bottom-8 left-8 h-24 w-44 rotate-[-8deg] rounded-2xl bg-[#F6EFE7] p-5 text-[#171719] shadow-xl">
        <p className="font-display text-xl">Raspberry</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#171719]/55">
          studio design
        </p>
      </div>
      <div className="absolute bottom-10 right-8 h-24 w-44 rotate-[7deg] rounded-2xl bg-[#171719] p-5 text-[#F6EFE7] shadow-xl">
        <p className="font-display text-3xl text-[#C9A45C]">RD</p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#D8D0C3]">
          wizytówka
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Realne projekty i kierunki prac dla małych marek"
          description="Od oprawy sklepu Raspberry Candle po banery, grafiki do social media, wizytówki, materiały drukowane i proste strony internetowe."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolio.map((project, index) => (
            <article
              key={project.title}
              className={`group ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="card-premium overflow-hidden rounded-[1.8rem] p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#E8B7C8]/45">
                <PortfolioVisual type={project.type} />
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl text-[#F6EFE7] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D8D0C3]">
                    {project.description}
                  </p>
                </div>

                {"link" in project && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#C9A45C]/45 px-5 py-3 text-sm font-semibold text-[#F6EFE7] transition hover:border-[#E8B7C8] hover:text-[#E8B7C8]"
                  >
                    Zobacz sklep
                    <span className="ml-2" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#C9A45C]/20 bg-[#111114]/70 px-3 py-1.5 text-xs font-semibold text-[#C9A45C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}