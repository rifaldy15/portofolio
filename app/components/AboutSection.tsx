"use client";

import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";

// Daftar biodata dalam Bahasa Indonesia
const biodata = [
  { label: "Tanggal Lahir", value: "15 Desember 2003" },
  { label: "Umur", value: "22" },
  { label: "Website", value: "https://portofolio-paldy.vercel.app/" },
  { label: "Gelar", value: "S.Kom" },
  { label: "Telepon", value: "+62 812 3456 7890" },
  { label: "Email", value: "muhpaldy14@gmail.com" },
  { label: "Kota", value: "Makassar, Indonesia" },
  { label: "Alamat", value: "Jalan Tinumbu Lr 148 No 24" },
  { label: "Agama", value: "Islam" },
  { label: "Status", value: "Bulum Nikah" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Kolom Gambar */}
          <div className="md:col-span-1">
            <Image
              src="/profile.jpg" // Ganti dengan gambar profil Anda
              alt="Muhammad Rifaldy Putra"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full max-w-xs mx-auto md:max-w-full shadow-lg"
            />
          </div>
          {/* Kolom Konten */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Frontend Developer & IoT Enthusiast
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya adalah seorang pengembang frontend yang bersemangat dengan
              keahlian dalam membangun aplikasi web yang modern dan responsif.
              Dengan pengalaman dalam React/Next.js dan ekosistemnya, saya
              berfokus untuk mengubah desain menjadi pengalaman digital yang
              mulus dan interaktif.
            </p>

            {/* Grid untuk Biodata */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              {biodata.map((item) => (
                <div key={item.label} className="flex items-start">
                  <HiChevronRight className="text-blue-400 w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-100">{item.label}:</strong>
                    <span className="ml-2 text-gray-300">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">
              Selain pengembangan web, saya memiliki minat yang mendalam pada
              Internet of Things (IoT), dengan fokus pada perancangan dan
              pembangunan proyek yang menghubungkan dunia fisik dengan digital.
              Saya juga tertarik pada pengelolaan data, khususnya dalam bidang
              data mining dan data science, untuk menghasilkan wawasan yang
              relevan dan mendukung pengambilan keputusan. Saya selalu berupaya
              mencari tantangan baru guna mengembangkan keterampilan dan
              bertumbuh di bidang teknologi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
