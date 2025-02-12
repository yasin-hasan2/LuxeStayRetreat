// import Image from "next/image"
// import Link from "next/link"
// import image from "../../../assets/images/Where To Stay In Tokyo_ Best Areas & Hotels _ Expatolife.jpg";

import { Link } from "react-router-dom";

export default function GetawaySection() {
  const options = [
    {
      title: "Rooms + Suites",
      image:
        "https://i.pinimg.com/736x/c9/dc/1d/c9dc1d2ef921338085bbd3dadf7ab43a.jpg",
      href: "/rooms",
      alt: "Luxury hotel room with comfortable bedding",
    },
    {
      title: "Eat + Drink",
      image:
        "https://i.pinimg.com/736x/b0/5a/0b/b05a0b929b6ca23c5e1218e3b750ce6e.jpg",
      video: "https://pin.it/1ac6Df8pp",
      href: "https://bangla-restaurant-83eb9.web.app/order/salad",
      alt: "Fine dining setup with wine glass",
    },
    {
      title: "Relax + Explore",
      image:
        "https://i.pinimg.com/736x/0d/5f/aa/0d5faa7ba4d6bcb85988ee0fe5308bd5.jpg",
      href: "/experiences",
      alt: "Beautiful outdoor scenery",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Your Getaway
          <br />
          is Calling
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {options?.map((option) => (
            <Link
              to={option?.href}
              key={option?.title}
              className="group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-square mb-4">
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={option?.alt}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <h3 className="text-xl font-light">
                {option?.title}{" "}
                <span className="group-hover:ml-2 transition-all">→</span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
