'use client';

// Anda bisa menyimpan data ini di file terpisah jika mau
const resumeData = {
  summary: {
    name: 'MUHAMMAD RIFALDY PUTRA',
    description: 'Mahasiswa Teknik Informatika yang bersemangat, dengan fokus pada pengembangan Frontend dan minat kuat pada proyek Internet of Things. Berpengalaman dalam menciptakan antarmuka web yang responsif dan intuitif.',
    address: 'Makassar, Sulawesi Selatan',
    phone: '+62 813 4202 2585',
    email: 'muhpaldy14@gmail.com',
  },
  education: [
    {
      degree: 'SD NEGERI BERTINGKAT LAYANG',
      period: '2009 - 2015',
      institution: '-',
      description: '',
    },
    {
      degree: 'SMP NEGERI 04 MAKASSAR',
      period: '2015 - 2018',
      institution: '-',
      description: '',
    },
    {
      degree: 'SMA NEGERI',
      period: '2020 - 2024',
      institution: '-',
      description: '',
    },
    {
      degree: 'SARJANA TEKNIK INFORMATIKA',
      period: '2020 - 2024',
      institution: 'Universitas Teknologi Akba Makassar, Makassar',
      description: 'Fokus pada rekayasa perangkat lunak, pengembangan web, Internet Of Things, data mining, dan kecerdasan buatan. Aktif dalam kegiatan himpunan dan proyek-proyek akademis.',
    },
  ],
  experience: [
    {
      role: 'FREELANCE WEB DEVELOPER',
      period: '2024 - Present',
      company: 'Proyek Klien',
      tasks: [
        'Merancang dan mengembangkan website E-commerce Dashboard.',
        'Mengimplementasikan desain responsif untuk memastikan tampilan optimal di semua perangkat.',
        'Berkolaborasi dengan klien untuk memahami kebutuhan dan memberikan solusi teknis yang efektif.',
      ],
    },
    {
      role: 'PROJECT ASSISTANT - IOT',
      period: '2023',
      company: 'Lab Riset Universitas',
      tasks: [
        'Membantu dalam pengembangan sistem monitoring hidroponik berbasis IoT menggunakan ESP32 dan Firebase.',
        'Membuat dashboard web untuk visualisasi data sensor secara real-time.',
        'Melakukan pengujian dan debugging pada perangkat keras dan perangkat lunak.',
      ],
    },
  ],
};

export default function ResumeSection() {
  return (
    <section id="resume" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/50 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center">Resume</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Kolom Kiri */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Summary</h3>
            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-900 border-2 border-blue-500 rounded-full"></div>
              <h4 className="text-xl font-bold text-white">{resumeData.summary.name}</h4>
              <p className="italic my-3">{resumeData.summary.description}</p>
              <ul className="list-none space-y-1">
                <li>{resumeData.summary.address}</li>
                <li>{resumeData.summary.phone}</li>
                <li>{resumeData.summary.email}</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-10 mb-6 text-white">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-700 pb-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-900 border-2 border-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="bg-gray-800 text-blue-300 font-semibold inline-block px-3 py-1 my-2 rounded-md text-sm">{edu.period}</p>
                <p className="italic mb-2 text-gray-400">{edu.institution}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Professional Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-700 pb-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-900 border-2 border-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="bg-gray-800 text-blue-300 font-semibold inline-block px-3 py-1 my-2 rounded-md text-sm">{exp.period}</p>
                <p className="italic mb-3 text-gray-400">{exp.company}</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
