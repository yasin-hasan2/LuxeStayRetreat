import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
import Heading from "../../components/Shared/Heading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import AdditionalDetails from "./AdditionalDetails";
// import { all } from "axios";

// single room object (Fake Data)
// const room = {
//   location: 'Pattaya, Thailand',
//   category: 'Beach',
//   title: 'A15 thebase Sky Pool 1 Bedroom 1/1/Downtown Direct Beach',
//   to: '2024-05-21T18:00:00.000Z',
//   from: '2024-05-19T18:00:00.000Z',
//   price: '100',
//   guests: '2',
//   bathrooms: '1',
//   bedrooms: '1',
//   host: {
//     name: 'Shakil Ahmed Atik',
//     image:
//       'https://lh3.googleusercontent.com/a/ACg8ocJL_MZYn95fgATgHT_bWH8Em42gc8quAT57rhhHo4w9-lc-x8G-=s96-c',
//     email: 'shakilatik.ph@gmail.com',
//   },
//   description:
//     'Seamlessly evisculate frictionless e-markets through tactical interfaces. Holisticly visualize viral potentialities without mission-critical services.',
//   image: 'https://i.ibb.co/BsLQWH6/992ceffe-86d2-42b0-93b8-c24427806cca.webp',
// }
const RoomDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  // const axiosCommon = useAxiosCommon()

  // fetching room data by id
  const {
    data: room = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms/${id}`);
      return data;
    },
  });

  // console.log(allRooms);

  // loading spinner

  if (isLoading) return <LoadingSpinner />;

  console.log(id, room);
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className="max-w-screen-lg mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div>
              <Heading title={room?.title} subtitle={room.location} />
              <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full"
                  src={room?.image}
                  alt="header image"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            {/* Room Info */}
            <div className="col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div
                  className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
                >
                  <div>Hosted by {room?.host?.name}</div>

                  <img
                    className="rounded-full"
                    height="30"
                    width="30"
                    alt="Avatar"
                    referrerPolicy="no-referrer"
                    src={room?.host?.image}
                  />
                </div>
                <div className="pt-10">
                  {/* Header */}
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 pb-2">
                    Description of Room
                  </h2>
                  <p className="text-gray-600 mb-6">{room?.description}</p>

                  {/* Room Info */}
                  <div className="border rounded-lg p-6 bg-white shadow-md mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Room Size
                        </h4>
                        <p className="text-gray-600">600 Sq</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Room Bed
                        </h4>
                        <p className="text-gray-600">
                          {room?.bedrooms} Single Bed
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Occupancy
                        </h4>
                        <p className="text-gray-600">{room?.guests} Persons</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          View
                        </h4>
                        <p className="text-gray-600">{`beautiful`} View</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Phasellus a rhoncus erat.
                  </p>

                  {/* Room Facilities */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Room Facilities
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Air Conditioner",
                        "Swimming Pool",
                        "Gymnasium",
                        "Parking",
                        "Security",
                        "Playground",
                      ].map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-gray-600"
                        >
                          <span className="w-10 h-10 border rounded-full flex items-center justify-center text-yellow-500 border-yellow-500">
                            {/* Replace this with an icon if available */}
                            <span className="text-sm font-semibold">✓</span>
                          </span>
                          <p>{facility}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Share Details */}
                  <div className="border-t pt-6 flex space-x-4 mb-8">
                    {["Facebook", "Twitter", "Pinterest", "Email"].map(
                      (platform, index) => (
                        <button
                          key={index}
                          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
                        >
                          {/* Add icons here */}
                          {platform[0]}
                        </button>
                      )
                    )}
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Send Us Your Question
                    </h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          className="border p-3 rounded w-full"
                        />
                        <input
                          type="email"
                          placeholder="Enter Email"
                          className="border p-3 rounded w-full"
                        />
                        <input
                          type="text"
                          placeholder="Enter Phone"
                          className="border p-3 rounded w-full"
                        />
                      </div>
                      <textarea
                        placeholder="Enter Message"
                        rows="4"
                        className="border p-3 rounded w-full"
                      />
                      <button
                        type="submit"
                        className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"
                      >
                        Submit Content
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 order-first md:order-last mb-10">
              {/* RoomReservation */}
              <RoomReservation refetch={refetch} room={room} />
              <AdditionalDetails room={room} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
