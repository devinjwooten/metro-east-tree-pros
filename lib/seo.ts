import type { Metadata } from "next";

export const siteUrl = "https://metroeasttreepros.com";
export const siteName = "Metro East Tree Pros";

const serviceAreaNames = [
  "Belleville",
  "O'Fallon",
  "Edwardsville",
  "Collinsville",
  "Fairview Heights",
  "Swansea",
  "Shiloh",
  "Columbia",
  "Waterloo",
];

const serviceAreas = serviceAreaNames.map((name) => ({
  "@type": "City",
  name,
  address: {
    "@type": "PostalAddress",
    addressRegion: "IL",
    addressCountry: "US",
  },
}));

export type Faq = {
  question: string;
  answer: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: siteName,
  url: siteUrl,
  telephone: "+13144747087",
  email: "info@metroeasttreepros.com",
  description:
    "Professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service throughout the Metro East, Illinois.",
  areaServed: serviceAreas,
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
    },
  };
}

export function createServiceJsonLd({
  name,
  description,
  path,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, siteUrl).toString(),
    serviceType: name,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: serviceAreas,
  };
}

export function createFaqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
