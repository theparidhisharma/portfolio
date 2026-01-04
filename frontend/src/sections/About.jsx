import Reveal from "../components/common/Reveal";
import { EXPERIENCE } from "../data/experience";
import { LEADERSHIP } from "../data/leadership";
import { FileText, Users } from "lucide-react";
import { SOCIALS } from "../data/socials";

export default function About() {
  return (
    <section id="about" className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-12 gap-16 mb-32">
        <div className="md:col-span-4 sticky top-32">
          <Reveal>
            <h2 className="text-6xl font-black">Experience</h2>
          </Reveal>
        </div>

        <div className="md:col-span-8 space-y-16">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={200}>
              <div className="border-l-2 border-white/20 pl-8">
                <h3 className="text-3xl font-bold">{exp.company}</h3>
                <div className="text-sm uppercase tracking-widest text-neutral-500 font-bold flex justify-between">
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-xl text-neutral-400 mt-4">{exp.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <a
              href={SOCIALS.resume}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest"
            >
              <FileText size={16} /> Download Resume
            </a>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-20">
        {LEADERSHIP.map((l, i) => (
          <Reveal key={i} delay={200}>
            <div className="border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Users size={16} />
                <span className="text-xs uppercase tracking-widest font-bold">{l.org}</span>
              </div>
              <h4 className="text-xl font-bold">{l.role}</h4>
              <p className="text-sm text-neutral-400 mt-2">{l.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
