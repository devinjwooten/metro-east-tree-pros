export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-5 text-lg font-semibold uppercase tracking-[0.3em] text-green-300">
          Licensed • Insured • Free Estimates
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Professional Tree Removal
          <br />
          & Tree Care
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-200">
          Serving the Metro East with professional tree removal, trimming,
          stump grinding, and emergency storm cleanup.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:3144747087"
            className="rounded-xl bg-yellow-500 px-8 py-4 text-xl font-bold text-black transition hover:bg-yellow-400"
          >
            📞 Call (314) 474-7087
          </a>

          <a
            href="#contact"
            className="rounded-xl border-2 border-white px-8 py-4 text-xl font-bold transition hover:bg-white hover:text-black"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}