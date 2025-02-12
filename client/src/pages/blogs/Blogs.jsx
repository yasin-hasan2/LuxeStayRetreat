import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Top 10 Luxury Travel Destinations",
    excerpt:
      "Discover the most exclusive destinations for your next luxury vacation.",
    content:
      "Luxury travel has evolved beyond mere opulence to encompass authentic experiences that create lasting memories. From private islands in the Maldives to historic châteaux in the French countryside, today's luxury travelers seek destinations that offer both exclusivity and cultural immersion.",
    date: "Jan 15, 2024",
    image:
      "https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Jane Doe",
    category: "Travel",
  },
  {
    id: 2,
    title: "The Art of Fine Dining",
    excerpt: "Explore the culinary excellence at Luxe Stay Retreat.",
    content:
      "At Luxe Stay Retreat, we believe that dining is not just about sustenance – it's an art form. Our executive chef combines local ingredients with international techniques to create dishes that tell a story and engage all your senses.",
    date: "Jan 10, 2024",
    image:
      "https://images.pexels.com/photos/18032210/pexels-photo-18032210/free-photo-of-food-on-trays-and-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "John Smith",
    category: "Culinary",
  },
  {
    id: 3,
    title: "Wellness & Spa Experiences",
    excerpt: "Rejuvenate your mind and body with our premium spa treatments.",
    content:
      "Our spa sanctuary offers a haven of tranquility where ancient healing traditions meet modern luxury. Each treatment is personalized to provide the ultimate relaxation experience, using premium products and expert techniques.",
    date: "Jan 5, 2024",
    image:
      "https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Emily Johnson",
    category: "Wellness",
  },
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 gradient-text text-center">
          Latest from Our Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button
                  onClick={() => openModal(blog)}
                  className="text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  Read more →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedBlog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {selectedBlog.date} | By {selectedBlog.author}
                </p>
                <img
                  src={selectedBlog.image || "/placeholder.svg"}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
