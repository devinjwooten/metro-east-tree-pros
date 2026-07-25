import ServiceHero from "@/components/services/ServiceHero";

export default function TreeTrimmingPage() {
  const benefits = [
    {
      title: "Healthier Trees",
      text: "Removing dead or diseased limbs encourages stronger, healthier growth.",
    },
    {
      title: "Improved Appearance",
      text: "Proper pruning gives your landscape a clean, well-maintained look.",
    },
    {
      title: "Increased Safety",
      text: "Trimming weak or damaged branches helps reduce potential hazards.",
    },
    {
      title: "Better Clearance",
      text: "Maintain safe distances from roofs, driveways, sidewalks, and utility lines.",
    },
  ];

  const warningSigns = [
    {
      title: "Dead or Broken Branches",
      text: "Dead limbs can fall unexpectedly and should be removed to help improve safety.",
    },
    {
      title: "Branches Touching Your Roof",
      text: "Overhanging branches can scrape roofing materials and provide easy access for pests.",
    },
    {
      title: "Dense, Overgrown Canopy",
      text: "Thinning the canopy allows better airflow and sunlight, promoting healthier growth.",
    },
    {
      title: "Low-Hanging Limbs",
      text: "Branches over sidewalks, driveways, or patios can become an obstacle and safety concern.",
    },
  ];

  return (
    <main className="bg-white">
      <ServiceHero
        title="Professional Tree Trimming & Pruning"
        subtitle="Routine tree trimming helps improve appearance, encourage healthy growth, and reduce potential hazards caused by overgrown or damaged branches."
        image="/images/services/tree-trimming-hero.jpg"
      />

      {/* Intro */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            TREE TRIMMING
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Why Regular Tree Trimming Matters
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Proper tree trimming is about more than appearance. Removing dead,
            damaged, or overgrown branches can improve tree health, increase
            safety, and help maintain the beauty of your property throughout the
            year.
          </p>
        </div>
      </section>

      {/* Benefits */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              BENEFITS
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Benefits of
              <span className="text-green-700">
                {" "}
                Professional Tree Trimming
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Regular maintenance helps keep your trees healthy while protecting
              your home and improving curb appeal.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-2xl text-white">
                  🌿
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              WARNING SIGNS
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Signs Your Tree
              <span className="text-green-700"> Needs Trimming</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Trees often give clear signs when they need attention. Regular
              trimming helps maintain healthy growth, improves safety, and keeps
              your property looking its best.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {warningSigns.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-2xl text-white">
                  🌳
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-20 lg:grid-cols-2">
      {/* Left */}

      <div className="relative">
        <img
          src="/images/services/tree-trimming-benefits.jpg"
          alt="Professional tree trimming"
          className="rounded-[32px] shadow-2xl"
        />

        <div className="absolute -bottom-8 -right-8 rounded-3xl bg-green-700 p-8 text-white shadow-xl">
          <p className="text-4xl font-black">
            Year-Round
          </p>

          <p className="mt-2 max-w-[180px]">
            Proper maintenance helps trees stay healthier in every season.
          </p>
        </div>
      </div>

      {/* Right */}

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          TIMING MATTERS
        </p>

        <h2 className="mt-5 text-5xl font-black">
          When Is The Best Time
          <span className="text-green-700"> To Trim Trees?</span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          While emergency trimming can happen at any time, routine pruning is
          often scheduled to encourage healthy growth and reduce future
          maintenance issues. Every tree species has different needs, which is
          why proper timing is important.
        </p>

        <div className="mt-12 space-y-6">
          {[
            "Improve long-term tree health",
            "Reduce the chance of storm damage",
            "Encourage balanced growth",
            "Maintain a neat, attractive landscape",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white">
                ✓
              </div>

              <p className="text-lg text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}