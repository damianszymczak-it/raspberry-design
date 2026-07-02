const highlights = [
  "grafiki do social media",
  "wizytówki i materiały drukowane",
  "proste strony internetowe",
  "spójny wizerunek marki",
];

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden pb-12 pt-8 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20"
    >
      <div className="pointer-events-none absolute left-0 top-16 h-64 w-64 rounded-full bg-[#B8325B]/18 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[#C9A45C]/10 blur-3xl" />
      <div className="brand-grain pointer-events-none absolute inset-x-0 top-0 h-72 opacity-[0.12]" />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-4 sm:mb-5">
            <p className="inline-flex rounded-full border border-[#C9A45C]/25 bg-[#111114]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A45C]">
              Raspberry Design
            </p>

            <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
              <span className="brand-jewel" />
              <span className="brand-jewel opacity-75" />
              <span className="brand-jewel opacity-50" />
            </div>
          </div>

          <h1 className="font-display text-[2.65rem] leading-[0.96] text-[#F6EFE7] min-[390px]:text-[2.95rem] sm:text-6xl lg:text-7xl">
            Grafiki, wizytówki i strony internetowe,{" "}
            <span className="text-[#C9A45C]">
              które robią pierwsze wrażenie za Ciebie
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#D8D0C3] sm:mt-7 sm:text-lg sm:leading-8">
            Tworzę estetyczne projekty graficzne, wizytówki i strony internetowe
            dla małych firm i marek osobistych, które chcą wyglądać profesjonalnie
            i przyciągać klientów.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-[#E8B7C8] px-7 py-4 text-sm font-semibold text-[#171719] shadow-[0_18px_55px_rgba(232,183,200,0.24)] transition hover:-translate-y-0.5 hover:bg-[#F0C8D2] hover:shadow-[0_20px_60px_rgba(184,50,91,0.25)]"
            >
              Zobacz portfolio
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-[#C9A45C]/55 px-7 py-4 text-sm font-semibold text-[#F6EFE7] transition hover:-translate-y-0.5 hover:border-[#E8B7C8] hover:text-[#E8B7C8]"
            >
              Napisz po wycenę
            </a>
          </div>

          <ul className="mt-6 grid gap-3 text-sm text-[#EFE7DA]/88 sm:mt-8 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="brand-jewel" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -right-3 top-6 h-60 w-60 rounded-full border border-[#C9A45C]/20" />
          <div className="absolute -left-4 bottom-10 h-40 w-40 rounded-full border border-[#B8325B]/25" />

          <div className="pointer-events-none absolute -right-4 -top-5 hidden opacity-80 sm:block">
            <div className="brand-orbit">
              <span className="brand-orbit-mark" />
            </div>
          </div>

          <div className="card-premium relative overflow-hidden rounded-[2rem] p-4 sm:p-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#E8B7C8]/15 blur-3xl" />

            <div className="relative rounded-[1.4rem] border border-[#C9A45C]/20 bg-[#050505] p-3 shadow-2xl sm:p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#E8B7C8]" />
                <span className="h-3 w-3 rounded-full bg-[#C9A45C]" />
                <span className="h-3 w-3 rounded-full bg-[#B8325B]" />
                <span className="ml-auto text-xs text-[#D8D0C3]/65">
                  raspberrydesign.pl
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-3xl border border-[#C9A45C]/25 bg-[#F6EFE7] p-4 text-[#171719]">
                  <div className="mx-auto mb-4 h-32 w-20 rounded-[1.2rem] border-4 border-[#171719] bg-[#F0C8D2] p-2">
                    <div className="h-full rounded-xl bg-[#F6EFE7] p-2">
                      <div className="mb-2 h-10 rounded-lg bg-[#E8B7C8]" />
                      <div className="h-2 w-12 rounded bg-[#C9A45C]" />
                      <div className="mt-2 h-2 w-10 rounded bg-[#171719]/25" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#111114] p-4 text-center text-[#F6EFE7]">
                    <p className="font-display text-2xl text-[#C9A45C]">RD</p>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em]">
                      karta marki
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#EFE7DA] p-4 text-[#171719]">
                  <div className="rounded-2xl bg-[#F6EFE7] p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <p className="font-display text-xl">Bloom & Co.</p>
                      <div className="flex gap-2">
                        <span className="h-1.5 w-8 rounded bg-[#171719]/20" />
                        <span className="h-1.5 w-8 rounded bg-[#171719]/20" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
                      <div>
                        <p className="font-display text-3xl leading-tight">
                          Piękno w prostocie.
                        </p>
                        <p className="mt-3 text-xs leading-5 text-[#171719]/70">
                          Subtelna strona dla marki, która chce wyglądać spokojnie,
                          elegancko i profesjonalnie.
                        </p>
                        <div className="mt-5 h-8 w-28 rounded-full bg-[#B8325B]" />
                      </div>

                      <div className="rounded-2xl bg-[#E8B7C8] p-4">
                        <div className="h-24 rounded-xl bg-[#F6EFE7]" />
                        <div className="mt-3 h-2 w-20 rounded bg-[#171719]/20" />
                        <div className="mt-2 h-2 w-16 rounded bg-[#171719]/15" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#171719] p-4 text-[#F6EFE7]">
                      <p className="font-display text-xl text-[#C9A45C]">
                        Wizytówka
                      </p>
                      <p className="mt-2 text-xs text-[#D8D0C3]">
                        gotowa do druku
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#B88A44]/35 p-4">
                      <p className="font-display text-xl">Social media</p>
                      <p className="mt-2 text-xs text-[#171719]/60">
                        spójny zestaw
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-3xl border border-[#C9A45C]/20 bg-[#111114]/72 p-4">
              <div>
                <p className="font-display text-2xl text-[#F6EFE7]">
                  Pierwsze wrażenie
                </p>
                <p className="mt-1 text-sm text-[#D8D0C3]">
                  estetyka, zaufanie i spójność
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A45C]/45 bg-[#050505]">
                <span className="font-display text-xl italic text-[#C9A45C]">
                  RD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}