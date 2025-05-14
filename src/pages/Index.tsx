
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import EducationSection from '@/sections/EducationSection';
import CertificationsSection from '@/sections/CertificationsSection';
import SkillsSection from '@/sections/SkillsSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Update page title and meta
  useEffect(() => {
    document.title = "Pierre-Roberto Leblanc - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20 shadow-lg z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Index;
