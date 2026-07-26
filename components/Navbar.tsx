"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const serviceLinks = [
  { href: "/services/tree-removal", label: "Tree Removal" },
  { href: "/services/tree-trimming", label: "Tree Trimming" },
  { href: "/services/stump-grinding", label: "Stump Grinding" },
  { href: "/services/emergency-tree-service", label: "Emergency Tree Service" },
  { href: "/services/storm-cleanup", label: "Storm Cleanup" },
];

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const navLinkClassName =
  "rounded-lg px-3 py-2 transition hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <Image
              src="/images/logo.png"
              alt="Metro East Tree Pros"
              width={64}
              height={64}
              priority
            />
            <div className="hidden min-w-0 sm:block">
              <span className="block truncate text-xl font-bold text-green-800">
                Metro East Tree Pros
              </span>
              <p className="text-sm text-gray-600">
                Professional Tree Care You Can Trust
              </p>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 font-semibold lg:flex">
            <Link href="/" className={navLinkClassName}>
              Home
            </Link>
            <details className="group relative">
              <summary className={`${navLinkClassName} flex cursor-pointer list-none items-center gap-1`}>
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-slate-900/10">
                <Link
                  href="/services"
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700"
                >
                  Explore all services
                </Link>
                <ul className="mt-2 border-t border-gray-100 pt-2 text-sm font-medium text-gray-700">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClassName}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:3144747087"
              className="inline-flex items-center justify-center rounded-xl border border-green-200 px-4 py-3 font-bold text-green-800 transition hover:border-green-700 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <Link
              href="/contact#estimate"
              className="inline-flex items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Free Estimate
            </Link>
          </div>

          <div className="relative lg:hidden">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              className="flex h-11 items-center justify-center rounded-xl border border-gray-200 px-4 font-bold text-gray-900 transition hover:border-green-300 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              {isMobileMenuOpen ? (
                <X className="mr-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="mr-2 h-5 w-5" aria-hidden="true" />
              )}
              Menu
            </button>
            {isMobileMenuOpen ? (
              <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-0 top-full mt-3 w-[min(24rem,calc(100vw-3rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl shadow-slate-900/15"
            >
              <Link href="/" className={`${navLinkClassName} block`}>
                Home
              </Link>
              <div className="mt-2 border-y border-gray-100 py-3">
                <p className="px-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  Services
                </p>
                <Link href="/services" className={`${navLinkClassName} mt-1 block font-bold text-green-800`}>
                  Explore all services
                </Link>
                <ul className="mt-1">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={`${navLinkClassName} block text-sm`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                {primaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`${navLinkClassName} block`}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4 sm:grid-cols-2">
                <a
                  href="tel:3144747087"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-green-200 px-4 py-3 font-bold text-green-800 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  Call Now
                </a>
                <Link
                  href="/contact#estimate"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  Free Estimate
                </Link>
              </div>
            </nav>
            ) : null}
          </div>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-gray-200 bg-white p-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] lg:hidden">
        <a
          href="tel:3144747087"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-900 px-4 py-3 font-bold text-white transition hover:bg-green-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact#estimate"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          Free Estimate
        </Link>
      </div>
    </>
  );
}
