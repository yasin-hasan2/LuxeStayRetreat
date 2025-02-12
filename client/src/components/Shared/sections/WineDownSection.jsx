// import Image from "next/image"

import { Link } from "react-router-dom";
import wineDownImage from "../../../assets/images/resors/dark modern bedroom.jpg";

export default function WineDownSection() {
  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[400px] md:h-auto">
          <img
            src={wineDownImage}
            alt="Wine tasting experience"
            className="object-cover w-full h-[400px] md:h-full"
          />
        </div>
        <div className="px-8 py-16 md:p-16 lg:p-24">
          <div className="max-w-lg">
            <span className="text-sm uppercase tracking-wider mb-4 block">
              A Clarke House Inn Exclusive
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Wine Down,
              <br />
              Downtown
            </h2>
            <p className="text-gray-300 mb-8">
              Explore the best of Charleston while sipping local favorites on
              this all-inclusive guided tour. Clarke House Inn guests receive
              special pricing, plus a complimentary bottle of wine!
            </p>
            <div className="space-x-4">
              <button className=" btn btn-outline bg-transparent text-white border-white hover:bg-white hover:text-black">
                Explore The Offer
              </button>
              <Link to={`/rooms`}>
                <button className="btn btn-ghost text-white hover:text-white hover:bg-white/10">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
