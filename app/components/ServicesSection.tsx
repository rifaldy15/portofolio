"use client";

import {
  HiCode,
  HiChip,
  HiDatabase,
  HiChartBar,
  HiBeaker,
} from "react-icons/hi";
import { motion } from "framer-motion";

const services = [
  {
    icon: HiCode,
    title: "Website Development",
    description:
      "Creating responsive and modern websites tailored to your needs.",
  },
  {
    icon: HiChip,
    title: "IoT Projects",
    description:
      "Developing smart devices and systems for the Internet of Things.",
  },
  {
    icon: HiChartBar,
    title: "Data Analysis",
    description:
      "Analyzing data to extract meaningful insights and drive decisions.",
  },
  {
    icon: HiDatabase,
    title: "Data Mining",
    description:
      "Discovering patterns in large data sets using advanced techniques.",
  },
  {
    icon: HiBeaker,
    title: "Data Science",
    description: "Applying scientific methods to solve complex data problems.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white">
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-8 rounded-xl text-center border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
