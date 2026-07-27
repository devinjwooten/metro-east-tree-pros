import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-slate-50 px-6 pb-20 pt-36 sm:pt-40">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-xl shadow-slate-200/60 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          404 — Page Not Found
        </p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
          Let&apos;s get you back to the right branch.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          The page you requested is unavailable or may have moved. Explore our
          services, or contact Metro East Tree Pros for help with your property.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-7 py-3 font-bold text-white transition hover:bg-green-800"
          >
            Explore Services
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href="tel:3144747087"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-green-200 px-7 py-3 font-bold text-green-800 transition hover:border-green-700 hover:bg-green-50"
          >
            <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
