const process = [
  { step: "01", title: "Request a Free Estimate", text: "Tell us about the tree work you need and your property goals." },
  { step: "02", title: "Schedule Service", text: "We will coordinate a clear plan and a time that works for you." },
  { step: "03", title: "Professional Tree Work", text: "Our crew completes the work with care, focus, and the right equipment." },
  { step: "04", title: "Final Cleanup", text: "We leave your space neat, clear, and ready for what comes next." },
];

export default function Stats() {
  return (
    <section className="bg-gray-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Our Process
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            A simple process for work that deserves careful planning.
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
  );
}
