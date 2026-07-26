import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Metro East Tree Pros",
    template: "%s | Metro East Tree Pros",
  },
  description:
    "Professional tree removal, tree trimming, stump grinding, storm cleanup, and emergency tree service throughout the Metro East.",
  keywords: [
    "Tree Removal",
    "Tree Trimming",
    "Stump Grinding",
    "Storm Cleanup",
    "Emergency Tree Service",
    "Metro East",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white pb-20 text-gray-900 antialiased lg:pb-0">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
