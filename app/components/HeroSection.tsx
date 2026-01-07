// app/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

const heroSkills = [
  "HTML",
  "PHP",
  "Laravel",
  "CodeIgniter 3",
  "React",
  "Next.js",
  "Javascript",
  "Tailwind CSS",
  "C++S",
  "MySql",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: "url('/grid.svg')",
          opacity: 0.1,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1
            className="
              text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-purple-500
              animate-text-glowing /* <-- TAMBAHKAN CLASS INI */
            ">
            Muhammad Rifaldy Putra
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer & IoT Project
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {heroSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="
                  px-4 py-2 rounded-full border border-blue-600 
                  bg-blue-900/20 text-blue-200 text-sm font-medium
                  animate-glowing-border
                ">
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
