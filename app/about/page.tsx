import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import MetroEastDifference from "@/components/about/MetroEastDifference";
import HowItWorks from "@/components/about/HowItWorks";
import ServiceAreas from "@/components/about/ServiceArea";
import CallToAction from "@/components/about/CallToAction";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Metro East Tree Service Team",
  description:
    "Learn how Metro East Tree Pros helps homeowners and businesses across the Metro East approach tree work with clear communication, safety-focused planning, and thorough cleanup.",
  path: "/about",
  image: "/images/about/about-hero.jpg",
  imageAlt: "Professional tree-service crew standing beside organized equipment",
});

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <Mission />
      <MetroEastDifference />
      <HowItWorks />
      <ServiceAreas />
      <CallToAction />
    </main>
  );
}
