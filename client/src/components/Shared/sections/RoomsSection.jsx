// import Image from "next/image"
import { motion } from "framer-motion";
// import image from "../../../assets/images/Where To Stay In Tokyo_ Best Areas & Hotels _ Expatolife.jpg";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function RoomsSection() {
  const axiosCommon = useAxiosCommon();
  // const rooms = [1, 2, 3];

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          data-aos="fade-up"
        >
          Our Luxurious Rooms
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.slice(0, 3).map((room) => (
            <motion.div
              key={room}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={room?.image}
                alt={`Luxury Room ${room}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room?.location}</h3>
                <span className="font-light text-black text-sm">
                  {room.title}
                </span>
                <p className="text-gray-600">
                  {room?.description.slice(0, 100)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="content-center text-center">
        <Link to={`/rooms`} className="">
          <button className="shadow-xl  btn btn-outline border-cyan-500 hover:text-cyan-500 my-5 rounded-lg">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
