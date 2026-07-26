import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden py-28">
      {/* Background */}
      <Image
        src="/images/about/cta-bg.jpg"
        alt="Tree service"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            READY TO GET STARTED?
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Let&apos;s Make Your Tree Project
            <span className="text-green-400"> Simple.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            Whether you need tree removal, trimming, stump grinding, or storm
            cleanup, we&apos;re here to help make the process straightforward from
            your first call to the final cleanup.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-green-700 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800"
            >
              Request Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              <Phone className="mr-3 h-5 w-5" />
              (314) 474-7087
            </Link>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/20 pt-10 text-center text-sm font-medium text-gray-300 sm:grid-cols-3">
            <div>✓ Free Estimates</div>
            <div>✓ Fast Response</div>
            <div>✓ Professional Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
