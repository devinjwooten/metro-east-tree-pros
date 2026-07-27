import type { Metadata } from "next";
import Contact from "../components/Contact";
import HomeFaqs, { homeFaqs } from "../components/HomeFaqs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { locations } from "@/lib/locations";
import { createFaqJsonLd, createPageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Professional Tree Service in Metro East, Illinois",
  description:
    "Metro East Tree Pros provides professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service for local homes and businesses.",
  path: "/",
  image: "/images/home/home-hero.jpg",
  imageAlt: "Professional tree crew arriving at a suburban property with organized equipment",
});

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(homeFaqs)) }}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gray-900 p-9 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Metro East Service Area
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Local crews for the communities we call home.
            </h2>
            <p className="mt-7 text-lg leading-8 text-gray-300">
              From routine pruning to urgent storm cleanup, Metro East Tree Pros
              brings thoughtful, professional tree service to homes and
              businesses throughout the region.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Serving Nearby
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-gray-100 px-5 py-4 font-semibold text-gray-700 shadow-sm transition hover:border-green-200 hover:bg-green-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-700" aria-hidden="true" />
                    {location.city}
                  </span>
                  <ArrowRight className="h-4 w-4 text-green-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeFaqs />
      <Contact />

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            Ready When You Are
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Get trusted tree care without the runaround.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Tell us about your property and Metro East Tree Pros will help you
            understand the next best step with a free, no-pressure estimate.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50"
            >
              Request a Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
              Call (314) 474-7087
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
