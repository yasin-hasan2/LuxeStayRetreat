"use client";

import { motion } from "framer-motion";
// import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-light mb-8 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Luxe Stay Retreat
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-light mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1920, Luxe Stay Retreat has been a beacon of luxury and
              comfort for over a century. What started as a modest inn has
              evolved into a world-class retreat, blending historic charm with
              modern amenities.
            </p>
            <p className="text-gray-600">
              Our journey is one of constant innovation and unwavering
              commitment to guest satisfaction. From hosting dignitaries to
              being the backdrop for countless family memories, Luxe Stay
              Retreat has been an integral part of the community is fabric.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src={`https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="Luxe Stay Retreat historic building"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: "Luxurious Rooms",
              image:
                "https://images.pexels.com/photos/8210494/pexels-photo-8210494.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "50 uniquely designed rooms and suites",
            },
            {
              title: "Fine Dining",
              image:
                "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Award-winning restaurant with local cuisine",
            },
            {
              title: "Wellness Center",
              image:
                "https://images.pexels.com/photos/5793685/pexels-photo-5793685.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "State-of-the-art spa and fitness facilities",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className=" z-0 h-96">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="object-cover"
                />
              </div>
              <div className="py-6 w-full hover:bg-gray-50  backdrop-blur-md transition-colors text-center translate-x-1">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-lg p-8 mb-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-light mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <strong>Excellence in Service:</strong> We go above and beyond to
              exceed guest expectations.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <strong>Attention to Detail:</strong> Every aspect of your stay is
              meticulously curated.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <strong>Sustainable Luxury:</strong> We prioritize eco-friendly
              practices without compromising on luxury.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <strong>Community Engagement:</strong> We actively participate in
              and contribute to our local community.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeIn}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src={`https://images.pexels.com/photos/3926506/pexels-photo-3926506.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="Luxe Stay Retreat amenities"
              className="object-cover h-full w-full"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-light mb-4">Experience Luxury</h2>
            <p className="text-gray-600 mb-4">
              At Luxe Stay Retreat, luxury is not just about opulence; it is
              about creating unforgettable experiences. Our dedicated concierge
              team is always on hand to cater to your every need, whether it is
              arranging a private tour of local attractions or setting up a
              romantic dinner under the stars.
            </p>
            <p className="text-gray-600 mb-4">
              Indulge in our world-class amenities, including:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Rooftop infinity pool with panoramic city views</li>
              <li>
                Michelin-starred restaurant featuring farm-to-table cuisine
              </li>
              <li>
                Fully-equipped fitness center with personal training sessions
              </li>
              <li>Luxurious spa offering a range of rejuvenating treatments</li>
              <li>Exclusive lounge for our VIP guests</li>
            </ul>
            <p className="text-gray-600">
              Whether you are here for business or pleasure, Luxe Stay Retreat
              promises an experience that will exceed your expectations and
              leave you longing to return.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
