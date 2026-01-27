import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      name: "Sigiriya",
      image:
        "https://cdn.pixabay.com/photo/2018/10/01/21/05/sigiriya-3716269_1280.jpg",
      desc: "Ancient Rock Fortress",
    },
    {
      name: "Kandy",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      desc: "Cultural Capital",
    },
    {
      name: "Ella",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
      desc: "Hill Country Beauty",
    },
  ];

  return (
    <section id="destinations" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Destinations</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow">
              <div className="relative h-48">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
