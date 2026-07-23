import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    city: "Belleville, IL",
    review:
      "Metro East Tree Pros removed a huge oak tree from our backyard safely and cleaned everything up perfectly. I couldn't have asked for a better experience.",
  },
  {
    name: "James R.",
    city: "O'Fallon, IL",
    review:
      "Fast response, fair pricing, and excellent workmanship. The crew was professional from start to finish.",
  },
  {
    name: "Linda T.",
    city: "Fairview Heights, IL",
    review:
      "They trimmed several mature trees around our home and left the property cleaner than when they arrived. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-3 text-5xl font-black text-gray-900">
            Trusted by Homeowners Across the Metro East
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We take pride in providing reliable tree services with honest
            pricing and exceptional customer care.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-lg leading-8 text-gray-700">
                "{review.review}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.city}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}