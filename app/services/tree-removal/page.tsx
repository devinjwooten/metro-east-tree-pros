import Image from "next/image";
import ServiceHero from "@/components/services/ServiceHero";

export default function TreeRemovalPage() {
  return (
    <main className="bg-white">
      <ServiceHero
        title="Professional Tree Removal"
        subtitle="Whether you're dealing with a dead tree, storm damage, or a tree that's become a safety concern, Metro East Tree Pros makes the removal process simple, safe, and stress-free."
        image="/images/services/tree-removal-hero.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            TREE REMOVAL
          </p>

          <h2 className="mt-4 text-5xl font-black">
            When Should a Tree Be Removed?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            While many trees can be preserved with proper care, there are times
            when removal is the safest and most practical option. Addressing
            hazardous trees early can help protect your home, vehicles, and
            surrounding property.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-16 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
        COMMON WARNING SIGNS
      </p>

      <h2 className="mt-5 text-5xl font-black">
        Signs It May Be Time
        <span className="text-green-700"> To Remove A Tree</span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
        Not every tree needs to be removed, but some situations can create
        serious safety risks. These are some of the most common reasons
        homeowners contact us.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {[
        {
          title: "Dead or Dying Trees",
          text: "Dead trees become unstable over time and can drop large limbs or fall without warning.",
        },
        {
          title: "Storm Damage",
          text: "Strong winds, lightning, and severe weather can weaken a tree's structure.",
        },
        {
          title: "Leaning Trees",
          text: "A tree that suddenly begins leaning may indicate root failure or structural damage.",
        },
        {
          title: "Too Close to Structures",
          text: "Trees growing close to homes, garages, fences, or power lines can become hazardous as they mature.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-2xl text-white">
            🌳
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* Left */}

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          WHY PROFESSIONAL REMOVAL
        </p>

        <h2 className="mt-5 text-5xl font-black">
          Protect Your Home,
          <span className="text-green-700"> Family & Property</span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          Tree removal is more than simply cutting down a tree. Proper planning,
          equipment, and experience help reduce unnecessary risks while
          protecting nearby structures, landscaping, and surrounding property.
        </p>

        <div className="mt-12 space-y-8">

          <div className="flex gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-white font-bold">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Improved Safety
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Removing hazardous trees helps reduce the risk of falling limbs
                and unexpected property damage.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-white font-bold">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Protect Your Property
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Careful planning helps minimize disruption to surrounding
                landscaping, fences, driveways, and nearby structures.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-white font-bold">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Peace of Mind
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Addressing problem trees before they fail can help prevent costly
                repairs and provide confidence during future storms.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right */}

      <div className="relative">
        <Image
          src="/images/services/tree-removal-benefits.jpg"
          alt="Professional tree removal"
          width={900}
          height={700}
          className="rounded-[32px] shadow-2xl"
        />

        <div className="absolute -bottom-8 -left-8 rounded-3xl bg-green-700 p-8 text-white shadow-xl">
          <p className="text-5xl font-black">
            Safety
          </p>

          <p className="mt-2 max-w-[180px]">
            Always comes first.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-16 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
        OUR PROCESS
      </p>

      <h2 className="mt-5 text-5xl font-black">
        What You Can
        <span className="text-green-700"> Expect</span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
        We believe tree service should be simple and organized. Here&apos;s what the
        process looks like from your first call through project completion.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-4">
      {[
        {
          step: "01",
          title: "Request an Estimate",
          text: "Contact us and tell us about your project. We'll gather the information needed to get the process started.",
        },
        {
          step: "02",
          title: "Project Planning",
          text: "We'll discuss the scope of the work, answer your questions, and coordinate a convenient time for service.",
        },
        {
          step: "03",
          title: "Professional Tree Removal",
          text: "The tree is removed with attention to safety, efficiency, and protecting your surrounding property.",
        },
        {
          step: "04",
          title: "Cleanup & Final Walkthrough",
          text: "The work area is cleaned, debris is removed, and we make sure the project meets your expectations.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="relative rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="absolute right-6 top-6 text-6xl font-black text-green-100">
            {item.step}
          </div>

          <div className="relative">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
              {item.step}
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24">
  <div className="mx-auto max-w-5xl px-6">
    <div className="mb-16 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
        FREQUENTLY ASKED QUESTIONS
      </p>

      <h2 className="mt-5 text-5xl font-black">
        Tree Removal
        <span className="text-green-700"> FAQs</span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
        Here are answers to some of the questions homeowners ask most often
        before scheduling tree removal.
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          question: "Do I need to be home during the tree removal?",
          answer:
            "Not always. Depending on the project, arrangements can often be made without you being present. We'll communicate the plan with you ahead of time.",
        },
        {
          question: "How long does tree removal usually take?",
          answer:
            "The timeline depends on the size, location, and complexity of the tree. Many residential projects can be completed in a single day.",
        },
        {
          question: "Can you remove trees close to my house?",
          answer:
            "Yes. Trees near homes, garages, fences, and other structures require careful planning to help protect the surrounding property during removal.",
        },
        {
          question: "What happens to the wood and debris?",
          answer:
            "Cleanup is included with the project. Branches and debris are removed, leaving the work area clean and ready to use.",
        },
        {
          question: "Do you offer free estimates?",
          answer:
            "Yes. Contact us to discuss your project and request a free estimate.",
        },
      ].map((faq, index) => (
        <details
          key={index}
          className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
        >
          <summary className="cursor-pointer list-none text-xl font-bold text-gray-900 flex items-center justify-between">
            {faq.question}
            <span className="text-2xl text-green-700 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-6 leading-8 text-gray-600">
            {faq.answer}
          </p>
        </details>
      ))}
      <section className="bg-green-700 py-24 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
      READY TO GET STARTED?
    </p>

    <h2 className="mt-5 text-5xl font-black">
      Request Your Free Tree Removal Estimate
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-green-100">
      Whether you&apos;re dealing with storm damage, a hazardous tree, or planning a
      property improvement project, we&apos;re here to help make the process simple
      from start to finish.
    </p>

    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="/contact"
        className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-gray-100"
      >
        Request a Free Estimate
      </a>

      <a
        href="tel:3144747087"
        className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
      >
        Call Now
      </a>
    </div>
  </div>
</section>
    </div>
  </div>
</section>
    </main>
  );
}
