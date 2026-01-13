import React from 'react';
import Reveal from '../components/common/Reveal';
import ProjectRow from '../components/project/ProjectRow';
import { PROJECTS } from '../data/projects';

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
          <ProjectRow 
            key={index} 
            project={project} 
            index={index} 
            onClick={() => setActiveProject(project)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Work;