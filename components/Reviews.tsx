import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", city: "Belleville, IL", review: "The crew made a difficult backyard tree removal feel organized from start to finish. The cleanup was especially impressive." },
  { name: "James R.", city: "O'Fallon, IL", review: "Clear estimate, professional crew, and a much safer property by the end of the day. Exactly the kind of service we hoped for." },
  { name: "Linda T.", city: "Fairview Heights, IL", review: "They shaped several mature trees around our home and left the yard looking better than before they arrived." },
];

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            Customer Feedback
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            The kind of experience we aim to deliver.
          </h2>
          <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
            Sample testimonials shown for layout purposes. Replace with verified customer reviews before publishing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60">
              <div className="flex gap-1" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-7 text-lg leading-8 text-gray-700">{review.review}</p>
              <div className="mt-8 border-t border-gray-100 pt-5">
                <h3 className="font-bold">{review.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{review.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
