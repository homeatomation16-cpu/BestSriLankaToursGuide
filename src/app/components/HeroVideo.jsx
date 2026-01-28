"use client";
import { useState, useEffect } from "react";

export default function HeroVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(true);

  const videos = [
    {
      src: "https://pixabay.com/videos/download/video-286459_tiny.mp4",
      title: "Mirissa Beach",
      subtitle: "Golden sunsets & whale watching paradise",
    },
    {
      src: "https://pixabay.com/videos/download/video-191283_tiny.mp4",
      title: "Sigiriya Rock Fortress",
      subtitle: "Ancient wonder & UNESCO World Heritage Site",
    },
    {
      src: "https://pixabay.com/videos/download/video-191284_tiny.mp4",
      title: "Ella Scenic Train Ride",
      subtitle: "One of the most beautiful train journeys in the world",
    },
    {
      src: "https://pixabay.com/videos/download/video-242272_tiny.mp4",
      title: "Yala National Park",
      subtitle: "Wildlife safaris & majestic elephants",
    },
    {
      src: "https://pixabay.com/videos/download/video-132140_tiny.mp4",
      title: "Hill Country",
      subtitle: "Tea plantations & misty mountain views",
    },
  ];

  const handleVideoEnd = () => {
    setFade(false); // fade out
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setFade(true); // fade in
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* VIDEO */}
      <video
        key={currentVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videos[currentVideo].src} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="inline-block lg:hidden z-0 absolute inset-0 bg-black/55" />
      <p className="font-sinhala text-lg">ශ්‍රී ලංකාවේ අමතක නොවන සංචාර</p>

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-7xl mx-auto text-white transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-600/20 text-orange-300 font-semibold text-sm">
          🇱🇰 Explore Sri Lanka
        </span>

        <h1 className="text-2xl lg:text-6xl font-extrabold leading-tight mb-4">
          {videos[currentVideo].title}
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-8">
          {videos[currentVideo].subtitle}
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-600 text-[14px] lg:text-2xl w-full px-10 lg:p-4 rounded-lg lg:rounded-xl font-semibold hover:bg-orange-700 transition">
            Book Now
          </button>
          <button className="border-2 border-orange-400 px-8 py-4 rounded-xl hover:bg-orange-600 transition">
            Tailor Made Tours
          </button>
        </div>

        {/* SLIDER INDICATOR */}
        <div className="mt-8 flex gap-2">
          {videos.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition ${
                i === currentVideo ? "bg-orange-500" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
