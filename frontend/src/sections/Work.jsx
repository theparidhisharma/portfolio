import { useState } from "react";
import Reveal from "../components/common/Reveal";
import ProjectRow from "../components/project/ProjectRow";
import ProjectModal from "../components/project/ProjectModal";
import { PROJECTS } from "../data/projects";

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-32">
      <Reveal>
        <h2 className="text-6xl font-black px-6 md:px-12 mb-20">
          Selected Projects
        </h2>
      </Reveal>

      <div className="border-t-2 border-white">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <ProjectRow project={p} onClick={() => setActiveProject(p)} />
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
