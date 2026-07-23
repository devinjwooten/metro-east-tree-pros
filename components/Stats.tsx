export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Trees Removed",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "24/7",
      title: "Emergency Service",
    },
    {
      number: "100%",
      title: "Free Estimates",
    },
  ];

  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-4">

        {stats.map((item) => (
          <div key={item.title}>
            <div className="text-5xl font-black">
              {item.number}
            </div>

            <div className="mt-3 text-lg opacity-90">
              {item.title}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}