import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Send, CheckCircle2, Copy } from 'lucide-react';
import { BRAND_CONFIG, TEAM_MEMBERS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Subtle dark fluid/smoky abstract canvas texture
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    let t = 0;
    let animationId: number;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderSmoke = () => {
      t += 0.003;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Create multiple overlapping soft radial clouds that drift slowly
      const clouds = [
        { x: width * 0.3 + Math.sin(t) * 120, y: height * 0.4 + Math.cos(t * 0.8) * 80, r: 350, alpha: 0.05 },
        { x: width * 0.7 + Math.cos(t * 0.7) * 140, y: height * 0.6 + Math.sin(t * 0.9) * 90, r: 420, alpha: 0.04 },
        { x: width * 0.5 + Math.sin(t * 1.2) * 80, y: height * 0.8 + Math.cos(t * 0.5) * 60, r: 300, alpha: 0.03 }
      ];

      for (const c of clouds) {
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        grad.addColorStop(0, `rgba(255, 255, 255, ${c.alpha})`);
        grad.addColorStop(0.5, `rgba(200, 215, 230, ${c.alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(renderSmoke);
      }
    };

    renderSmoke();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Direct AJAX transmission to FormSubmit endpoint for admin@techgenz.site
      const response = await fetch('https://formsubmit.co/ajax/admin@techgenz.site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Tech Genz Inquiry] ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        // Fallback to native POST submission
        formRef.current?.submit();
      }
    } catch {
      // Fallback to native POST if fetch is intercepted or offline
      formRef.current?.submit();
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard?.writeText(BRAND_CONFIG.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden">
      {/* Dark Abstract Smoky / Textured Canvas Background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Top Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">05 //</span>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">INITIATE CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Editorial Headline & Direct Info Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Availability Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR COLLABORATION</span>
            </div>

            <div>
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]">
                LET&apos;S BUILD <br />
                <span className="font-serif italic font-normal text-white">something.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                Have an ambitious idea, a technical challenge, or an opportunity to partner? Tech Genz is built to engineer high-impact solutions.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-7 rounded-2xl border border-white/[0.12] bg-[#0c0c0f]/80 backdrop-blur-md space-y-6 shadow-xl">
              {/* Primary Admin Inbox */}
              <div className="border-b border-white/[0.08] pb-4">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  OFFICIAL INBOX // LEADER
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${BRAND_CONFIG.contactEmail}`}
                    className="text-sm font-mono text-white hover:text-accent-cyan transition-colors select-all"
                  >
                    {BRAND_CONFIG.contactEmail}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-lg border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Core Team Member Direct Emails */}
              <div className="border-b border-white/[0.08] pb-4">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2.5">
                  CORE TEAM DIRECTORY
                </div>
                <div className="space-y-2 text-xs font-mono">
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                      <span className="text-neutral-400">{member.name}:</span>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-accent-cyan hover:underline transition-colors"
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Organization */}
              <div className="border-b border-white/[0.08] pb-4">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  CODE ORGANIZATION
                </div>
                <a
                  href={BRAND_CONFIG.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent-cyan transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/Tech-Genz ↗</span>
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  AVAILABILITY
                </div>
                <p className="text-xs font-sans text-neutral-300">
                  {BRAND_CONFIG.availability}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity FormSubmit Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.12] bg-[#0c0c0f]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Send a Dispatch
              </h3>
              <p className="text-xs text-neutral-400 mb-8 font-mono">
                Messages are delivered directly to <span className="text-neutral-200">admin@techgenz.site</span> via FormSubmit.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    Your dispatch payload has been sent to{' '}
                    <span className="text-white font-mono font-medium">admin@techgenz.site</span>. Our team will review your message and reply promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action="https://formsubmit.co/admin@techgenz.site"
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* FormSubmit configurations */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={formData.subject ? `[Tech Genz Inquiry] ${formData.subject}` : 'New Inquiry via techgenz.site'}
                  />

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-white/40'
                        } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-white/40'
                        } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Subject / Project Scope <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="High-performance Web App / 3D Canvas Architecture"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.subject ? 'border-red-500/80' : 'border-white/10 focus:border-white/40'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Message Brief <span className="text-red-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project timeline, technical targets, or collaborative inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-white/40'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 disabled:opacity-50 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>DISPATCHING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
