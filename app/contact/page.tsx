import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us for a Free Tree Service Estimate",
  description:
    "Call Metro East Tree Pros or email us to discuss tree removal, trimming, stump grinding, storm cleanup, or emergency tree service in the Metro East.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gray-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Contact Metro East Tree Pros
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Get clear guidance for your tree service needs.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300">
            Whether you are planning ahead or dealing with an urgent tree concern,
            we are ready to discuss the next best step and provide a free estimate.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}
