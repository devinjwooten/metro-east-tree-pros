import {
  ClipboardList,
  CalendarDays,
  TreePine,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Request a Free Estimate",
    description:
      "Tell us about your project and we'll respond promptly to discuss your tree service needs.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Schedule Your Service",
    description:
      "Choose a convenient time and we'll coordinate every detail before work begins.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Professional Project Completion",
    description:
      "Your project is completed with attention to safety, quality, and respect for your property.",
    icon: TreePine,
  },
  {
    number: "04",
    title: "Final Cleanup & Satisfaction",
    description:
      "We finish with a thorough cleanup and make sure you're satisfied before the project is complete.",
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Simple From Start"
          highlight="to Finish"
          description="Our goal is to make the entire process clear, organized, and stress-free from your first call to the final cleanup."
          align="center"
        />

        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-green-100 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-green-700 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <p className="mt-6 text-sm font-bold tracking-[0.25em] text-green-700">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}