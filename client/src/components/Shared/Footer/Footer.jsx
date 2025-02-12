const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Luxe Stay Retreat
            </h3>
            <p className="text-gray-400">
              Experience luxury and comfort at its finest.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/rooms" className="text-gray-400 hover:text-white">
                  Rooms
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              123 Luxury Avenue
              <br />
              Paradise City, PC 12345
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Email: info@luxestayretreat.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Luxe Stay Retreat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
