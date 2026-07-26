import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Professional tree service crew at work"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">
        <div className="max-w-4xl text-white">
          <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-green-100 sm:text-sm">
            {[
              "Licensed",
              "Insured",
              "Locally Trusted",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-green-400" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Metro East Tree Pros
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            Tree work done with care, clarity, and confidence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
            Professional tree removal, trimming, stump grinding, and emergency
            service for Metro East homes and businesses. We make difficult tree
            work feel simple from the first call to final cleanup.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-4 text-lg font-bold transition hover:bg-green-600"
            >
              Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur transition hover:bg-white hover:text-gray-900"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
