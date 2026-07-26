import {
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const cities = [
  "Belleville",
  "O'Fallon",
  "Fairview Heights",
  "Collinsville",
  "Edwardsville",
  "Swansea",
  "Shiloh",
  "Glen Carbon",
  "Waterloo",
  "Columbia",
  "Granite City",
  "Maryville",
];

export default function ServiceArea() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              SERVICE AREA
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900">
              Proudly Serving the
              <span className="text-green-700">
                {" "}Metro East
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Whether you need tree removal, trimming,
              stump grinding, storm cleanup, or emergency
              tree service, we&apos;re proud to help homeowners
              throughout the Metro East with dependable,
              professional service.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    className="text-green-700"
                    size={20}
                  />

                  <span>{city}</span>
                </div>
              ))}

            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Request a Free Estimate

              <ArrowRight className="ml-3" size={18} />
            </Link>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-[40px] bg-gradient-to-br from-green-700 to-green-900 p-12 shadow-2xl">

              <div className="flex justify-center">

                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <MapPin
                    size={70}
                    className="text-white"
                  />
                </div>

              </div>

              <h3 className="mt-10 text-center text-3xl font-black text-white">
                Local. Reliable. Responsive.
              </h3>

              <p className="mt-6 text-center text-lg leading-8 text-green-100">
                We proudly serve homeowners throughout the
                Metro East with dependable tree services and
                responsive communication from start to finish.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
