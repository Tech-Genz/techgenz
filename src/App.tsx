import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { StatementTransition } from './components/StatementTransition';
import { Team } from './components/Team';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { IntroSequence } from './components/IntroSequence';

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener for hero particle dissolution & section spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.9)));
      setScrollProgress(progress);

      // Section spy
      const sections = ['home', 'about', 'services', 'projects', 'team', 'technology', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F7] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Cinematic Intro Animation Sequence */}
      {!introFinished && (
        <IntroSequence onComplete={() => setIntroFinished(true)} />
      )}

      {/* Minimal Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Experience Flow */}
      <main>
        {/* 00 // HERO WITH PARTICLE HUMAN PORTRAIT */}
        <Hero scrollProgress={scrollProgress} />

        {/* 01 // ABOUT STUDIO */}
        <About />

        {/* 02 // SERVICES NUMBERED EDITORIAL LIST */}
        <Services />

        {/* 03 // SELECTED WORK & SHAREPINZ SHOWCASE */}
        <Projects />

        {/* TYPOGRAPHIC TRANSITION MANIFESTO */}
        <StatementTransition />

        {/* 04 // TEAM SECTION */}
        <Team />

        {/* 05 // TECHNOLOGY AND CAPABILITIES */}
        <TechStack />

        {/* 06 // CONTACT SECTION */}
        <Contact />
      </main>

      {/* MINIMAL FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
