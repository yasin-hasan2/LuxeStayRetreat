// import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <Link to={`/room/${room?._id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={room?.image || "/placeholder.svg"}
            alt={room?.location}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{room?.location}</h3>
          <p className="text-gray-600 text-sm mb-2">{room?.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {room?.amenities.slice(0, 2).map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {room?.amenities.length > 2 && (
              <span className="text-xs text-gray-500">
                +{room.amenities.length - 2} more
              </span>
            )}
          </div>
          <div className="flex items-baseline mb-3">
            <span className="text-lg font-bold">${room?.price}/</span>
            <span className="text-gray-500 ml-1">night</span>
          </div>
          <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;

RoomCard.propTypes = {
  room: PropTypes.object,
};
