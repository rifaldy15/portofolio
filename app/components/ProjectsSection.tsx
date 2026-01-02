"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistem Informasi dan Pendaftaran Siswa TK",
    description:
      "Website Sistem Informasi dan Pendaftaran Siswa TK Ceria adalah sebuah platform digital yang dirancang untuk memudahkan calon orang tua dalam mendapatkan informasi dan mendaftarkan anak mereka.",
    image: "/tk.jpg",
    tags: ["Html", "Javascript", "Php", "Chart.js", "Css"],
    link: "https://tkceria13.aicenter.my.id/",
    github: "", // Add actual link if available or leave empty to default to repo
  },
  {
    title: "IoT Hydroponics Monitoring System",
    description:
      "Platform IoT full-stack untuk otomatisasi dan pemantauan sistem hidroponik secara real-time. Dilengkapi dengan dasbor web interaktif untuk visualisasi data sensor dan kontrol aktuator jarak jauh",
    image: "/iot.jpg",
    tags: ["HTML", "TailwindCSS", "JavaScript", "Firebase"],
    link: "https://hydropro-9ca55.web.app",
    github: "",
  },
  {
    title: 'E-commerce "Anti Nyeker ID"',
    description:
      'Website E-commerce "Anti Nyeker ID" adalah platform toko online lengkap yang dirancang untuk menjual produk sepatu dan apparel. Proyek ini mencakup seluruh fungsionalitas e-commerce, mulai dari tampilan produk untuk pelanggan hingga dasbor admin untuk manajemen toko.',
    image: "/eco.jpg",
    tags: ["Html", "Javascript", "Php", "Chart.js", "Css", "MySql"],
    //link: 'http://localhost/anti-nyeker-store/',
    github: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="ProjectsSection" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol ditambahkan di sini */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Live Demo
                  </a>
                  <a
                    href={
                      project.github ||
                      "https://github.com/rifaldy15/portofolio"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
