// import React from "react"
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Shared/Button/Button";

export default function BlogModal({ blog, isOpen, onClose }) {
  if (!blog) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
              <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {blog.date} | By {blog.author}
              </p>
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <Button
                onClick={onClose}
                className="mt-4 bg-primary  px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-200"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

BlogModal.propTypes = {
  blog: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
