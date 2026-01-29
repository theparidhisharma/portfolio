import { useEffect, useState } from 'react';
import Reveal from '../components/common/Reveal';
import { fetchProjects } from '../services/projects.api';

const Projects = ({ setActiveProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
    >
      <Reveal>
        <h2 className="text-6xl font-black tracking-tighter mb-20">
          Systems I’ve Built
        </h2>
      </Reveal>

      <div className="grid gap-16">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100}>
            <div className="group border border-neutral-800 p-8 transition hover:border-neutral-600">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {project.cat} · {project.year}
                  </p>
                </div>
              </div>

              {/* Short description */}
              <p className="text-neutral-400 max-w-3xl mb-6">
                {project.shortDesc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-neutral-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub →
                </a>

                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:underline"
                  >
                    Live →
                  </a>
                )}

                {setActiveProject && (
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-neutral-400 hover:text-white transition"
                  >
                    Deep dive →
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
