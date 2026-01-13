import React from 'react';
import { Mail, Github, Linkedin, Code2, Cpu, Zap } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { SOCIALS } from '../data/socials';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-40 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#000] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-block px-6 py-3 rounded-full border border-blue-500/30 bg-blue-900/10 text-xs font-sans-ui font-bold uppercase tracking-widest mb-12 text-blue-300">
            Get In Touch
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="text-[9vw] leading-[0.85] font-black tracking-tighter mb-16">
            Let’s build something <br />
            <span className="gradient-text">solid</span>
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${SOCIALS.email}`} 
              className="hover-trigger group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-black border-b-2 border-white/20 pb-2 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <Mail size={32} /> {SOCIALS.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex gap-12 mt-24">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="GitHub">
              <Github size={32} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="LinkedIn">
              <Linkedin size={32} />
            </a>
            <a href={SOCIALS.leetcode} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="LeetCode">
              <Code2 size={32} />
            </a>
            <a href={SOCIALS.codolio} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="Codolio">
              <Cpu size={32} />
            </a>
          </div>
        </Reveal>

        <div className="absolute bottom-8 text-xs text-neutral-600 uppercase tracking-widest font-sans-ui font-bold">
          © 2025 Paridhi Sharma · Engineered with React
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <Zap className="absolute top-20 right-20 text-white/5 w-96 h-96 -rotate-12 pointer-events-none" strokeWidth={0.5} />
    </footer>
  );
};

export default Footer;