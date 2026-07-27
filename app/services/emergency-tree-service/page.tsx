import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import EstimateRequest from "@/components/EstimateRequest";
import RelatedServices from "@/components/RelatedServices";
import {
  createFaqJsonLd,
  createPageMetadata,
  createServiceJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Emergency Tree Service in Metro East, Illinois",
  description:
    "Safety-focused emergency tree service for fallen trees, dangerous limbs, blocked access, and storm damage throughout the Metro East, Illinois.",
  path: "/services/emergency-tree-service",
  image: "/images/services/emergency-tree-service-hero.jpg",
  imageAlt: "Tree-service crew safely stabilizing a storm-damaged tree",
});

const urgentSituations = [
  {
    title: "A tree has fallen",
    text: "A downed tree can damage structures, block access, and create hazards that need a prompt professional response.",
  },
  {
    title: "A tree is on your home",
    text: "Protect people and property by keeping clear of the area and calling for help as soon as it is safe to do so.",
  },
  {
    title: "Your driveway is blocked",
    text: "Fallen trees and large limbs can prevent safe access to your home, business, or emergency routes.",
  },
  {
    title: "Storm-damaged limbs remain",
    text: "Cracked, split, or partially detached limbs can fail after the storm has passed.",
  },
  {
    title: "A tree is suddenly leaning",
    text: "A new or worsening lean can signal root or structural failure and should be assessed quickly.",
  },
  {
    title: "Branches are hanging overhead",
    text: "Broken branches suspended in the canopy can fall unexpectedly and should not be handled from the ground.",
  },
];

const emergencyServices = [
  {
    title: "Storm cleanup",
    text: "We clear storm-damaged branches and trees to help restore safe access to your property.",
  },
  {
    title: "Emergency tree removal",
    text: "When a damaged or fallen tree creates an immediate risk, we plan a controlled removal.",
  },
  {
    title: "Hazard limb removal",
    text: "We address dangerous hanging, split, or compromised limbs before they cause more damage.",
  },
  {
    title: "Insurance claim assistance",
    text: "We provide clear job details to help you document tree-related damage for your claim process.",
  },
  {
    title: "Debris cleanup",
    text: "After the urgent work is complete, we remove debris and leave the work area clean and manageable.",
  },
];

const process = [
  {
    step: "01",
    title: "Call Us",
    text: "Tell us what happened, where the tree is located, and whether anyone or any structure is in immediate danger.",
  },
  {
    step: "02",
    title: "Rapid Dispatch",
    text: "We assess the information, prioritize urgent conditions, and coordinate the next available response.",
  },
  {
    step: "03",
    title: "Safe Removal",
    text: "Our crew evaluates the site and carries out the work with a focused plan for the surrounding property.",
  },
  {
    step: "04",
    title: "Complete Cleanup",
    text: "We clear agreed-upon debris and walk through the completed work so you know what comes next.",
  },
];

const faqs = [
  {
    question: "What should I do if a tree falls on my house?",
    answer:
      "If there is an immediate danger to people, call 911 first. Avoid the affected area, stay clear of downed power lines, and contact Metro East Tree Pros when it is safe to discuss the tree damage.",
  },
  {
    question: "Do you provide emergency service after storms?",
    answer:
      "Yes. We help Metro East property owners address fallen trees, storm-damaged limbs, blocked access, and other urgent tree hazards after severe weather.",
  },
  {
    question: "Can you remove a tree that is leaning toward my home?",
    answer:
      "A sudden or worsening lean should be assessed promptly. We will evaluate the tree, access, and surrounding structures to recommend the safest next step.",
  },
  {
    question: "Will you work near power lines?",
    answer:
      "Power lines require special precautions. Keep your distance and contact the utility provider if a line is down or involved. We will assess what tree work can be safely completed once the site is secure.",
  },
  {
    question: "Can you help with insurance documentation?",
    answer:
      "We can provide clear details about the emergency tree work performed to support your documentation process. Your insurance provider can advise you on their specific requirements.",
  },
  {
    question: "What happens to the branches and debris?",
    answer:
      "Cleanup is part of our emergency service plan. We will explain the debris-removal scope before work begins so there are no surprises.",
  },
  {
    question: "Do I need to be home for emergency tree service?",
    answer:
      "Not always. When access and project details are arranged in advance, we can often coordinate service while you are away. We will communicate the plan clearly first.",
  },
];

export default function EmergencyTreeServicePage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createServiceJsonLd({
              name: "Emergency Tree Service",
              description:
                "Safety-focused emergency tree service for fallen trees, dangerous limbs, blocked access, and storm damage throughout the Metro East, Illinois.",
              path: "/services/emergency-tree-service",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }}
      />
      <ServiceHero
        title="24/7 Emergency Tree Service"
        subtitle="Fast storm damage response and safety-focused tree care when your Metro East property cannot wait."
        image="/images/services/emergency-tree-service-hero.jpg"
        imageAlt="Tree-service crew safely stabilizing a storm-damaged tree"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Fast Storm Damage Response
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              When a tree emergency changes everything, start with one call.
            </h2>
          </div>
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <div className="flex gap-4">
              <AlertTriangle className="h-7 w-7 shrink-0 text-amber-700" aria-hidden="true" />
              <p className="leading-8 text-amber-950">
                If a tree has brought down power lines, created an immediate risk
                to people, or caused a life-threatening situation, call 911 and
                your utility provider first. Keep a safe distance from the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Immediate Response
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Call when the tree situation feels unsafe.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Storms and sudden tree failures do not wait for a convenient time.
              These are common situations where a professional assessment should
              happen as soon as possible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {urgentSituations.map((situation) => (
              <article
                key={situation.title}
                className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <AlertTriangle className="h-7 w-7 text-green-700" aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-bold">{situation.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{situation.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[2rem] bg-green-700 p-9 text-white sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
                Emergency Services
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                The help you need after the unexpected.
              </h2>
              <p className="mt-7 text-lg leading-8 text-green-50">
                From the first assessment to the final debris pass, we focus on
                the urgent tree work that helps make your property safer and
                more manageable again.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {emergencyServices.map((service, index) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-gray-100 p-7 shadow-sm transition hover:border-green-200 hover:bg-green-50/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 font-black text-white">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Our Emergency Process
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              A clear plan when the situation is anything but routine.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="text-5xl font-black text-green-400">{item.step}</span>
                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 lg:grid-cols-[1fr_1.2fr] lg:p-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
                Why Metro East Tree Pros
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Calm, capable help when you need it most.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Fast response coordination for urgent tree hazards",
                "A safety-first plan tailored to the conditions on site",
                "Professional equipment for controlled emergency tree work",
                "Thorough cleanup with clear expectations from the start",
                "Honest communication about the scope and next best step",
              ].map((reason) => (
                <p key={reason} className="flex gap-3 leading-7 text-gray-600">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Frequently Asked Questions
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Emergency tree service answers, made clear.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:border-green-200 hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold">
                  {faq.question}
                  <span className="text-2xl text-green-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentService="emergencyTreeService" />

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest defaultService="Emergency Tree Service" />
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            Emergency Help Across the Metro East
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Call now for emergency tree assistance.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Metro East Tree Pros helps homeowners and businesses in Belleville,
            O&apos;Fallon, Edwardsville, Collinsville, Fairview Heights, Swansea,
            Shiloh, Columbia, Waterloo, and nearby communities respond to urgent
            tree hazards with a clear, safety-focused plan.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
              Call (314) 474-7087
            </Link>
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
