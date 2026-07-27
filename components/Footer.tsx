import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinkClassName =
  "rounded-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Company */}

        <div>
          <h3 className="text-2xl font-black text-white">
            Metro East Tree Pros
          </h3>

          <p className="mt-4 leading-7">
            Professional tree removal, trimming, stump grinding,
            storm cleanup, and emergency tree services throughout
            the Metro East.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li><Link href="/" className={footerLinkClassName}>Home</Link></li>
            <li><Link href="/services" className={footerLinkClassName}>Services</Link></li>
            <li><Link href="/about" className={footerLinkClassName}>About</Link></li>
            <li><Link href="/gallery" className={footerLinkClassName}>Gallery</Link></li>
            <li><Link href="/contact#estimate" className={footerLinkClassName}>Free Estimate</Link></li>
          </ul>
        </div>

        {/* Services */}

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Services
          </h4>

          <ul className="space-y-3">
            <li><Link href="/services/tree-removal" className={footerLinkClassName}>Tree Removal</Link></li>
            <li><Link href="/services/tree-trimming" className={footerLinkClassName}>Tree Trimming</Link></li>
            <li><Link href="/services/stump-grinding" className={footerLinkClassName}>Stump Grinding</Link></li>
            <li><Link href="/services/storm-cleanup" className={footerLinkClassName}>Storm Cleanup</Link></li>
            <li><Link href="/services/emergency-tree-service" className={footerLinkClassName}>Emergency Tree Service</Link></li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Contact
          </h4>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone size={18} aria-hidden="true" />
              <a href="tel:3144747087" className={footerLinkClassName}>
                (314) 474-7087
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:info@metroeasttreepros.com" className={footerLinkClassName}>
                info@metroeasttreepros.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" aria-hidden="true" />
              <span>
                Serving Belleville, O&apos;Fallon,
                Collinsville, Edwardsville,
                Fairview Heights & surrounding areas.
              </span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Metro East Tree Pros. All rights reserved.
      </div>
    </footer>
  );
}
