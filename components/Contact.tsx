import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import EstimateRequest from "@/components/EstimateRequest";

const contactOptions = [
  {
    icon: Phone,
    label: "Call for a free estimate",
    detail: "(314) 474-7087",
    href: "tel:3144747087",
  },
  {
    icon: Mail,
    label: "Send us an email",
    detail: "info@metroeasttreepros.com",
    href: "mailto:info@metroeasttreepros.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            Request a Free Estimate
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Start with the option that is easiest for you.
          </h2>
          <p className="mt-7 text-lg leading-8 text-gray-600">
            Tell us what you are seeing on your property, where the work is
            needed, and whether there is an immediate safety concern. We will
            help you understand the next best step.
          </p>

          <div className="mt-10 space-y-5 text-gray-700">
            <p className="flex gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-green-700" aria-hidden="true" />
              Serving the Metro East and nearby communities
            </p>
            <p className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-green-700" aria-hidden="true" />
              Emergency service is available when conditions require it
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Link
                key={option.href}
                href={option.href}
                className="group rounded-[2rem] border border-gray-100 bg-slate-50 p-8 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <Icon className="h-8 w-8 text-green-700" aria-hidden="true" />
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                  {option.label}
                </p>
                <p className="mt-3 break-words text-2xl font-black text-gray-900">
                  {option.detail}
                </p>
                <span className="mt-7 inline-flex items-center font-bold text-green-700">
                  Contact us now
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
        </div>

        <div className="mt-12">
          <EstimateRequest />
        </div>
      </div>
    </section>
  );
}
