import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/[0.08] py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-xl font-display font-bold tracking-widest text-white flex items-center gap-2">
              <span>{BRAND_CONFIG.name}</span>
              <span className="text-neutral-600 font-mono text-sm">//</span>
              <span className="text-accent-cyan font-mono text-xs font-normal">SOFTWARE &amp; TECHNOLOGY TEAM</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md font-sans leading-relaxed">
              Tech Genz is a software and technology team associated with the student community of N.B.K.R. Institute of Science &amp; Technology (NBKRIST), Vidyanagar, Andhra Pradesh, India.
            </p>
            <div className="text-[11px] font-mono text-neutral-500">
              Motto: &ldquo;{BRAND_CONFIG.motto}&rdquo; • All Rights Reserved
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">00 // HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">01 // ABOUT</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">02 // SERVICES</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">03 // SELECTED WORK</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">04 // TEAM</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">05 // CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
              ECOSYSTEM
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${BRAND_CONFIG.contactEmail}`}
                  className="hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BRAND_CONFIG.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Organization ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sharepinz.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  SharePinz Live Platform ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Tech-Genz/SharePinz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  SharePinz Repository ↗
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                <span>BACK TO SUMMIT</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <div>
            © {currentYear} TECH GENZ. ALL SYSTEMS OPERATIONAL.
          </div>
          <div className="flex items-center gap-6">
            <span>DESIGNED WITH PRECISION</span>
            <span>•</span>
            <span className="text-neutral-400">LATENCY &lt; 16MS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
