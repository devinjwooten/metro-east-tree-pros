import Image from "next/image";

const projects = [
  {
    image: "/images/projects/project1.jpg",
    title: "Tree Removal",
  },
  {
    image: "/images/projects/project2.jpg",
    title: "Tree Trimming",
  },
  {
    image: "/images/projects/project3.jpg",
    title: "Storm Cleanup",
  },
  {
    image: "/images/projects/project4.jpg",
    title: "Stump Grinding",
  },
  {
    image: "/images/projects/project5.jpg",
    title: "Emergency Tree Service",
  },
  {
    image: "/images/projects/project6.jpg",
    title: "Property Cleanup",
  },
];

function ProjectCard({
  image,
  title,
  large = false,
}: {
  image: string;
  title: string;
  large?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-xl ${
        large ? "h-[520px]" : "h-[250px]"
      }`}
    >
      <Image
        src={image}
        alt={`Representative visual of ${title.toLowerCase()} work`}
        fill
        sizes={large ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8 text-white">
        <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          Representative Visual
        </span>

        <h3 className="mt-4 text-3xl font-bold">{title}</h3>

        <p className="mt-2 text-gray-200">An illustrative view of the service situation.</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
            VISUAL EXAMPLES
          </p>

          <h2 className="mt-3 text-5xl font-black text-gray-900">
            A look at the work we handle.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            These representative visuals illustrate the types of tree-service
            situations Metro East Tree Pros is equipped to address.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <ProjectCard {...projects[0]} large />
          </div>

          <div className="space-y-6">
            <ProjectCard {...projects[1]} />
            <ProjectCard {...projects[2]} />
          </div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <ProjectCard {...projects[3]} />
          <ProjectCard {...projects[4]} />
          <ProjectCard {...projects[5]} />

        </div>

      </div>
    </section>
  );
}
