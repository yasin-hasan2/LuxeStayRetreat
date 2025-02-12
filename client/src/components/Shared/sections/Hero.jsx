// import Button from "../Button/Button";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/Leonardo_Phoenix_09_The_image_depicts_a_grand_and_luxurious_en_1.jpg";
// import banner2 from "../../../assets/images/Where To Stay In Tokyo_ Best Areas & Hotels _ Expatolife.jpg";

export default function HeroSection() {
  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center">
      <img
        src={banner1}
        alt="Palm trees and historic architecture"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="text-sm uppercase tracking-wider mb-4 block">
            Welcome to the Clarke House Inn
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            A Historic Icon,
            <br />
            Reinvented
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pairing the comfort and coziness of an inn with the style and
            contemporary services of a boutique hotel, the Clarke House invites
            you to a relaxing, historic stay.
          </p>
          <div className="space-x-4">
            <Link to={`/about`}>
              <button className="btn btn-outline rounded-lg bg-transparent text-white border-white hover:bg-white hover:text-black">
                Explore Our History
              </button>
            </Link>
            <Link to={`/rooms`}>
              <button className=" btn btn-ghost rounded-lg text-white hover:text-white hover:bg-white/10">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
