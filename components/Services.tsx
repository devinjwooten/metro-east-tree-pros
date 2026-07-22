import {
  Trees,
  Scissors,
  Hammer,
  ShieldAlert,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Trees,
      title: "Tree Removal",
      description:
        "Safe removal of hazardous, dead, or unwanted trees using professional equipment.",
    },
    {
      icon: Scissors,
      title: "Tree Trimming",
      description:
        "Improve the health, appearance, and safety of your trees with expert trimming.",
    },
    {
      icon: Hammer,
      title: "Stump Grinding",
      description:
        "Remove unsightly stumps and reclaim your yard quickly and efficiently.",
    },
    {
      icon: ShieldAlert,
      title: "Emergency Service",
      description:
        "Fast response for storm damage, fallen trees, and dangerous limbs.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            What We Do
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Professional Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We provide dependable tree services throughout the Metro East,
            helping homeowners and businesses keep their properties safe and beautiful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-green-100 p-4">
                  <Icon className="h-10 w-10 text-green-700" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mb-8 text-gray-600">
                  {service.description}
                </p>

                <button className="font-semibold text-green-700 transition hover:text-green-900">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}