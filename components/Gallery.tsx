import Image from "next/image";

const projects = [
  {
    image: "/images/projects/project1.jpg",
    title: "Tree Removal",
    location: "Belleville, IL",
  },
  {
    image: "/images/projects/project2.jpg",
    title: "Tree Trimming",
    location: "O'Fallon, IL",
  },
  {
    image: "/images/projects/project3.jpg",
    title: "Storm Cleanup",
    location: "Fairview Heights, IL",
  },
  {
    image: "/images/projects/project4.jpg",
    title: "Stump Grinding",
    location: "Collinsville, IL",
  },
  {
    image: "/images/projects/project5.jpg",
    title: "Emergency Removal",
    location: "Edwardsville, IL",
  },
  {
    image: "/images/projects/project6.jpg",
    title: "Complete Cleanup",
    location: "Metro East",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
            OUR RECENT PROJECTS
          </p>

          <h2 className="mt-3 text-5xl font-black text-gray-900">
            See Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every project is completed with safety, professionalism,
            and attention to detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p>{project.location}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}