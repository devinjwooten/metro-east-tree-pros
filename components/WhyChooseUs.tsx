import Image from "next/image";
import { BadgeDollarSign, Check, HardHat, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const features = [
  { icon: HardHat, title: "Experienced crews", text: "A capable team that understands tree work and the property around it." },
  { icon: ShieldCheck, title: "Safety-first approach", text: "Every project starts with a thoughtful plan for people, structures, and access." },
  { icon: Wrench, title: "Modern equipment", text: "The right tools help us work efficiently while staying precise and controlled." },
  { icon: Sparkles, title: "Complete cleanup", text: "We leave your work area clean so you can enjoy the result, not manage the mess." },
  { icon: BadgeDollarSign, title: "Honest pricing", text: "Clear estimates and straightforward guidance before work begins." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <Image
            src="/images/crew.jpg"
            alt="Metro East Tree Pros crew"
            width={700}
            height={850}
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
            final cleanup, with clear communication and respect for your home,
            time, and landscape.
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
            Free estimates and practical recommendations for your property.
          </p>
        </div>
      </div>
    </section>
  );
}
