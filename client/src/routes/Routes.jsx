import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Statistics from "../pages/dashboard/common/Statistics";
import AddRoom from "../pages/dashboard/host/AddRoom";
import MyListings from "../pages/dashboard/host/MyListings";
import Profile from "../pages/dashboard/common/Profile";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import SecureAdminRoute from "./SecureAdminRoute";
import SecureHostRoute from "./SecureHostRoute";
import MyBookings from "../pages/dashboard/guest/MyBookings";
import ManageBookings from "../pages/dashboard/host/ManageBookings";
import About from "../pages/about/about";
import Contact from "../pages/contract/Contract";
import Blogs from "../pages/blogs/Blogs";
import RoomsPage from "../pages/roomsPage/RoomsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <RoomsPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            {" "}
            <Statistics />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "add-room",
        element: (
          <PrivateRoute>
            {" "}
            <SecureHostRoute>
              {" "}
              <AddRoom />{" "}
            </SecureHostRoute>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoute>
            {" "}
            <SecureHostRoute>
              {" "}
              <MyListings />{" "}
            </SecureHostRoute>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <SecureAdminRoute>
              <ManageUsers />
            </SecureAdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            {" "}
            <MyBookings />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <PrivateRoute>
            <SecureHostRoute>
              <ManageBookings />
            </SecureHostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
