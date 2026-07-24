type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl">
        {title}
        {highlight && (
          <span className="text-green-700"> {highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}