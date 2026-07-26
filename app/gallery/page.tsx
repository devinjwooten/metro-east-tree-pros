import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Tree Service Project Gallery",
  description:
    "Explore recent Metro East Tree Pros work, including tree removal, trimming, stump grinding, storm cleanup, and property restoration projects.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gray-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Recent Work
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            See the care behind every completed project.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300">
            From careful removals to storm cleanup and property restoration,
            these projects reflect the attention we bring to homes and businesses
            throughout the Metro East.
          </p>
        </div>
      </section>

      <Gallery />
    </main>
  );
}
