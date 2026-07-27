import { CalendarDays, ClipboardList, Handshake, Sparkles, TreePine } from "lucide-react";

const process = [
  { step: "01", title: "Request an Estimate", text: "Tell us about the tree work you need and the property concerns you are seeing.", icon: ClipboardList },
  { step: "02", title: "Schedule Your Service", text: "We will coordinate a clear plan and a time that works for the project.", icon: CalendarDays },
  { step: "03", title: "Professional Tree Work", text: "Our crew completes the agreed work with care, focus, and professional equipment.", icon: TreePine },
  { step: "04", title: "Complete Cleanup", text: "We clear the agreed work area so the property is ready for what comes next.", icon: Sparkles },
  { step: "05", title: "Final Walkthrough", text: "We review the completed work and make sure you understand the finished scope.", icon: Handshake },
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {process.map((item) => {
            const Icon = item.icon;

            return (
            <article key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="text-5xl font-black text-green-400">{item.step}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-gray-300">{item.text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
