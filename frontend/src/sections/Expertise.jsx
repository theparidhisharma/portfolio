import Reveal from "../components/common/Reveal";
import { SKILLS } from "../data/skills";
import { Terminal, Layers, Cpu, Code2 } from "lucide-react";
import React from "react";

const ICONS = {
  Terminal,
  Layers,
  Cpu,
  Code2
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <Reveal>
        <h2 className="text-5xl font-black tracking-tighter mb-12 text-center">
          My Arsenal
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
        {SKILLS.map((skill, i) => (
          <Reveal
            key={i}
            delay={i * 100}
            className="bg-[#050505] p-6 group hover:bg-[#0a0a0a] transition-colors h-full"
          >
            <div className="mb-8 text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
              {ICONS[skill.icon] &&
                React.createElement(ICONS[skill.icon], { size: 24 })}
            </div>

            <h3 className="text-2xl font-black mb-4">{skill.name}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans-ui">
              {skill.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
