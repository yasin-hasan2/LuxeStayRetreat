import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import UserDropdown from "../useDropdown/UseDropdown";
import { Link, useLocation } from "react-router-dom";
import "../../../style/custom.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Resorts" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group relative inline-block">
            <h1 className="text-2xl  text-black font-bold flex  drop-shadow-lg hover:cursor-pointer transform transition duration-300 ease-in-out group-hover:scale-110">
              <img
                className="w-10 mix-blend-multiply drop-shadow-lg rounded-l-xl mr-2"
                src="../../../../public/Laxey.png"
                alt=""
              />
              Luxe<span className="text-[#54babe] ">Stay</span>Retreat
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link?.href}
                  to={link?.href}
                  className={`relative nav-link px-3 py-2 text-gray-700 hover:text-primary transition-colors ${
                    pathname === link?.href ? "text-primary" : ""
                  }`}
                >
                  <span className="font-semibold text-base">{link?.label}</span>
                  {pathname === link?.href && (
                    <span className="absolute bottom-0  left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center space-x-4">
              <UserDropdown />
            </div>
          </div>

          <div className="flex md:hidden">
            <div className="  pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <UserDropdown />
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <div className="flex items-center">
                  <X className="h-6 w-6" />
                </div>
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link?.href}
              to={link?.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                pathname === link?.href
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 hover:text-primary hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
