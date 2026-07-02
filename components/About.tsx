import SectionHeading from "@/components/SectionHeading";

const features = [
  "projekty dopasowane do marki i odbiorców",
  "estetyka połączona z funkcją sprzedażową",
  "materiały przygotowane do publikacji lub druku",
  "czytelny proces i konkretne etapy współpracy",
];

export default function About() {
  return (
    <section id="o-mnie" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card-premium relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute -left-12 top-10 h-56 w-56 rounded-full bg-[#E8B7C8]/40" />
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#C9A45C]/35" />

            <div className="relative mx-auto flex h-80 max-w-sm items-end justify-center rounded-[1.7rem] bg-[#111114]">
              <div className="absolute bottom-0 left-1/2 h-64 w-44 -translate-x-1/2 rounded-t-full border border-[#C9A45C]/30 bg-[#050505]" />
              <div className="absolute bottom-24 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-[#C9A45C]/45 bg-[#171719]" />
              <div className="absolute bottom-34 left-[48%] h-36 w-28 rounded-full border-l border-[#C9A45C]/45" />
              <div className="absolute bottom-16 left-16 h-32 w-px rotate-[-28deg] bg-[#C9A45C]/40" />
              <div className="absolute bottom-28 left-20 h-20 w-px rotate-[32deg] bg-[#C9A45C]/30" />
              <div className="absolute bottom-20 right-16 h-24 w-px rotate-[28deg] bg-[#B8325B]/45" />
              <p className="absolute bottom-8 font-display text-5xl italic text-[#C9A45C]/75">
                RD
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="O mnie"
              title="Pomagam markom wyglądać profesjonalnie i z klasą."
            />

            <div className="mt-7 space-y-5 text-base leading-8 text-[#D8D0C3]">
              <p>
                Raspberry Design powstało z potrzeby tworzenia projektów, które są
                nie tylko estetyczne, ale też praktyczne. Każda grafika, wizytówka
                i strona internetowa ma pomagać marce wyglądać spójnie, budzić
                zaufanie i lepiej komunikować się z klientami.
              </p>

              <p>
                Stawiam na przejrzysty proces, dopracowane detale i projekty
                dopasowane do realnych potrzeb małych firm oraz marek osobistych.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-[#C9A45C]/20 bg-[#111114]/55 p-4 text-sm leading-6 text-[#EFE7DA]"
                >
                  <span className="mb-3 block text-[#C9A45C]" aria-hidden="true">
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}