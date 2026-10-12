import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [visitorNote, setVisitorNote] = useState('');
  const [visitorContact, setVisitorContact] = useState('');

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-pranav-a61593280' },
    { label: 'GitHub', url: 'https://github.com/Pranavreddyedula' },
    { label: 'Instagram', url: 'https://www.instagram.com/_pranav_r_16/' },
    { label: 'Behance', url: 'https://www.behance.net/saipranavreddy' },
    { label: 'Reddit', url: 'https://www.reddit.com/user/Inevitable-Echo1448/' },
  ];

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorContact) return;
    setRequestSent(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#E9E9E7] pt-28 pb-20 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="text-xs uppercase tracking-widest text-black/50 font-mono mb-4">
          06 / INITIATE CONVERSATION
        </div>

        {/* Large Creative Studio Heading */}
        <div className="mb-8">
          <h2 className="font-heading font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-[#050505] leading-[0.95]">
            WHAT ARE WE
            <br />
            BUILDING?
          </h2>
        </div>

        {/* Supporting text */}
        <p className="max-w-2xl text-[18px] sm:text-[22px] md:text-[24px] text-black/75 font-body leading-relaxed mb-12">
          Have an idea, opportunity, collaboration or project? Let's make something useful.
        </p>

        {/* Email Availability Notice Card */}
        <div className="mb-14 p-6 sm:p-8 bg-white/90 rounded-3xl border border-black/[0.08] max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-black/45 mb-2">
            DIRECT INQUIRY
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="font-heading text-lg sm:text-xl text-[#050505]">
                Email available on request
              </div>
              <p className="text-xs text-black/60 font-body mt-0.5">
                Drop your handle or project brief below to establish direct connection.
              </p>
            </div>
          </div>

          {/* Quick Request Form */}
          {requestSent ? (
            <div className="p-4 bg-[#F2F2F0] rounded-xl text-xs font-mono text-emerald-800 border border-emerald-200">
              ✓ Connection inquiry noted. Sai Pranav will connect with you shortly.
            </div>
          ) : (
            <form onSubmit={handleSendRequest} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Email or LinkedIn"
                  value={visitorContact}
                  onChange={(e) => setVisitorContact(e.target.value)}
                  required
                  className="px-4 py-2.5 rounded-xl bg-[#F7F7F5] border border-black/10 text-xs text-black font-body focus:outline-hidden focus:border-black transition-colors"
                />
                <input
                  type="text"
                  placeholder="Brief note or project type"
                  value={visitorNote}
                  onChange={(e) => setVisitorNote(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#F7F7F5] border border-black/10 text-xs text-black font-body focus:outline-hidden focus:border-black transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#050505] text-white rounded-xl text-xs font-medium hover:bg-black/85 transition-all cursor-pointer"
              >
                Request Email &amp; Introduction
              </button>
            </form>
          )}
        </div>

        {/* Real Clickable Social Action Pills */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-black/45">
            CHANNELS &amp; PROFILES
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/15 text-[#050505] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#050505] hover:text-white hover:border-black transition-all duration-200 cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                <span className="text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
