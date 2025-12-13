"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Menggunakan ikon baru
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactSection() {
  const yourWhatsAppNumber = "6281342022585"; // GANTI DENGAN NOMOR WA ANDA (format 62xxxx)
  const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=Halo, saya tertarik untuk berkolaborasi.`;

  return (
    <section id="contact" className="py-32 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-12 rounded-3xl overflow-hidden bg-gray-900/50 border border-gray-700">
          {/* Grid background */}
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: "url('/grid.svg')",
              opacity: 0.1,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-3 text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 mb-6">
              Ready to collaborate or have a project in mind? Let&apos;s make
              something amazing together.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
              <HiOutlineLocationMarker className="w-5 h-5" />
              <span>Makassar, Sulawesi Selatan</span>
            </div>

            <div className="my-10 w-full h-64 rounded-xl overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.763435887258!2d119.40539131535497!3d-5.14197365345638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d31a951d331%3A0x33b433436c170415!2sPantai%20Losari!5e0!3m2!1sen!2sid!4v1661836382038!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // Filter agar lebih sesuai dengan tema gelap
                className="grayscale invert brightness-75"></iframe>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(109, 40, 217, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-medium text-white transition-all duration-300">
                <FaWhatsapp className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <motion.a
                href="#"
                target="_blank"
                whileHover={{ y: -4 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                whileHover={{ y: -4 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                whileHover={{ y: -4 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
