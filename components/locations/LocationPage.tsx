import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleOff, CloudLightning, Scissors, TreePine } from "lucide-react";
import EstimateRequest from "@/components/EstimateRequest";
import ServiceHero from "@/components/services/ServiceHero";
import type { Location } from "@/lib/locations";

type LocationPageProps = {
  location: Location;
};

const services = [
  { title: "Tree Removal", description: "Careful help for hazardous, damaged, or unwanted trees.", href: "/services/tree-removal", icon: TreePine },
  { title: "Tree Trimming", description: "Thoughtful pruning for safer clearance and healthier-looking trees.", href: "/services/tree-trimming", icon: Scissors },
  { title: "Stump Grinding", description: "A practical way to remove old stumps and reclaim usable yard space.", href: "/services/stump-grinding", icon: CircleOff },
  { title: "Storm & Emergency Help", description: "Safety-focused help for storm damage, fallen trees, and urgent hazards.", href: "/services/emergency-tree-service", icon: CloudLightning },
];

const reasons = [
  "Free estimates with practical next-step guidance",
  "Safety-focused planning around people and property",
  "Professional equipment and organized work areas",
  "Clear communication and thorough cleanup expectations",
];

export default function LocationPage({ location }: LocationPageProps) {
  return (
    <main className="bg-white text-gray-900">
      <ServiceHero
        title={`Professional Tree Service in ${location.city}`}
        subtitle={`Clear, safety-focused tree care for ${location.city} homes, businesses, and property managers across the Metro East.`}
        image={location.heroImage}
        imageAlt={location.heroAlt}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Tree Service in {location.city}
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              A clear next step for your property.
            </h2>
          </div>
          <div className="max-w-2xl text-lg leading-8 text-gray-600">
            <p>{location.introduction}</p>
            <p className="mt-5">{location.serviceFocus}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">Services Offered</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              The professional tree help your {location.city} property needs.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{service.description}</p>
                  <span className="mt-6 inline-flex items-center font-bold text-green-700">
                    Explore service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] bg-gray-900 p-9 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Why Choose Metro East Tree Pros</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Professional tree work, handled with care.
            </h2>
            <p className="mt-7 text-lg leading-8 text-gray-300">{location.whyChooseCopy}</p>
          </div>
          <ul className="space-y-5" aria-label={`Reasons to choose Metro East Tree Pros in ${location.city}`}>
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-4 rounded-2xl border border-gray-100 p-5 text-lg font-semibold text-gray-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-700" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">Local Questions, Clear Answers</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              {location.city} tree-service FAQs.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {location.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:border-green-200 hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold">
                  {faq.question}
                  <span className="text-2xl text-green-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">Get a Free Estimate</p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Tell us what your {location.city} property needs.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Share a few project details and Metro East Tree Pros will help you understand the next best step.
          </p>
          <Link href="#estimate" className="mt-10 inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200">
            Get a Free Estimate
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest defaultCity={location.city} />
        </div>
      </section>
    </main>
  );
}
