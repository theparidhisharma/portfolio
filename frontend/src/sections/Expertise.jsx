import Reveal from "../components/common/Reveal";
import { SKILLS } from "../data/skills";

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
          <Reveal key={i} delay={i * 100} className="bg-[#050505] p-6">
            <div className="mb-8 text-neutral-600">{skill.icon}</div>
            <h3 className="text-2xl font-black mb-4">{skill.name}</h3>
            <p className="text-sm text-neutral-400">{skill.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
