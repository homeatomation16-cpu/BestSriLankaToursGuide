import Image from "next/image";
import { Users, Star, CheckCircle } from "lucide-react";

export default function Drivers() {
  const drivers = [
    {
      name: "Mahesh",
      vehicle: "Private Car",
      capacity: "5",
      price: "$80",
      rating: 4.9,
      reviews: 128,
      tag: "Top Rated",
      languages: [
        { name: "English", flag: "🇬🇧" },
        { name: "German", flag: "🇩🇪" },
      ],
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80",
    },
    {
      name: "Saman",
      vehicle: "KDH Highroof Van",
      capacity: "6",
      price: "$80",
      rating: 4.8,
      reviews: 214,
      tag: "Most Booked",
      languages: [
        { name: "English", flag: "🇬🇧" },
        { name: "French", flag: "🇫🇷" },
        { name: "Hindi", flag: "🇮🇳" },
      ],
      image:
        "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1400&q=80",
    },
    {
      name: "Udesh",
      vehicle: "Luxury Bus",
      capacity: "12",
      price: "$105",
      rating: 4.7,
      reviews: 96,
      tag: "Premium",
      languages: [
        { name: "English", flag: "🇬🇧" },
        { name: "Spanish", flag: "🇪🇸" },
        { name: "Italian", flag: "🇮🇹" },
      ],
      image:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=1400&q=80",
    },
  ];

  return (
    <section className="py-28 lg:py-36 px-6 bg-linear-to-brom-white to-orange-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-orange-600 text-xl mb-4 tracking-wide">
            Elite Chauffeur Service
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Luxury Drivers & Guides
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hand-picked, verified, multilingual drivers delivering
            premium comfort, safety and five-star travel experiences
            across Sri Lanka.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {drivers.map((driver, i) => (
            <div
              key={i}
              className="
                group relative
                rounded-[30px]
                overflow-hidden
                bg-white/65
                backdrop-blur-2xl
                border border-white/40
                shadow-xl
                transition
                hover:-translate-y-3
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >

              {/* RIBBON */}
              <div className="
                absolute top-6 -left-11.25
                rotate-[-35deg]
                bg-linear-to-r from-orange-600 to-amber-500
                text-white text-xs
                px-14 py-1
                font-semibold
                shadow-lg
                z-20
              ">
                {driver.tag}
              </div>

              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={driver.image}
                  alt={driver.name}
                  fill
                  className="
                    object-cover
                    transition duration-1000
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/60 via-black/10 to-transparent
                " />

                {/* PRICE */}
                <div className="
                  absolute bottom-6 right-6
                  bg-white/85 backdrop-blur
                  px-5 py-2
                  rounded-full
                  font-semibold
                  text-black
                  shadow-md
                ">
                  {driver.price} / day
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-9">

                {/* NAME + VERIFIED */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {driver.name}
                  </h3>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <p className="text-gray-600 mb-4">
                  {driver.vehicle}
                </p>

                {/* RATING */}
                <div className="flex items-center gap-2 mb-5 text-gray-700">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-semibold">{driver.rating}</span>
                  <span className="text-gray-500">
                    ({driver.reviews} reviews)
                  </span>
                </div>

                {/* CAPACITY */}
                <div className="flex items-center gap-3 text-gray-700 mb-6">
                  <Users className="w-5 h-5 text-orange-500" />
                  {driver.capacity} Passengers
                </div>

                {/* LANGUAGES */}
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-3">
                    Languages Spoken
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {driver.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="
                          flex items-center gap-2
                          px-3 py-1.5
                          rounded-full
                          bg-black/5
                          border border-black/10
                          text-gray-700
                          text-sm
                        "
                      >
                        <span className="text-lg">{lang.flag}</span>
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="
                  w-full py-4
                  rounded-full
                  font-semibold
                  text-white
                  bg-linear-to-r
                  from-orange-600 to-amber-500
                  transition
                  hover:scale-[1.05]
                  hover:shadow-xl
                ">
                  Book Luxury Driver
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-28">
          <a
            href="#contact"
            className="
              inline-block
              px-16 py-6
              rounded-full
              text-lg font-semibold
              bg-black text-white
              transition
              hover:scale-110
              hover:shadow-2xl
            "
          >
            Request Private Chauffeur
          </a>
        </div>

      </div>
    </section>
  );
}
