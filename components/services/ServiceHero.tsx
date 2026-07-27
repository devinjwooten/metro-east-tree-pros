import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
};

export default function ServiceHero({
  title,
  subtitle,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden bg-slate-950">
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.2),_transparent_38%),linear-gradient(135deg,_#052e16_0%,_#0f172a_52%,_#111827_100%)]"
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            PROFESSIONAL TREE SERVICE
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-200 sm:text-xl sm:leading-9">
            {subtitle}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link
              href="#estimate"
              className="inline-flex items-center rounded-xl bg-green-700 px-8 py-5 font-bold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Get a Free Estimate

              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="tel:3144747087"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />

              (314) 474-7087
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
