import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/data/site";

function StepIcon({ type }: { type: string }) {
  if (type === "idea") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M9 18H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 21H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 14.5C7.3 13.5 6.5 12 6.5 10.2C6.5 7.1 8.9 4.8 12 4.8C15.1 4.8 17.5 7.1 17.5 10.2C17.5 12 16.7 13.5 15.5 14.5C14.8 15.1 14.6 15.7 14.5 16.5H9.5C9.4 15.7 9.2 15.1 8.5 14.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "refresh") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M18.5 8.5C17.4 6.4 15.2 5 12.7 5C9.5 5 6.8 7.3 6.2 10.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18.8 5.5V8.8H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 15.5C6.6 17.6 8.8 19 11.3 19C14.5 19 17.2 16.7 17.8 13.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5.2 18.5V15.2H8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M5 12.5L9.4 17L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M5 6.5H19V15.5H10L6.5 19V15.5H5V6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 13H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Process() {
  return (
    <section id="proces" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proces współpracy"
          title="Prosty proces bez zgadywania, co dzieje się z projektem"
          description="Każdy etap ma jasny cel: najpierw rozumiemy markę, potem projektujemy, dopracowujemy i finalizujemy materiały."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-[#C9A45C]/35 lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="card-premium relative rounded-[1.7rem] p-6 text-center"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[#C9A45C]/45 bg-[#E8B7C8] text-[#171719] shadow-[0_18px_50px_rgba(232,183,200,0.18)]">
                  <StepIcon type={step.icon} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A45C]">
                  Krok {index + 1}
                </p>

                <h3 className="mt-3 font-display text-2xl text-[#F6EFE7]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#D8D0C3]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}