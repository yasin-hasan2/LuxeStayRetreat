// import React from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";

const AdditionalDetails = () => {
  const axiosCommon = useAxiosCommon();

  // fetching all room data for comparison
  const { data: allRooms = [] } = useQuery({
    queryKey: "allRooms",
    queryFn: async () => {
      const { data } = await axiosCommon.get("/rooms");
      return data;
    },
  });

  return (
    <div className="p-8 bg-gray-50 mt-5">
      {/* Sidebar */}
      <div className="bg-white p-6  rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Compare Room
        </h3>

        <div className="space-y-4">
          {allRooms.slice(0, 3)?.map((allRoom) => (
            <div key={allRoom?._id}>
              <Link to={`/room/${allRoom?._id}`} className="cursor-pointer">
                <div className="flex items-center  gap-5">
                  <img
                    src={allRoom?.image}
                    alt={allRoom?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium text-sm">
                      {allRoom?.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600 text-sm">
                        ${allRoom?.price}/night
                      </p>
                      <span className="text-gray-600 text-sm font-light">
                        {" "}
                        {allRoom?.location}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
