import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/site";

function PortfolioVisual({ type }: { type: string }) {
  if (type === "social") {
    return (
      <div className="grid h-56 grid-cols-3 gap-3 rounded-[1.4rem] bg-[#EFE7DA] p-4">
        <div className="rounded-2xl bg-[#F6EFE7] p-3">
          <div className="h-20 rounded-xl bg-[#E8B7C8]" />
          <div className="mt-4 h-2 w-16 rounded bg-[#171719]/25" />
          <div className="mt-2 h-2 w-12 rounded bg-[#171719]/15" />
        </div>
        <div className="rounded-2xl bg-[#E8B7C8] p-3">
          <p className="font-display text-3xl leading-none text-[#171719]">-15%</p>
          <p className="mt-3 text-xs leading-4 text-[#171719]/70">
            na pierwsze zamówienie
          </p>
        </div>
        <div className="rounded-2xl bg-[#F6EFE7] p-3">
          <div className="h-10 w-10 rounded-full bg-[#B8325B]/70" />
          <div className="mt-6 h-2 w-14 rounded bg-[#171719]/20" />
          <div className="mt-2 h-2 w-10 rounded bg-[#171719]/15" />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="h-56 rounded-[1.4rem] bg-[#EFE7DA] p-4">
        <div className="h-full rounded-2xl border-8 border-[#171719] bg-[#F6EFE7] p-5 text-[#171719]">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-display text-xl">Pure Skin</p>
            <div className="flex gap-2">
              <span className="h-1.5 w-7 rounded bg-[#171719]/20" />
              <span className="h-1.5 w-7 rounded bg-[#171719]/20" />
            </div>
          </div>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div>
              <p className="font-display text-3xl leading-tight">Naturalna pielęgnacja</p>
              <div className="mt-4 h-7 w-28 rounded-full bg-[#B8325B]" />
            </div>
            <div className="rounded-2xl bg-[#E8B7C8]/70 p-3">
              <div className="h-20 rounded-xl bg-[#F6EFE7]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-[1.4rem] bg-[#EFE7DA] p-5">
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
          title="Projekty, które pokazują styl i sposób myślenia o marce"
          description="Na start używamy eleganckich mockupów. Później można podmienić je na prawdziwe realizacje, bez przebudowy strony."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article key={project.title} className="group">
              <div className="card-premium overflow-hidden rounded-[1.8rem] p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#E8B7C8]/45">
                <PortfolioVisual type={project.type} />
              </div>

              <h3 className="mt-5 font-display text-2xl text-[#F6EFE7]">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#D8D0C3]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}