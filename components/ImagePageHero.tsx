import Image from "next/image";

type ImagePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function ImagePageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: ImagePageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      </div>
    </section>
  );
}
