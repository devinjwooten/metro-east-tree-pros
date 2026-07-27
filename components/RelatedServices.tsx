import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceKey =
  | "treeRemoval"
  | "treeTrimming"
  | "stumpGrinding"
  | "stormCleanup"
  | "emergencyTreeService";

type RelatedServicesProps = {
  currentService: ServiceKey;
};

const relatedServices: Record<ServiceKey, { title: string; href: string }[]> = {
  treeRemoval: [
    { title: "Stump Grinding", href: "/services/stump-grinding" },
    { title: "Emergency Tree Service", href: "/services/emergency-tree-service" },
    { title: "Tree Trimming", href: "/services/tree-trimming" },
  ],
  treeTrimming: [
    { title: "Tree Removal", href: "/services/tree-removal" },
    { title: "Stump Grinding", href: "/services/stump-grinding" },
    { title: "Emergency Tree Service", href: "/services/emergency-tree-service" },
  ],
  stumpGrinding: [
    { title: "Tree Removal", href: "/services/tree-removal" },
    { title: "Tree Trimming", href: "/services/tree-trimming" },
    { title: "Storm Cleanup", href: "/services/storm-cleanup" },
  ],
  stormCleanup: [
    { title: "Emergency Tree Service", href: "/services/emergency-tree-service" },
    { title: "Tree Removal", href: "/services/tree-removal" },
    { title: "Stump Grinding", href: "/services/stump-grinding" },
  ],
  emergencyTreeService: [
    { title: "Storm Cleanup", href: "/services/storm-cleanup" },
    { title: "Tree Removal", href: "/services/tree-removal" },
    { title: "Tree Trimming", href: "/services/tree-trimming" },
  ],
};

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-[2rem] border border-gray-100 bg-slate-50 p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Related Services
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Explore the next service your property may need.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Not sure which service fits the situation? Contact Metro East Tree
              Pros to discuss your property and request a clear next step.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center font-bold text-green-700 transition hover:text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
            >
              Contact Metro East Tree Pros
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:self-end">
            {relatedServices[currentService].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
              >
                <span className="text-lg font-black text-gray-900">{service.title}</span>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-green-700">
                  Explore service
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
