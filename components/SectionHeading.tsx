type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#C9A45C]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-3xl leading-tight text-[#F6EFE7] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-[#D8D0C3] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}