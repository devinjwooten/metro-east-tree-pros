import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { localBusinessJsonLd, serializeJsonLd, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Metro East Tree Pros | Tree Service in Metro East, Illinois",
    template: "%s | Metro East Tree Pros",
  },
  description:
    "Professional tree removal, tree trimming, stump grinding, storm cleanup, and emergency tree service throughout the Metro East.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white pb-24 text-gray-900 antialiased lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessJsonLd) }}
        />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
