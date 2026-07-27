import type { Metadata } from "next";
import Contact from "@/components/Contact";
import ImagePageHero from "@/components/ImagePageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us for a Free Tree Service Estimate",
  description:
    "Call Metro East Tree Pros or email us to discuss tree removal, trimming, stump grinding, storm cleanup, or emergency tree service in the Metro East.",
  path: "/contact",
  image: "/images/contact/contact-hero.jpg",
  imageAlt: "Tree-service crew member speaking with a homeowner in a clean finished yard",
});

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <ImagePageHero
        eyebrow="Contact Metro East Tree Pros"
        title="Get clear guidance for your tree service needs."
        description="Whether you are planning ahead or dealing with an urgent tree concern, we are ready to discuss the next best step and provide a free estimate."
        image="/images/contact/contact-hero.jpg"
        imageAlt="Tree-service crew member speaking with a homeowner in a clean finished yard"
      />

      <Contact />
    </main>
  );
}
