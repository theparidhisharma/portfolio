import Reveal from "../components/common/Reveal";
import { SOCIALS } from "../data/socials";
import { Github, Linkedin, Code2, Cpu, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-40 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#000]">
      <div className="max-w-[1400px] mx-auto text-center">
        <Reveal>
          <span className="px-6 py-3 border border-blue-500/30 bg-blue-900/10 uppercase tracking-widest text-xs font-bold">
            Get In Touch
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="text-[9vw] font-black mt-12">
            Let’s build something <span className="gradient-text">solid</span>
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="inline-flex items-center gap-4 text-3xl font-black border-b-2 border-white/20 mt-12"
          >
            <Mail size={32} /> {SOCIALS.email}
          </a>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex justify-center gap-12 mt-24">
            <a href={SOCIALS.github}><Github size={32} /></a>
            <a href={SOCIALS.linkedin}><Linkedin size={32} /></a>
            <a href={SOCIALS.leetcode}><Code2 size={32} /></a>
            <a href={SOCIALS.codolio}><Cpu size={32} /></a>
          </div>
        </Reveal>

        <div className="text-xs text-neutral-600 mt-20 uppercase tracking-widest">
          © 2025 Paridhi Sharma · Engineered with React
        </div>
      </div>

      <Zap className="absolute top-20 right-20 text-white/5 w-96 h-96" strokeWidth={0.5} />
    </footer>
  );
}
