import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <Image
        src="/images/about/about-hero.jpg"
        alt="Professional tree-service crew standing beside organized equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-white backdrop-blur">
            ABOUT METRO EAST TREE PROS
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Professional Tree Service
            <br />
            Built Around
            <span className="text-green-400"> Trust.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
            Tree service does not have to be complicated. We focus on clear
            communication, dependable coordination, and a smooth customer
            experience from your first estimate request through project
            completion.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-green-700 px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800"
            >
              Request Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="tel:3144747087"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
              (314) 474-7087
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="h-7 w-7 text-green-400" aria-hidden="true" />
              <span>Professional Standards</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <Clock3 className="h-7 w-7 text-green-400" aria-hidden="true" />
              <span>Fast Response</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="h-7 w-7 text-green-400" aria-hidden="true" />
              <span>Free Estimates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
