// import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";

const Rooms = () => {
  const axiosSecure = useAxiosSecure();
  // const [rooms, setRooms] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const {data, isLoading} = useQuery({
  //   queryKey:[],
  // })
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/rooms");
      return data;
    },
  });

  console.log(rooms);

  // is that old system for data fetching
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`http://localhost:8000/rooms`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRooms(data);
  //       setLoading(false);
  //     });
  // }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms?.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
