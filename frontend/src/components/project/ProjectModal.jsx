import React from 'react';
import { X, Github, Globe } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black border border-white/10 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-neutral-900 overflow-hidden">
          <img 
            src={project.demoImage} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="mb-2">
            <span className="text-xs font-bold font-sans-ui uppercase tracking-widest text-blue-400">
              {project.cat}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
            {project.name}
          </h2>
          
          <p className="text-lg text-neutral-300 font-sans-ui leading-relaxed mb-8">
            {project.overview}
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-sans-ui font-medium text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all rounded-sm"
              >
                <Github size={20} /> View on GitHub
              </a>

              {project.liveLink && (
                 <a 
                   href={project.liveLink}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm"
                 >
                   <Globe size={20} /> Live Demo
                 </a>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;