import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Leaf,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Every project is completed safely while protecting your home and property.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    text: "Quick scheduling and emergency tree service when you need it most.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    text: "Free estimates with straightforward pricing and no hidden surprises.",
  },
  {
    icon: Leaf,
    title: "Professional Equipment",
    text: "Modern equipment allows us to complete jobs safely and efficiently.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f6fbf7] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-green-700">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-black leading-tight text-gray-900">
              Trusted Tree Experts
              <br />
              Serving the Metro East
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Whether you need a dangerous tree removed, routine trimming,
              or emergency storm cleanup, Metro East Tree Pros delivers
              dependable workmanship with safety, professionalism,
              and customer satisfaction as our highest priorities.
            </p>

            <div className="mt-12 space-y-6">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="rounded-xl bg-green-100 p-4">
                      <Icon className="h-8 w-8 text-green-700" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Get Your Free Estimate

              <ArrowRight size={18} />
            </a>

          </div>

          <div className="relative">

            <Image
              src="/images/crew.jpg"
              alt="Tree crew"
              width={700}
              height={850}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-xl">

              <div className="text-4xl font-black text-green-700">
                24/7
              </div>

              <div className="font-semibold text-gray-700">
                Emergency Service
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}