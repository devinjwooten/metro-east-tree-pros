import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Leaf,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      text: "Your property is protected and every job is completed safely.",
    },
    {
      icon: Clock3,
      title: "Fast Response",
      text: "Quick scheduling and emergency service when you need it most.",
    },
    {
      icon: BadgeDollarSign,
      title: "Honest Pricing",
      text: "Free estimates with straightforward pricing and no surprises.",
    },
    {
      icon: Leaf,
      title: "Professional Equipment",
      text: "Modern equipment for safe, efficient tree removal and cleanup.",
    },
  ];

  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Tree Care You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We proudly serve homeowners and businesses throughout the Metro East
            with dependable tree services, professional equipment, and a commitment
            to doing the job right.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="flex gap-5 rounded-2xl bg-white p-8 shadow-md transition hover:shadow-xl"
              >
                <div className="rounded-xl bg-green-100 p-4">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}