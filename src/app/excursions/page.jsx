"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExcursionsPage() {
  const [filter, setFilter] = useState("All");

  const tours = [
    {
      title: "Sigiriya & Dambulla Day Tour",
      location: "Kandy",
      duration: "10 Hours",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
      desc: "Climb Sigiriya Lion Rock & explore ancient cave temples.",
    },
    {
      title: "Ella Scenic Tour",
      location: "Ella",
      duration: "Full Day",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
      desc: "Nine Arch Bridge, tea plantations & waterfalls.",
    },
    {
      title: "Yala Safari Adventure",
      location: "Yala",
      duration: "Full Day",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615",
      desc: "Leopard safari in Sri Lanka’s top national park.",
    },
  ];

  const filtered =
    filter === "All"
      ? tours
      : tours.filter((t) => t.location === filter);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
          fill
          priority
          className="object-cover"
          alt="Sri Lanka"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Luxury Sri Lanka Excursions
          </h1>

          <p className="mt-6 text-lg max-w-2xl">
            Private day tours with friendly local drivers.
            Comfort, safety & unforgettable experiences.
          </p>

          <a
            href="https://wa.me/94769300334"
            className="mt-8 bg-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 bg-white z-30 shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Find Your Excursion
          </h2>

          <select
            className="border rounded-full px-5 py-2"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Kandy</option>
            <option>Ella</option>
            <option>Yala</option>
          </select>

        </div>
      </section>

      {/* TOURS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {filtered.map((tour, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative h-64">
                <Image
                  src={tour.image}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                  alt={tour.title}
                  unoptimized
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {tour.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {tour.desc}
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <span>⏱ {tour.duration}</span>
                  <span className="font-bold text-green-600">
                    ${tour.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/94769300334?text=Hi I want ${tour.title}`}
                  className="block mt-6 bg-black text-white text-center py-3 rounded-full"
                >
                  Book This Tour
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h4 className="font-bold text-lg">Licensed Guides</h4>
            <p className="text-gray-500">Professional service</p>
          </div>

          <div>
            <h4 className="font-bold text-lg">500+ Happy Guests</h4>
            <p className="text-gray-500">Top reviews</p>
          </div>

          <div>
            <h4 className="font-bold text-lg">No Hidden Costs</h4>
            <p className="text-gray-500">Transparent pricing</p>
          </div>

          <div>
            <h4 className="font-bold text-lg">24/7 Support</h4>
            <p className="text-gray-500">Always available</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Explore Sri Lanka?
        </h2>

        <a
          href="https://wa.me/94769300334"
          className="inline-block mt-8 bg-green-600 px-10 py-4 rounded-full text-lg"
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}
