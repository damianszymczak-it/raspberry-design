import { navigation } from "@/data/site";

export default function Footer() {
  const footerLinks = navigation.filter((item) =>
    ["Start", "Usługi", "Portfolio", "Kontakt"].includes(item.label),
  );

  return (
    <footer className="relative overflow-hidden border-t border-[#C9A45C]/15 bg-[#050505] py-12">
      <div className="brand-grain pointer-events-none absolute inset-x-0 top-0 h-40 opacity-[0.06]" />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr_1.05fr] lg:items-start">
          <div>
            <a href="#start" aria-label="Raspberry Design — start">
              <span className="block font-display text-3xl text-[#F6EFE7]">
                Raspberry <span className="italic text-[#C9A45C]">Design</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#D8D0C3]">
              Studio grafiki i stron internetowych dla małych marek.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#E8B7C8]">
              <span className="h-px w-10 bg-[#C9A45C]/60" />
              <span>Mały projekt. Duże pierwsze wrażenie.</span>
            </div>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#EFE7DA]/86 lg:justify-center"
            aria-label="Linki w stopce"
          >
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#C9A45C]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#EFE7DA]/86 lg:justify-end">
              <a href="#" className="transition hover:text-[#C9A45C]">
                Polityka prywatności
              </a>
              <a href="#" className="transition hover:text-[#C9A45C]">
                Regulamin
              </a>
            </div>

            <div
              className="brand-signature-card w-full max-w-[285px] rounded-[1.4rem] p-5"
              aria-hidden="true"
            >
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A45C]/45 bg-[#050505]">
                  <span className="font-display text-2xl italic text-[#C9A45C]">
                    RD
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="brand-jewel scale-90 opacity-60" />
                  <span className="brand-jewel" />
                  <span className="brand-jewel scale-90 opacity-70" />
                </div>
              </div>

              <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent" />

              <p className="relative mt-4 text-right font-display text-xl leading-tight text-[#F6EFE7]">
                Detal, który zostaje w pamięci.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#C9A45C]/12 pt-6 text-center text-xs text-[#D8D0C3]/70">
          © 2026 Raspberry Design. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}