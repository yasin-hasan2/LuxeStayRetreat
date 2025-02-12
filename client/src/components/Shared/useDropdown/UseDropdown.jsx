import { useState, useRef, useEffect } from "react";
import { LogOut, User, LogIn, LayoutDashboard } from "lucide-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AiOutlineLogin } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import HostModal from "../../modal/HostRequestModal";

const UserDropdown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const axiosSecure = useAxiosSecure();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  // const [navbar, setNavbar] = useState(false);
  console.log(isOpen.valueOf);

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /// This is the dropdown menu for the user profile
  const modalHandler = async () => {
    console.log("I want to be a host");

    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin approval");
      } else {
        toast.success("Please! wait for admin approval 👊");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      closeModal();
    }
  };

  /// This is the dropdown menu for the user profile
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
        className="flex items-center focus:outline-none"
      >
        <img
          referrerPolicy="no-referrer"
          src={user && user.photoURL ? user.photoURL : avatarImg}
          alt="profile"
          height="30"
          width="30"
          className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-colors"
        />
      </button>

      {isOpenDropDown && (
        <div className="absolute z-10 right-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {user ? (
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/dashboard/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <User
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Profile
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <LayoutDashboard
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Dashboard
              </Link>
              <div className="border-t border-gray-100"></div>
              <div
                className="cursor-pointer flex items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900"
                role="menuitem"
                onClick={logOut}
              >
                <LogOut
                  className="mr-3 h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
                Log out
              </div>
            </div>
          ) : (
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <LogIn
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Log In
              </Link>
              <div className="border-t border-gray-100"></div>
              <Link
                to="/signup"
                className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900"
                role="menuitem"
              >
                <AiOutlineLogin
                  className="mr-3 h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
                Sign Up
              </Link>
            </div>
          )}
          <div className="flex flex-row items-center gap-3">
            {/* Become A Host btn */}
            <div className="hidden md:block">
              {!user ? (
                <Link
                  to="/login"
                  className="flex items-center justify-center uppercase px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Please Become a User
                </Link>
              ) : (
                <button
                  disabled={!user}
                  onClick={() => setIsModalOpen(true)}
                  className={`disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition `}
                >
                  Host your home
                </button>
              )}
            </div>

            {/* Modal  */}
            <HostModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              modalHandler={modalHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
