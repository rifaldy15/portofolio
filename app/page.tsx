'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function FrontendPortfolio() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden md:ml-64 bg-[#0F172A]">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
