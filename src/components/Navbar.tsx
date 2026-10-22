import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TEAM', href: '#team' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group text-sm font-display font-bold tracking-widest text-white transition-opacity hover:opacity-80"
        >
          <span>{BRAND_CONFIG.name}</span>
          <span className="text-neutral-500 font-mono font-normal tracking-normal group-hover:text-accent-cyan transition-colors">
            //
          </span>
          <span className="hidden xl:inline text-[10px] font-mono font-normal tracking-wider text-neutral-400 uppercase">
            Software &amp; Technology Team
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 py-1 ${
                  isActive ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#050505]/98 border-b border-white/10 px-6 py-8 flex flex-col space-y-5 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-display tracking-widest flex items-center justify-between py-2 border-b border-white/[0.06] ${
                  isActive ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-neutral-600">//</span>
              </a>
            );
          })}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-3 text-center rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Contact Tech Genz
            </a>
            <a
              href={BRAND_CONFIG.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-full border border-white/20 text-neutral-300 font-mono text-xs tracking-wider hover:border-white/40 transition-colors"
            >
              GitHub Organization ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
