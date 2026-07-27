import type { Faq } from "@/lib/seo";

export const homeFaqs: Faq[] = [
  {
    question: "How does a free estimate work?",
    answer:
      "Tell us about the work you need, your city, and any property details that may affect access or safety. We use that information to help you understand the next best step.",
  },
  {
    question: "Do I need to be home for tree service?",
    answer:
      "Not always. Depending on the project and access arrangements, service can often be coordinated without you being present. We will communicate the plan clearly first.",
  },
  {
    question: "What should I do after storm damage?",
    answer:
      "Keep clear of damaged trees, hanging limbs, and downed lines. If there is an immediate risk to people or power lines are involved, call 911 and the utility provider first.",
  },
  {
    question: "What does cleanup include?",
    answer:
      "Cleanup expectations depend on the agreed project scope. We discuss the work area and debris plan before work begins so you know what to expect afterward.",
  },
  {
    question: "Do you handle residential and commercial tree work?",
    answer:
      "Metro East Tree Pros discusses tree-service needs for homes, businesses, and managed properties throughout the Metro East. Include the property type in your estimate request.",
  },
  {
    question: "Can you work near power lines?",
    answer:
      "Power lines require special precautions. Stay clear of downed or damaged lines and contact the utility provider first. We can discuss what tree work can be safely completed once the site is secure.",
  },
];

export default function HomeFaqs() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            Common Questions
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Tree-service answers, made clear.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Straightforward information for the questions homeowners ask before
            requesting tree service.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:border-green-200 hover:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold">
                {faq.question}
                <span className="text-2xl text-green-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-3xl leading-8 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
