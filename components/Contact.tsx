import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-green-700 to-green-900 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-200">
            FREE ESTIMATE
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Ready to Remove
            <br />
            That Tree?
          </h2>

          <p className="mt-8 text-lg leading-8 text-green-100">
            Whether it's dangerous, damaged, or simply needs trimming,
            Metro East Tree Pros is ready to help.
            Contact us today for a free estimate.
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <Phone className="h-7 w-7 text-yellow-400" />
              <span className="text-xl">(314) 474-7087</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-7 w-7 text-yellow-400" />
              <span>info@metroeasttreepros.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="h-7 w-7 text-yellow-400" />
              <span>
                Belleville • O'Fallon • Collinsville •
                Edwardsville • Fairview Heights
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="h-7 w-7 text-yellow-400" />
              <span>24/7 Emergency Service Available</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="rounded-3xl bg-white p-10 shadow-2xl">

          <h3 className="mb-8 text-3xl font-bold text-gray-900">
            Request Your Free Estimate
          </h3>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border p-4 text-gray-900"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4 text-gray-900"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 text-gray-900"
            />

            <select
              className="w-full rounded-xl border p-4 text-gray-900"
            >
              <option>Tree Removal</option>
              <option>Tree Trimming</option>
              <option>Stump Grinding</option>
              <option>Emergency Service</option>
              <option>Other</option>
            </select>

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border p-4 text-gray-900"
            />

            <button
              className="w-full rounded-xl bg-green-700 py-5 text-lg font-bold transition hover:bg-green-800"
            >
              Request Free Estimate
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}