import Link from "next/link";
import { ArrowRight, CircleAlert, LandPlot, Scissors, Trees } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Tree Removal",
    description: "Careful removal for dead, hazardous, damaged, or unwanted trees.",
    href: "/services/tree-removal",
  },
  {
    icon: Scissors,
    title: "Tree Trimming",
    description: "Thoughtful pruning that supports healthier growth and safer spaces.",
    href: "/services/tree-trimming",
  },
  {
    icon: LandPlot,
    title: "Stump Grinding",
    description: "A clean, practical finish that helps you reclaim your outdoor space.",
    href: "/services/stump-grinding",
  },
  {
    icon: CircleAlert,
    title: "Emergency Tree Service",
    description: "Prompt help for fallen trees, storm damage, and immediate hazards.",
    href: "/services/emergency-tree-service",
  },
  {
    icon: Trees,
    title: "Lot & Land Clearing",
    description: "Site-ready tree and brush clearing for property improvements and new plans.",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            What We Do
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            The tree services your property needs, all in one place.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From a single troublesome limb to a major property project, our
            crews bring the experience and equipment to get the work done right.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-7 text-sm font-bold tracking-[0.18em] text-green-700">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-black">{service.title}</h3>
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
  );
}
