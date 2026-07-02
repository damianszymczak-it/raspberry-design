import { navigation } from "@/data/site";

export default function Footer() {
  const footerLinks = navigation.filter((item) =>
    ["Start", "Usługi", "Portfolio", "Kontakt"].includes(item.label),
  );

  return (
    <footer className="border-t border-[#C9A45C]/15 bg-[#050505] py-10">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <a href="#start" aria-label="Raspberry Design — start">
              <span className="block font-display text-3xl text-[#F6EFE7]">
                Raspberry <span className="italic text-[#C9A45C]">Design</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#D8D0C3]">
              Studio grafiki i stron internetowych dla małych marek.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#EFE7DA]/86" aria-label="Linki w stopce">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#C9A45C]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#EFE7DA]/86 lg:justify-end">
            <a href="#" className="transition hover:text-[#C9A45C]">
              Polityka prywatności
            </a>
            <a href="#" className="transition hover:text-[#C9A45C]">
              Regulamin
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#C9A45C]/12 pt-6 text-center text-xs text-[#D8D0C3]/70">
          © 2026 Raspberry Design. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}