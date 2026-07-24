import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-5 top-12 h-48 w-2 rounded-full bg-green-700" />

          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/about/about-story.jpg"
              alt="Tree service professionals"
              width={900}
              height={1000}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-green-700 p-8 text-white shadow-2xl">
            <p className="text-5xl font-black">100%</p>

            <p className="mt-2 max-w-[180px] text-lg">
              Focused on customer satisfaction.
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
            OUR MISSION
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            Making Tree Service
            <span className="text-green-700"> Simple.</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            We believe homeowners deserve a tree service experience that's
            straightforward, responsive, and easy to understand. From your
            first phone call to the final cleanup, our goal is to keep the
            process organized and stress-free.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Whether you're dealing with a hazardous tree, routine trimming,
            storm damage, or stump removal, we're committed to providing clear
            communication and dependable coordination every step of the way.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-3xl font-black text-green-700">
                Clear
              </h3>

              <p className="mt-3 text-gray-600">
                Communication from estimate through project completion.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-3xl font-black text-green-700">
                Honest
              </h3>

              <p className="mt-3 text-gray-600">
                Straightforward recommendations without unnecessary pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}