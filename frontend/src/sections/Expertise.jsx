import React from 'react';
import { Terminal, Layers, Cpu, Code2 } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { SKILLS } from '../data/skills';

const IconMap = {
  Terminal: Terminal,
  Layers: Layers,
  Cpu: Cpu,
  Code2: Code2
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
      <Reveal>
        <h2 className="text-5xl font-black tracking-tighter mb-12 text-center">
          My Arsenal
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
        {SKILLS.map((skill, i) => {
          const IconComponent = IconMap[skill.iconName];
          return (
            <Reveal key={i} delay={i * 100} className="bg-[#050505] p-6 group hover:bg-[#0a0a0a] transition-colors h-full">
              <div className="mb-8 text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
                <IconComponent size={24} />
              </div>
              <h3 className="text-2xl font-black mb-4">
                {skill.name}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans-ui">
                {skill.desc}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;