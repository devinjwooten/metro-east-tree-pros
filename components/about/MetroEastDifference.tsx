import {
  MessageCircle,
  ClipboardCheck,
  CalendarClock,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "From your first call to the final cleanup, you'll always know what to expect and what's happening next.",
  },
  {
    icon: ClipboardCheck,
    title: "Straightforward Estimates",
    description:
      "Clear recommendations and transparent pricing help you make informed decisions without unnecessary pressure.",
  },
  {
    icon: CalendarClock,
    title: "Organized Scheduling",
    description:
      "Projects are planned carefully to keep the process efficient, dependable, and respectful of your time.",
  },
  {
    icon: Sparkles,
    title: "Respect for Your Property",
    description:
      "A successful project isn't just about the tree—it's about leaving your property clean, safe, and looking its best.",
  },
];

export default function MetroEastDifference() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          eyebrow="THE METRO EAST DIFFERENCE"
          title="A Better"
          highlight="Customer Experience"
          description="Professional tree service should feel simple, organized, and stress-free. Every step of the process is designed around clear communication and dependable service."
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}