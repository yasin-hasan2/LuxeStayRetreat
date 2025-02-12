import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = ["Luxury Rooms", "Fine Dining", "Spa & Wellness"];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                Experience world-class service and amenities at our luxury
                retreat.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
