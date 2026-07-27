import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation, locations } from "@/lib/locations";
import {
  createFaqJsonLd,
  createPageMetadata,
  createServiceJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

type LocationRouteProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: LocationRouteProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return {};
  }

  return createPageMetadata({
    title: `Tree Service in ${location.city}, Illinois`,
    description: location.metadataDescription,
    path: `/locations/${location.slug}`,
    image: location.heroImage,
    imageAlt: location.heroAlt,
  });
}

export default async function CityLocationPage({ params }: LocationRouteProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  const path = `/locations/${location.slug}`;
  const serviceDescription = `Professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service for ${location.city}, Illinois properties.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createServiceJsonLd({
              name: `Tree Service in ${location.city}, Illinois`,
              description: serviceDescription,
              path,
              serviceArea: location.city,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(location.faqs)) }}
      />
      <LocationPage location={location} />
    </>
  );
}
