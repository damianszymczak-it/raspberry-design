import SectionHeading from "@/components/SectionHeading";
import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="card-premium overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#C9A45C]/20 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <SectionHeading
                align="left"
                eyebrow="Kontakt"
                title="Masz pomysł na projekt? Napisz po wycenę."
                description="Opisz krótko, czego potrzebujesz — grafiki, wizytówki, strony internetowej albo pełnego zestawu materiałów dla marki. Odpowiem z propozycją dalszych kroków i indywidualną wyceną."
              />

              <div className="mt-8 space-y-4 text-sm text-[#EFE7DA]">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition hover:text-[#C9A45C]"
                >
                  <span className="text-[#C9A45C]" aria-hidden="true">
                    ✉
                  </span>
                  {contact.email}
                </a>

                <p className="flex items-center gap-3">
                  <span className="text-[#C9A45C]" aria-hidden="true">
                    ◎
                  </span>
                  {contact.instagram}
                </p>

                <a
                  href={`tel:${contact.phone.replaceAll(" ", "")}`}
                  className="flex items-center gap-3 transition hover:text-[#C9A45C]"
                >
                  <span className="text-[#C9A45C]" aria-hidden="true">
                    ☎
                  </span>
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <form className="grid gap-5">
                {/* Tutaj można później podpiąć Formspree, Resend albo własną API route. */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#EFE7DA]">
                    Imię i nazwisko
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="rounded-2xl border border-[#C9A45C]/20 bg-[#050505]/70 px-4 py-4 text-[#F6EFE7] placeholder:text-[#D8D0C3]/45"
                      placeholder="Jak się nazywasz?"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-[#EFE7DA]">
                    E-mail
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="rounded-2xl border border-[#C9A45C]/20 bg-[#050505]/70 px-4 py-4 text-[#F6EFE7] placeholder:text-[#D8D0C3]/45"
                      placeholder="adres@email.pl"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-[#EFE7DA]">
                  Czego potrzebujesz?
                  <select
                    required
                    name="service"
                    className="rounded-2xl border border-[#C9A45C]/20 bg-[#050505]/70 px-4 py-4 text-[#F6EFE7]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Wybierz zakres projektu
                    </option>
                    <option>Grafiki dla firmy</option>
                    <option>Wizytówka lub materiały drukowane</option>
                    <option>Strona internetowa</option>
                    <option>Pełny zestaw dla marki</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-medium text-[#EFE7DA]">
                  Wiadomość
                  <textarea
                    required
                    name="message"
                    rows={7}
                    className="resize-none rounded-2xl border border-[#C9A45C]/20 bg-[#050505]/70 px-4 py-4 text-[#F6EFE7] placeholder:text-[#D8D0C3]/45"
                    placeholder="Napisz kilka zdań o projekcie, branży i tym, czego potrzebujesz."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#E8B7C8] px-8 py-4 text-sm font-semibold text-[#171719] transition hover:-translate-y-0.5 hover:bg-[#F0C8D2]"
                >
                  Wyślij zapytanie
                  <span className="ml-3" aria-hidden="true">
                    →
                  </span>
                </button>

                <p className="text-xs leading-6 text-[#D8D0C3]/70">
                  Formularz jest przygotowany wizualnie i technicznie do dalszego
                  podpięcia wysyłki. Na tym etapie nie udaje, że wysyła wiadomości.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}