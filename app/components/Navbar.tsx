'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiHome, HiUser, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineServer, HiOutlineMail, HiOutlineSparkles, HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home', icon: HiHome },
  { name: 'About', href: '#about', icon: HiUser },
  { name: 'Resume', href: '#resume', icon: HiOutlineDocumentText },
  { name: 'Services', href: '#services', icon: HiOutlineServer },
  { name: 'Portfolio', href: '#ProjectsSection', icon: HiOutlinePhotograph },
  { name: 'Skill', href: '#skills', icon: HiOutlineSparkles },
  { name: 'Contact', href: '#contact', icon: HiOutlineMail },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false); // <-- State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      // ... (fungsi scroll Anda tetap sama)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk menutup menu saat link diklik (di mobile)
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <>
      {/* Tombol Hamburger (hanya muncul di mobile) */}
      <button className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-md bg-gray-800 text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Overlay (hanya muncul di mobile saat menu terbuka) */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Navbar Sidebar */}
      <nav
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#111827] text-white flex flex-col p-4 z-50 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'transform-none' : '-translate-x-full'} 
          md:transform-none
        `}
      >
        <div className="mb-8 mt-4">
          <h1 className="text-2xl font-bold text-center">Rifaldy Putra</h1>
        </div>

        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`flex items-center p-3 rounded-lg ${activeLink === link.name ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`}
              >
                <link.icon className="w-6 h-6 mr-4" />
                <span className="font-medium">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
