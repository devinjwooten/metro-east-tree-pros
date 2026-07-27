import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
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
  title: "Stump Grinding in Metro East, Illinois",
  description:
    "Clear unwanted stumps with professional stump grinding that helps restore a safer, more usable Metro East property.",
  path: "/services/stump-grinding",
  image: "/images/services/stump-grinding-hero.jpg",
  imageAlt: "Professional stump grinder removing a stump from a landscaped yard",
});

const benefits = [
  {
    title: "Reclaim usable space",
    text: "Turn an awkward obstacle into lawn, planting space, or a clean area for your next project.",
  },
  {
    title: "Reduce trip hazards",
    text: "A low stump can still create a problem for children, guests, mowing equipment, and everyday foot traffic.",
  },
  {
    title: "Discourage pests and decay",
    text: "Old stumps can attract insects and fungi as they break down, especially in damp or shaded areas.",
  },
  {
    title: "Finish the job beautifully",
    text: "Grinding provides a clean, practical finish after tree removal and helps restore the look of your landscape.",
  },
];

const reasonsToRemove = [
  "The stump is in the way of mowing, parking, play areas, or future landscaping.",
  "New shoots keep appearing around the old stump or root system.",
  "The wood is soft, decaying, or showing signs of insect activity.",
  "You want to prepare the area for sod, a garden bed, a patio, or new planting.",
];

const process = [
  {
    step: "01",
    title: "Evaluate the site",
    text: "We review the stump, access, surrounding landscape, and your plans for the area.",
  },
  {
    step: "02",
    title: "Plan the work",
    text: "Our team identifies the best approach for a controlled, efficient job with minimal disruption.",
  },
  {
    step: "03",
    title: "Grind below grade",
    text: "We grind the stump down to help create a smooth, usable surface for your next step.",
  },
  {
    step: "04",
    title: "Clean up thoroughly",
    text: "We remove debris as agreed and leave the work area neat, clear, and ready to enjoy.",
  },
];

const faqs = [
  {
    question: "How deep do you grind a stump?",
    answer:
      "The ideal depth depends on your plans for the space. We will discuss the site and recommend a practical depth for lawn restoration, planting, or another project.",
  },
  {
    question: "Can I plant a new tree where a stump was removed?",
    answer:
      "Often, yes, although the best new planting location may be slightly offset from the old stump and remaining roots. We can help you understand what to expect after grinding.",
  },
  {
    question: "What happens to the wood chips?",
    answer:
      "We will review cleanup options with you before work begins. Grindings can be removed or, in some situations, retained for use elsewhere on the property.",
  },
  {
    question: "Do I need to be home for stump grinding?",
    answer:
      "Not always. If access and the project details are clearly arranged in advance, we can often complete the work while you are away.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Metro East Tree Pros provides straightforward, no-pressure estimates for stump grinding projects.",
  },
];

export default function StumpGrindingPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createServiceJsonLd({
              name: "Stump Grinding",
              description:
                "Professional stump grinding to help restore a safer, more usable property throughout the Metro East, Illinois.",
              path: "/services/stump-grinding",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }}
      />
      <ServiceHero
        title="Professional Stump Grinding"
        subtitle="Clear away unwanted stumps with a clean, practical solution from Metro East Tree Pros."
        image="/images/services/stump-grinding-hero.jpg"
        imageAlt="Professional stump grinder removing a stump from a landscaped yard"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Stump Grinding
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              A clean finish for the trees you have outgrown.
            </h2>
          </div>
          <p className="text-lg leading-8 text-gray-600">
            A leftover stump can make a beautiful property feel unfinished.
            Metro East Tree Pros provides stump grinding that helps homeowners,
            businesses, and property managers restore usable space with less
            hassle and a more polished result.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              The Benefits
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              More than a cosmetic improvement.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-lg font-black text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-7 text-2xl font-bold">{benefit.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{benefit.text}</p>
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
                Why Remove an Old Stump?
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Make room for what comes next.
              </h2>
              <p className="mt-7 text-lg leading-8 text-green-50">
                Stumps do not improve with time. Grinding is a proactive way to
                remove an obstacle, improve safety, and prepare your landscape
                for the way you want to use it.
              </p>
            </div>

            <div className="space-y-4">
              {reasonsToRemove.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-4 rounded-3xl border border-gray-100 p-6 shadow-sm"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <p className="leading-7 text-gray-600">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Service for Every Property
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Ground-level solutions, tailored to your site.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-9 shadow-lg shadow-slate-200/60 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Residential Stump Grinding
              </p>
              <h3 className="mt-4 text-3xl font-black">Restore the spaces around home.</h3>
              <p className="mt-6 leading-8 text-gray-600">
                Whether you are reclaiming a backyard, refreshing your front
                lawn, or preparing for a landscaping project, we help create a
                cleaner canvas around your home in Belleville, O&apos;Fallon,
                Edwardsville, Collinsville, Fairview Heights, Swansea, Shiloh,
                Columbia, and Waterloo.
              </p>
              <ul className="mt-7 space-y-3 text-gray-700">
                <li>Driveway, lawn, and garden-area stump removal</li>
                <li>Preparation for sod, planting, and outdoor projects</li>
                <li>Thoughtful work around established landscaping</li>
              </ul>
            </article>

            <article className="rounded-[2rem] bg-gray-900 p-9 text-white shadow-lg sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Commercial Stump Grinding
              </p>
              <h3 className="mt-4 text-3xl font-black">Keep your grounds safe and presentable.</h3>
              <p className="mt-6 leading-8 text-gray-300">
                For property managers, businesses, and community spaces, old
                stumps can affect both appearance and accessibility. We provide
                clear communication, site-conscious planning, and dependable
                cleanup for commercial properties across the Metro East.
              </p>
              <ul className="mt-7 space-y-3 text-gray-200">
                <li>Common-area, parking, and walkway clearance</li>
                <li>Site preparation for maintenance and improvements</li>
                <li>Professional completion with minimal disruption</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Our Process
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              A straightforward path from stump to usable space.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute right-6 top-4 text-6xl font-black text-green-100">
                  {item.step}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 font-black text-white">
                  {item.step}
                </span>
                <h3 className="relative mt-7 text-2xl font-bold">{item.title}</h3>
                <p className="relative mt-4 leading-8 text-gray-600">{item.text}</p>
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
                Safety & Cleanup
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Detail matters at every stage.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "A site review that considers access, nearby features, and your goals",
                "Careful planning around work areas and surrounding landscaping",
                "Professional equipment selected for efficient, controlled grinding",
                "Clear expectations for cleanup and the remaining grindings",
              ].map((item) => (
                <p key={item} className="flex gap-3 leading-7 text-gray-600">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />
                  {item}
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
              Stump grinding answers, made simple.
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

      <RelatedServices currentService="stumpGrinding" />

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest defaultService="Stump Grinding" />
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            Ready to Clear the Way?
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Let&apos;s put that stump behind you.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Request a free stump grinding estimate from Metro East Tree Pros and
            take the next step toward a safer, more usable property.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200"
            >
              Get a Free Estimate
              <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
            >
              <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
              Call (314) 474-7087
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
