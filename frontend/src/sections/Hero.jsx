import Reveal from "../components/common/Reveal";
import { SOCIALS } from "../data/socials";

export default function Hero() {
  return (
    <main className="relative pt-40 pb-32 px-6 md:px-12 z-10 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
      <Reveal>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="w-20 h-20 rounded-full border-2 border-white/20 p-1">
            <img
              src="PARIDHI.png"
              alt="Paridhi Sharma"
              className="w-full h-full rounded-full object-cover bg-neutral-900"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm font-sans-ui">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold text-blue-200">
              Incoming SWE Intern @ DTDL
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h1 className="text-[11vw] leading-[0.85] font-black uppercase tracking-tighter mb-12">
          Software <br />
          <span className="gradient-text">Engineer</span>
        </h1>
      </Reveal>

      <Reveal delay={400}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/20 pt-12">
          <p className="max-w-xl text-3xl md:text-4xl leading-tight text-neutral-300">
            Aspiring Software Engineer focused on backend systems and distributed
            architectures. Currently a B.Tech CSE student at{" "}
            <span className="text-white italic">IGDTUW</span>.
          </p>

          <div className="flex gap-8 text-sm uppercase tracking-widest text-neutral-500 font-bold font-sans-ui">
            <a href={SOCIALS.linkedin} target="_blank">LinkedIn</a>
            <a href={SOCIALS.github} target="_blank">GitHub</a>
            <a href={SOCIALS.leetcode} target="_blank">LeetCode</a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
