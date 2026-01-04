import React, { useState } from 'react';
import Reveal from '../components/common/Reveal';
import { EXPERIENCE } from '../data/experience';
import { LEADERSHIP } from '../data/leadership';
import { SOCIALS } from '../data/socials';
import { FileText, Trophy, Music, Palette, Users } from 'lucide-react';

const About = () => {
  const [funFactIndex, setFunFactIndex] = useState(0);
  const [funFactRevealed, setFunFactRevealed] = useState(false);
  
  const FUN_FACTS = [
    {
      icon: <Trophy size={18} />,
      label: "Gymnastics",
      text: "Competitive gymnast for 8 years (2011-2019)."
    },
    {
      icon: <Music size={18} />,
      label: "Music",
      text: "Singer: Won 3rd Solo at 'SYMPHONY, DELHI' & multiple Zonal 1st positions for East Delhi Choir."
    },
    {
      icon: <Palette size={18} />,
      label: "Kathak",
      text: "Trained in Kathak dance; performed at various cultural festivals."
    }
  ];

  const handleFunFactClick = () => {
    if (!funFactRevealed) setFunFactRevealed(true);
    else setFunFactIndex((prev) => (prev + 1) % FUN_FACTS.length);
  };

  return (
    <section id="about" className="py-40 px-6 md:px-12 relative z-10 max-w-[1400px] mx-auto">
      {/* ROW 1: EXPERIENCE */}
      <div className="grid md:grid-cols-12 gap-16 mb-32">
        <div className="md:col-span-4 relative">
            <div className="sticky top-32">
              <Reveal>
                <h2 className="text-6xl font-black tracking-tighter mb-12 text-white">
                  Experience
                </h2>
              </Reveal>
            </div>
        </div>
        <div className="md:col-span-8 space-y-16">
          <Reveal delay={200}>
            <p className="text-4xl md:text-5xl leading-tight font-medium text-white">
              Designing systems that <span className="text-blue-500">scale</span>.
            </p>
          </Reveal>
          
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={300 + (i*100)}>
              <div className="border-l-2 border-white/20 pl-8 py-2">
                <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                <div className="flex justify-between items-center text-sm font-sans-ui font-bold text-neutral-500 uppercase tracking-widest mb-4">
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl font-sans-ui">
                  {exp.desc}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={400}>
              <a 
                href={SOCIALS.resume} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-sans-ui font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
              >
                <FileText size={16} /> Download Resume
              </a>
          </Reveal>
        </div>
      </div>

      {/* ROW 2: COMMUNITY & FUN FACT */}
      <div className="grid md:grid-cols-12 gap-16 border-t border-white/10 pt-20">
          {/* LEFT COLUMN: FUN FACT */}
          <div className="md:col-span-4 relative">
            <Reveal delay={200}>
              <div 
                onClick={handleFunFactClick}
                className="hidden md:block cursor-pointer p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all sticky top-32"
              >
                <div className="absolute -right-4 -top-4 bg-blue-500/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    {funFactRevealed ? "Did you know?" : "FUN FACTS ;)"}
                  </div>
                  
                  <div className="min-h-[100px] flex flex-col justify-center">
                    {funFactRevealed ? (
                      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center gap-2 mb-2 text-white">
                          {FUN_FACTS[funFactIndex].icon}
                          <span className="font-bold">{FUN_FACTS[funFactIndex].label}</span>
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed font-sans-ui">
                          {FUN_FACTS[funFactIndex].text}
                        </p>
                        <span className="text-[10px] text-neutral-600 mt-4 block uppercase tracking-widest">Click for another</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                        FUN FACTS ;)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* RIGHT COLUMN: COMMUNITY GRID */}
          <div className="md:col-span-8">
              <h3 className="text-2xl font-bold font-sans-ui uppercase tracking-widest text-neutral-500 mb-8">Community & Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LEADERSHIP.map((role, i) => (
                  <Reveal key={i} delay={400 + (i * 100)}>
                    <div className="group border border-white/10 bg-white/5 p-6 rounded-lg hover:border-blue-500/50 transition-colors h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3 text-blue-400">
                          <Users size={18} />
                          <span className="text-xs font-bold uppercase tracking-widest">{role.org}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{role.role}</h4>
                      </div>
                      <p className="text-sm text-neutral-400 font-sans-ui leading-relaxed mt-4">
                        {role.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
      </div>
    </section>
  );
};

export default About;