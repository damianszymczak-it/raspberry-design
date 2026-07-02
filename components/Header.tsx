import { navigation } from "@/data/site";

export default function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#C9A45C]/15 bg-[#050505]/94 backdrop-blur-2xl">
        <div className="container-page relative flex min-h-20 items-center justify-between gap-3 sm:gap-6">
          <a
            href="#start"
            className="group min-w-0 flex-1 shrink"
            aria-label="Raspberry Design — start"
          >
            <span className="block truncate font-display text-[1.45rem] leading-none text-[#F6EFE7] min-[390px]:text-2xl sm:text-3xl">
              Raspberry{" "}
              <span className="italic text-[#C9A45C] transition-colors group-hover:text-[#E8B7C8]">
                Design
              </span>
            </span>

            <span className="mt-2 block max-w-[245px] truncate text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-[#D8D0C3]/80 min-[390px]:text-[0.52rem] min-[390px]:tracking-[0.26em] sm:max-w-none sm:text-[0.58rem] sm:tracking-[0.32em]">
              Studio grafiki i stron internetowych
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Główna nawigacja"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#EFE7DA]/86 transition hover:text-[#C9A45C]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-full bg-[#E8B7C8] px-6 py-3 text-sm font-semibold text-[#171719] shadow-[0_14px_40px_rgba(232,183,200,0.22)] transition hover:-translate-y-0.5 hover:bg-[#F0C8D2] lg:inline-flex"
          >
            Napisz po wycenę
          </a>

          <a
            href="#mobile-menu"
            className="relative z-[120] shrink-0 rounded-full border border-[#C9A45C]/40 px-4 py-2.5 text-sm font-semibold text-[#F6EFE7] transition active:scale-95 hover:border-[#E8B7C8] hover:text-[#E8B7C8] lg:hidden"
            aria-label="Otwórz menu"
          >
            Menu
          </a>
        </div>
      </header>

      <div
        id="mobile-menu"
        className="mobile-menu-target fixed inset-0 z-[999] bg-[#050505]/98 px-4 pb-6 pt-8 backdrop-blur-2xl lg:hidden"
      >
        <div className="mx-auto max-w-md rounded-[1.8rem] border border-[#C9A45C]/25 bg-[#0B0B0D] p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#C9A45C]/15 pb-4">
            <p className="min-w-0 truncate font-display text-2xl text-[#F6EFE7]">
              Raspberry <span className="italic text-[#C9A45C]">Design</span>
            </p>

            <a
              href="#start"
              className="shrink-0 rounded-full border border-[#C9A45C]/35 px-4 py-2 text-sm font-semibold text-[#F6EFE7]"
              aria-label="Zamknij menu"
            >
              Zamknij
            </a>
          </div>

          <nav className="grid gap-2" aria-label="Menu mobilne">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-4 text-base font-semibold text-[#EFE7DA] transition active:scale-[0.99] hover:bg-[#171719] hover:text-[#C9A45C]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              className="mt-2 rounded-2xl bg-[#E8B7C8] px-4 py-4 text-center text-base font-semibold text-[#171719] transition active:scale-[0.99] hover:bg-[#F0C8D2]"
            >
              Napisz po wycenę
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}