import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import ImagePageHero from "@/components/ImagePageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tree Service Gallery",
  description:
    "View representative visuals of tree removal, trimming, stump grinding, storm cleanup, and property restoration services Metro East Tree Pros provides.",
  path: "/gallery",
  image: "/images/gallery/gallery-hero.jpg",
  imageAlt: "Clean finished property with healthy trees after professional tree service",
});

export default function GalleryPage() {
  return (
    <main className="bg-white text-gray-900">
      <ImagePageHero
        eyebrow="Visual Examples"
        title="See the types of tree-service work we handle."
        description="From careful removals to storm cleanup and property restoration, these representative visuals illustrate the service situations we help homeowners and businesses address throughout the Metro East."
        image="/images/gallery/gallery-hero.jpg"
        imageAlt="Clean finished property with healthy trees after professional tree service"
      />

      <Gallery />
    </main>
  );
}
