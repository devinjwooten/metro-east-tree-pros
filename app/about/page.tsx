import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import MetroEastDifference from "@/components/about/MetroEastDifference";
import HowItWorks from "@/components/about/HowItWorks";
import ServiceAreas from "@/components/about/ServiceArea";
import CallToAction from "@/components/about/CallToAction";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <Mission />
      <MetroEastDifference />
      <HowItWorks />
      <ServiceAreas/>
      <CallToAction />
    </main>
  );
}