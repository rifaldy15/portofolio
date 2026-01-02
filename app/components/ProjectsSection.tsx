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
  },
  {
    title: "IoT Hydroponics Monitoring System",
    description:
      "Platform IoT full-stack untuk otomatisasi dan pemantauan sistem hidroponik secara real-time. Dilengkapi dengan dasbor web interaktif untuk visualisasi data sensor dan kontrol aktuator jarak jauh",
    image: "/iot.jpg",
    tags: ["HTML", "TailwindCSS", "JavaScript", "Firebase"],
    link: "https://hydropro-9ca55.web.app",
  },
  {
    title: 'E-commerce "Anti Nyeker ID"',
    description:
      'Website E-commerce "Anti Nyeker ID" adalah platform toko online lengkap yang dirancang untuk menjual produk sepatu dan apparel. Proyek ini mencakup seluruh fungsionalitas e-commerce, mulai dari tampilan produk untuk pelanggan hingga dasbor admin untuk manajemen toko.',
    image: "/eco.jpg",
    tags: ["Html", "Javascript", "Php", "Chart.js", "Css", "MySql"],
    //link: 'http://localhost/anti-nyeker-store/',
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
