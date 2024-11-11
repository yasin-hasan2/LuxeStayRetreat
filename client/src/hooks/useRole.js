// import React from 'react';
// import { useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure.jsx";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  //   const [role, setRole] = useState();

  const { data: role = "Please Wait a second", isLoading } = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data.role;
    },
  });

  // Fetch user info using logged in user email

  return [role, isLoading];
};

export default useRole;
