"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "#tours" },
    { label: "Destinations", href: "#destinations" },
    { label: "Excursions", href: "#excursions" },
    { label: "Offers", href: "#offers" },
    { label: "Tailor Made Tours", href: "#tailor-made" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md brightness-95"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Sri Lanka Tours Driver"
            width={50}
            height={50}
            className={`w-16 h-16 transition ${
              scrolled
                ? "brightness-100"
                : "brightness-125 drop-shadow-lg"
            }`}
          />
          <div className="hidden sm:block">
            <div
              className={`text-lg font-bold transition ${
                scrolled ? "text-orange-600" : "text-white"
              }`}
            >
              Sri Lanka Tours Driver
            </div>
            <div
              className={`text-xs transition ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              Discover Amazing Places
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium transition ${
                scrolled
                  ? "text-gray-300 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+94769300334"
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold shadow-lg"
          >
            (+94) 769 300 334
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 font-medium hover:text-orange-600 transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:+94769300334"
              className="block bg-orange-600 text-white px-6 py-3 rounded-lg text-center font-semibold"
            >
              (+94) 769 300 334
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
