import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "A professional approach to the work and the property around it." },
  { icon: BadgeCheck, title: "Free Estimates", text: "Practical guidance to help you understand the next best step." },
  { icon: Zap, title: "Fast Response", text: "Clear communication when a tree concern needs timely attention." },
  { icon: Wrench, title: "Professional Equipment", text: "The right tools help keep work controlled, efficient, and organized." },
  { icon: Building2, title: "Residential & Commercial", text: "Thoughtful service for homes, businesses, and managed properties." },
  { icon: Sparkles, title: "Complete Cleanup", text: "We leave the work area clean and ready for what comes next." },
  { icon: HeartHandshake, title: "Customer Satisfaction", text: "A clear process built around your questions, property, and expectations." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <Image
            src="/images/crew.jpg"
            alt="Professional tree-service crew beside organized equipment"
            width={700}
            height={850}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/5] rounded-[2rem] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-green-700 p-6 text-white shadow-xl sm:-bottom-8 sm:-right-8">
            <p className="text-3xl font-black">Local</p>
            <p className="mt-1 max-w-32 text-sm leading-6 text-green-50">Service built around your property.</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            Why Choose Metro East Tree Pros
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Professional work is about more than the tree.
          </h2>
          <p className="mt-7 text-lg leading-8 text-gray-600">
            We focus on a well-run experience from the first estimate through
            final cleanup, with safety-focused planning and respect for your
            home, time, and landscape.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <Icon className="h-6 w-6 text-green-700" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.text}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-7 flex items-center gap-3 font-semibold text-gray-700">
            <Check className="h-5 w-5 text-green-700" aria-hidden="true" />
            Safety-focused planning and practical recommendations for your property.
          </p>
        </div>
      </div>
    </section>
  );
}
