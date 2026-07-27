import type { Metadata } from "next";
import Link from "next/link";
import {
  TreePine,
  Scissors,
  CircleOff,
  CloudLightning,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import EstimateRequest from "@/components/EstimateRequest";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tree Services in Metro East, Illinois",
  description:
    "Explore professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service from Metro East Tree Pros.",
  path: "/services",
});

const services = [
  {
    title: "Tree Removal",
    description:
      "Safe removal of hazardous, damaged, or unwanted trees.",
    href: "/services/tree-removal",
    icon: TreePine,
  },
  {
    title: "Tree Trimming",
    description:
      "Improve the health, appearance, and safety of your trees.",
    href: "/services/tree-trimming",
    icon: Scissors,
  },
  {
    title: "Stump Grinding",
    description:
      "Remove unsightly stumps and reclaim your outdoor space.",
    href: "/services/stump-grinding",
    icon: CircleOff,
  },
  {
    title: "Storm Cleanup",
    description:
      "Fast cleanup after storms to restore your property.",
    href: "/services/storm-cleanup",
    icon: CloudLightning,
  },
  {
    title: "Emergency Tree Service",
    description:
      "Responsive service when hazardous trees can't wait.",
    href: "/services/emergency-tree-service",
    icon: ShieldAlert,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-green-900 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-300">
            OUR SERVICES
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Professional Tree Services
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">
            Whether you need routine maintenance or urgent tree removal,
            Metro East Tree Pros makes the process simple with responsive
            communication and dependable service.
          </p>
          <Link
            href="#estimate"
            className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-800 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200"
          >
            Get a Free Estimate
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center font-semibold text-green-700 hover:text-green-900"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest />
        </div>
      </section>
    </main>
  );
}
