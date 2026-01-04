import React from 'react';
import Reveal from '../components/common/Reveal';
import { PROJECTS } from '../data/projects';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Work = ({ setActiveProject }) => {
  return (
    <section id="work" className="py-32 relative z-10">
      <div className="px-6 md:px-12 mb-20 flex items-end justify-between">
        <Reveal>
          <h2 className="text-[10vw] font-black text-white/5 absolute -top-20 left-6 select-none -z-10 uppercase tracking-tighter">
            Builds
          </h2>
          <h2 className="text-6xl font-black tracking-tighter">
            Selected Projects
          </h2>
        </Reveal>
      </div>

      <div className="border-t-2 border-white">
        {PROJECTS.map((project, index) => (
          <Reveal key={index} delay={index * 100}>
            <div 
              onClick={() => setActiveProject(project)}
              className="group relative border-b border-neutral-800 hover-trigger transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 cursor-pointer"
            >
              <div className="max-w-[1600px] mx-auto py-24 px-6 md:px-12 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3">
                  <span className="text-5xl font-black text-neutral-700 group-hover:text-white transition-colors">
                    {project.id}
                  </span>
                  <span className="block mt-4 text-xs font-sans-ui uppercase tracking-widest text-neutral-500 group-hover:text-white/80 transition-colors font-bold">
                    {project.cat}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xl text-neutral-400 max-w-lg leading-relaxed group-hover:text-white font-sans-ui transition-colors">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8">
                  <span className="text-xs font-sans-ui font-bold uppercase tracking-widest text-neutral-500 text-right group-hover:text-white/80 transition-colors flex items-center gap-2">
                      Explore <ChevronRight size={14} />
                  </span>
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-blue-600 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight strokeWidth={2} size={36} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;