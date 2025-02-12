// "use client"

import { useState } from "react";
// import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import image from "../../../assets/images/Where To Stay In Tokyo_ Best Areas & Hotels _ Expatolife.jpg";

export default function AmenitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const amenities = [
    {
      title: "By Sourced",
      description:
        "Proudly we source to the destination's finest local artisans.",
      image:
        "https://images.pexels.com/photos/16983083/pexels-photo-16983083/free-photo-of-market-stall-with-wicker-baskets.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "Tell Me More",
    },
    {
      title: "Late Checkout at 12PM",
      description:
        "Make the most of your time in Charleston with a no-hassle late checkout.",
      image:
        "https://images.pexels.com/photos/6607805/pexels-photo-6607805.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "More About The Inn",
    },
    {
      title: "Complimentary Bikes",
      description:
        "Explore Charleston's historic streets on wheels with our complimentary bikes.",
      image1:
        "https://images.pexels.com/photos/7478322/pexels-photo-7478322.jpeg?auto=compress&cs=tinysrgb&w=600",
      image:
        "https://images.pexels.com/photos/4542987/pexels-photo-4542987.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "Read About The Inn",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          Where Southern Charm
          <br />
          Meets Adventure
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {amenities.map((amenity) => (
                <div key={amenity.title} className="text-center">
                  <div className="relative aspect-square mb-6">
                    <img
                      src={amenity.image || "/placeholder.svg"}
                      alt={amenity.title}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{amenity.description}</p>
                  <button className="text-primary hover:underline">
                    {amenity.link}
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 space-x-2">
            {amenities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
