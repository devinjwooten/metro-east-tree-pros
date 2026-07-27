import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Tree Trimming and Pruning in Metro East, Illinois",
  description:
    "Professional tree trimming and pruning for healthier trees, safer properties, and practical clearance throughout the Metro East, Illinois.",
  path: "/services/tree-trimming",
  image: "/images/services/tree-trimming-hero.jpg",
  imageAlt: "Arborist carefully pruning a mature tree at a residential property",
});

const benefits = [
  {
    title: "Healthier, stronger growth",
    text: "Selective pruning removes compromised limbs and gives the canopy the airflow and sunlight it needs to thrive.",
  },
  {
    title: "A safer property",
    text: "Addressing weak, dead, and overextended branches helps reduce risks around your home, driveway, and outdoor spaces.",
  },
  {
    title: "A more polished landscape",
    text: "Well-maintained trees frame your property beautifully and help preserve the curb appeal you have worked hard to create.",
  },
  {
    title: "Better clearance",
    text: "We create practical clearance from roofs, walkways, vehicles, and other structures while respecting the tree's natural form.",
  },
];

const warningSigns = [
  {
    title: "Dead, cracked, or hanging limbs",
    text: "Damaged branches can fail without warning, especially during high winds or heavy storms.",
  },
  {
    title: "Branches against your roof",
    text: "Overhanging limbs can wear on roofing materials and create convenient pathways for pests.",
  },
  {
    title: "An overly dense canopy",
    text: "Crowded growth limits light and air circulation, which can leave a tree more vulnerable to disease and breakage.",
  },
  {
    title: "Low or obstructive growth",
    text: "Limbs over driveways, sidewalks, patios, or signs can become a daily inconvenience and a safety concern.",
  },
];

const seasonalCare = [
  {
    season: "Late winter",
    text: "Dormant-season pruning is often ideal for shaping many deciduous trees before spring growth begins.",
  },
  {
    season: "Spring & summer",
    text: "We assess new growth, remove damaged limbs, and improve clearance where active landscapes need attention.",
  },
  {
    season: "Fall",
    text: "A proactive inspection helps identify weak branches before winter weather and storm season arrive.",
  },
];

const faqs = [
  {
    question: "How often should trees be trimmed?",
    answer:
      "The right schedule depends on the tree species, age, health, and location. Many mature trees benefit from an inspection every few years, while fast-growing or high-traffic areas may need more frequent attention.",
  },
  {
    question: "Can you trim branches near my house?",
    answer:
      "Yes. We plan each job around nearby structures, landscaping, and access points to safely create the clearance your property needs.",
  },
  {
    question: "Is tree trimming safe in every season?",
    answer:
      "Emergency work can be performed when needed. For routine pruning, the best timing varies by species and the condition of the tree, so we will recommend an approach tailored to your property.",
  },
  {
    question: "Do you remove branches and debris?",
    answer:
      "Yes. We include a thorough cleanup so your property is left neat and ready to enjoy when the work is complete.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Absolutely. Contact Metro East Tree Pros to discuss your trimming needs and request a free estimate.",
  },
];

export default function TreeTrimmingPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createServiceJsonLd({
              name: "Tree Trimming and Pruning",
              description:
                "Professional tree trimming and pruning for healthier trees, safer properties, and practical clearance throughout the Metro East, Illinois.",
              path: "/services/tree-trimming",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }}
      />
      <ServiceHero
        title="Professional Tree Trimming & Pruning"
        subtitle="Thoughtful pruning for healthier trees, safer properties, and a landscape that looks cared for in every season."
        image="/images/services/tree-trimming-hero.jpg"
        imageAlt="Tree trimming and pruning service scene"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Tree Trimming
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Care that protects the tree and the property around it.
            </h2>
          </div>
          <p className="text-lg leading-8 text-gray-600">
            Proper trimming is never just about cutting branches. Our team
            evaluates the condition, structure, and surroundings of every tree
            to make smart recommendations that support long-term health and
            improve day-to-day safety.
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
              A better-looking property starts with healthier trees.
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
                Know the Signs
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                When does a tree need trimming?
              </h2>
              <p className="mt-7 text-lg leading-8 text-green-50">
                Small issues are often easier to address before they become a
                major concern. If something about your tree looks different or
                feels unsafe, a professional assessment is a smart next step.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <article
                  key={sign.title}
                  className="rounded-3xl border border-gray-100 p-7 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-black text-green-700">
                    ✓
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{sign.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{sign.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              Services for Every Property
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Tree care built around how you use your space.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-9 shadow-lg shadow-slate-200/60 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Residential Tree Trimming
              </p>
              <h3 className="mt-4 text-3xl font-black">Make home feel safer and more inviting.</h3>
              <p className="mt-6 leading-8 text-gray-600">
                From a branch brushing the roof to a canopy blocking your garden
                light, we help homeowners improve safety, curb appeal, and the
                health of the trees they enjoy every day.
              </p>
              <ul className="mt-7 space-y-3 text-gray-700">
                <li>• Roof, driveway, and walkway clearance</li>
                <li>• Canopy thinning and structural pruning</li>
                <li>• Storm-damaged limb removal and cleanup</li>
              </ul>
            </article>

            <article className="rounded-[2rem] bg-gray-900 p-9 text-white shadow-lg sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Commercial Tree Trimming
              </p>
              <h3 className="mt-4 text-3xl font-black">Keep your property accessible and presentable.</h3>
              <p className="mt-6 leading-8 text-gray-300">
                Businesses and property managers need dependable tree care that
                respects tenants, customers, schedules, and the appearance of
                the site. We help keep trees maintained without unnecessary
                disruption.
              </p>
              <ul className="mt-7 space-y-3 text-gray-200">
                <li>• Parking, signage, and building clearance</li>
                <li>• Routine maintenance planning</li>
                <li>• Professional cleanup for a polished finish</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
                Seasonal Tree Care
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                The right timing makes a meaningful difference.
              </h2>
              <p className="mt-7 text-lg leading-8 text-gray-600">
                Tree needs change throughout the year. We consider species,
                weather, growth patterns, and your goals when recommending the
                right time for routine maintenance.
              </p>
            </div>

            <div className="space-y-4">
              {seasonalCare.map((item, index) => (
                <article
                  key={item.season}
                  className="flex gap-5 rounded-3xl border border-gray-100 p-6 transition hover:border-green-200 hover:bg-green-50/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 font-black text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{item.season}</h3>
                    <p className="mt-2 leading-7 text-gray-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
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
                Straightforward guidance. Detail-focused work.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Recommendations tailored to your trees and property",
                "A safety-first approach from planning through cleanup",
                "Clear communication and a hassle-free estimate process",
                "Respect for your landscape, time, and surrounding space",
              ].map((reason) => (
                <p key={reason} className="flex gap-3 leading-7 text-gray-600">
                  <span className="font-black text-green-700">✓</span>
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
              Tree trimming answers, made simple.
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
                <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentService="treeTrimming" />

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EstimateRequest defaultService="Tree Trimming" />
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            Ready When You Are
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Give your trees the care they deserve.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Tell us what you are seeing on your property. Metro East Tree Pros
            will help you understand the next best step and provide a free,
            no-pressure estimate.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#estimate"
              className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="tel:3144747087"
              className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
            >
              Call (314) 474-7087
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
