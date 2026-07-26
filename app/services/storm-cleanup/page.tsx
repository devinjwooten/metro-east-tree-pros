import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Phone } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import EstimateRequest from "@/components/EstimateRequest";
import {
  createFaqJsonLd,
  createPageMetadata,
  createServiceJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

const priorities = [
  {
    title: "Fallen trees and large limbs",
    text: "Clear blocked driveways, damaged outdoor spaces, and dangerous debris with a plan that respects the property around it.",
  },
  {
    title: "Hanging or split branches",
    text: "Storm-damaged limbs can remain unstable after the weather clears and should be assessed before anyone works beneath them.",
  },
  {
    title: "Damaged trees near structures",
    text: "Trees that have shifted, cracked, or lost major limbs may need timely attention to reduce further risk.",
  },
  {
    title: "Access and cleanup needs",
    text: "Downed branches can make homes, businesses, walks, and driveways difficult to use safely after a storm.",
  },
];

const process = [
  {
    step: "01",
    title: "Call and describe the damage",
    text: "Let us know what happened, where the tree is located, and whether access or structures are affected.",
  },
  {
    step: "02",
    title: "Assess the safest next step",
    text: "We review the conditions, access, and priority work needed to make the property more manageable.",
  },
  {
    step: "03",
    title: "Clear the storm damage",
    text: "Our crew carries out the agreed work with a focused plan for trees, limbs, debris, and surrounding property.",
  },
  {
    step: "04",
    title: "Finish with cleanup",
    text: "We remove agreed debris and leave the work area clear so you can focus on the next stage of recovery.",
  },
];

const faqs = [
  {
    question: "What should I do after a storm damages a tree?",
    answer:
      "Keep clear of fallen limbs, unstable trees, and any downed power lines. If there is immediate danger, call 911 and your utility provider first. Then contact Metro East Tree Pros to discuss the tree damage when it is safe to do so.",
  },
  {
    question: "Can you clear a driveway blocked by a fallen tree?",
    answer:
      "Yes. We can assess fallen trees and large limbs that are preventing safe access to your home or business and recommend the right cleanup approach.",
  },
  {
    question: "Do damaged branches need attention if they are still in the tree?",
    answer:
      "Often, yes. Split, hanging, or partially detached limbs can fail after the storm and should be evaluated before people use the area below.",
  },
  {
    question: "Can you help with storm debris cleanup?",
    answer:
      "We include cleanup as part of the agreed project scope and will explain what debris removal looks like before the work begins.",
  },
  {
    question: "Do I need to be home during storm cleanup?",
    answer:
      "Not always. When access and project details are arranged in advance, we can often coordinate work while you are away.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Storm Cleanup and Tree Damage Service in Metro East, Illinois",
  description:
    "Safety-focused storm cleanup for fallen trees, damaged limbs, blocked access, and debris throughout the Metro East, Illinois.",
  path: "/services/storm-cleanup",
});

export default function StormCleanupPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createServiceJsonLd({
              name: "Storm Cleanup and Tree Damage Service",
              description:
                "Safety-focused storm cleanup for fallen trees, damaged limbs, blocked access, and debris throughout the Metro East, Illinois.",
              path: "/services/storm-cleanup",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }}
      />
      <ServiceHero
        title="Storm Cleanup & Tree Damage Service"
        subtitle="Safety-focused help for fallen trees, damaged limbs, blocked access, and the cleanup that helps your Metro East property recover."
        image="/images/services/storm-cleanup-hero.jpg"
        imageAlt="Professional crew clearing storm-damaged branches from a residential driveway"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              After the Storm
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Restore safe access with a calm, clear plan.
            </h2>
          </div>
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <div className="flex gap-4">
              <AlertTriangle className="h-7 w-7 shrink-0 text-amber-700" aria-hidden="true" />
              <p className="leading-8 text-amber-950">
                Keep clear of downed power lines and damaged trees. For immediate
                danger to people or utility lines, call 911 and your utility
                provider before arranging tree service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              When to Call
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Storm damage is not always obvious from the ground.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              High winds and severe weather can leave trees, limbs, and access
              areas in a condition that needs professional attention. These are
              common situations we help property owners address.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {priorities.map((priority, index) => (
              <article
                key={priority.title}
                className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 font-black text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-bold">{priority.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{priority.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 rounded-[2rem] bg-gray-900 p-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
                Storm Cleanup Process
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Clear communication from the first call through final cleanup.
              </h2>
              <p className="mt-7 text-lg leading-8 text-gray-300">
                Recovery feels easier when you know what happens next. We focus
                on the practical work needed to improve safety and restore access.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {process.map((item) => (
                <article key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="text-4xl font-black text-green-400">{item.step}</span>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Frequently Asked Questions
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Storm cleanup answers, made clear.
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

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest />
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            Storm Help Across the Metro East
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Need help after a storm? Call us now.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Metro East Tree Pros serves Belleville, O&apos;Fallon, Edwardsville,
            Collinsville, Fairview Heights, Swansea, Shiloh, Columbia, Waterloo,
            and nearby communities with professional storm-damage tree service.
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
            >
              Request a Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
