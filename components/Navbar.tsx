import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Metro East Tree Pros"
            width={80}
            height={80}
            priority
          />

          <div className="hidden sm:block">
            <span className="text-xl font-bold text-green-800">
              Metro East Tree Pros
            </span>

            <p className="text-sm text-gray-600">
              Professional Tree Care You Can Trust
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          <a href="#services" className="hover:text-green-700">
            Services
          </a>

          <a href="#gallery" className="hover:text-green-700">
            Gallery
          </a>

          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>
        </nav>

        <a
          href="tel:3144747087"
          className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
