import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Globe,
  Zap,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Mail,
  FileText,
  ExternalLink,
  X,
  ChevronRight,
  Camera
} from 'lucide-react';

/* =======================
   HOOKS & UTILS
======================= */
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* =======================
   DATA
======================= */
const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/theparidhisharma/",
  github: "https://github.com/theparidhisharma/",
  leetcode: "https://leetcode.com/u/paridhi_sharma/",
  codolio: "https://codolio.com/profile/paridhi",
  email: "paridhi0203sharma@gmail.com",
  resume: "https://drive.google.com/file/d/1ywG9grgBQ6Qx356CN_cXsuKipOyG9uYq/view?usp=sharing"
};

const PROJECTS = [
  {
    id: '01',
    name: 'Retarget IQ',
    cat: 'Distributed Systems',
    shortDesc: 'Event-driven microservices prototype exploring Kafka consumers and throughput.',
    overview: 'RetargetIQ is a learning-focused distributed system designed to simulate high-throughput event processing. It uses an event-driven architecture with Apache Kafka to decouple services, managing partitions and consumer groups to handle event streams efficiently. The project explores patterns for data consistency and scalability in a containerized environment.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker'],
    year: '2025',
    github: "https://github.com/theparidhisharma/RetargetIQ", // Assumed repo name
    demoImage: "RETARGETIQ_1.png" 
  },
  {
    id: '02',
    name: 'Auto IQ',
    cat: 'Agentic AI',
    shortDesc: 'Prototype for predictive maintenance using ML inference and backend logic.',
    overview: 'Auto IQ is an experimental agentic AI system exploring the intersection of machine learning and backend engineering. It ingests sensor-like data, runs it through a predictive model to assess failure risks, and simulates automated maintenance workflow triggers based on defined thresholds.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'Postgres'],
    year: '2025',
    github: "https://github.com/theparidhisharma/AutoIQ", // Assumed repo name
    demoImage: "AUTOIQ_1.png" 
  },
  {
    id: '03',
    name: 'Student Portal',
    cat: 'Full Stack App',
    shortDesc: 'Comprehensive academic management portal designed for student workflows.',
    overview: 'A full-stack web application built to address the usability challenges of legacy academic systems. The portal features a responsive React frontend consuming RESTful APIs to display grades, attendance, and schedules. It focuses on modular component design and clean data visualization.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind'],
    year: '2024',
    github: "https://github.com/theparidhisharma/StudentPortal", // Assumed repo name
    demoImage: "STUDENTPORTAL_1.png" 
  }
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Deutsche Telekom Digital Labs",
    period: "May 2025 — July 2025",
    desc: "Contributed to backend services using Java and Spring Boot in a professional environment. Worked on optimizing REST APIs and gained practical exposure to event-driven architectures and production engineering standards."
  }
];

const LINKEDIN_POSTS = [
  {
    id: 1,
    title: "Orchestrating Microservices",
    snippet: "Deep dive into consumer groups and offset management in Kafka. 🚀",
    date: "Recent",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7371915870584958976/",
    image: "LINKEDIN_1.png"
  },
  {
    id: 2,
    title: "Journey at DTDL",
    snippet: "Reflecting on my summer internship building scalable backends at Deutsche Telekom.",
    date: "Recent",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7408132864497614848/",
    image: "LINKEDIN_2.png"
  },
  {
    id: 3,
    title: "Engineering Highlights",
    snippet: "Sharing key takeaways from my latest system design challenges and architectural decisions.",
    date: "Recent",
    link: "https://www.linkedin.com/in/theparidhisharma/",
    image: "LINKEDIN_3.png" 
  },
  {
    id: 4,
    title: "Community & Growth",
    snippet: "Connecting with the tech community, attending meetups, and sharing knowledge.",
    date: "Recent",
    link: "https://www.linkedin.com/in/theparidhisharma/", 
    image: "LINKEDIN_4.png"
  }
];

// NEW GALLERY DATA
const GALLERY = [
  {
    id: 1,
    title: "Smart India Hackathon",
    category: "Finalist 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3852633?q=80&w=2336&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Tech Summit Delhi",
    category: "Volunteer",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2669&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Open Source Meetup",
    category: "Community",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Campus Robotics Club",
    category: "Lead",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1"
  }
];

const SKILLS = [
  {
    name: "Backend Engineering",
    icon: <Terminal size={24} />,
    desc: "Java, Spring Boot, Microservices, System Design"
  },
  {
    name: "Distributed Systems",
    icon: <Layers size={24} />,
    desc: "Apache Kafka, Event-Driven Architecture, Docker"
  },
  {
    name: "Machine Learning",
    icon: <Cpu size={24} />,
    desc: "Python, SQL, Predictive Modeling, Inference Pipelines"
  },
  {
    name: "Web Technologies",
    icon: <Code2 size={24} />,
    desc: "React, REST APIs, HTML/CSS, Git"
  }
];

/* =======================
   COMPONENTS
======================= */

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target;
      setHover(!!(t.closest('a') || t.closest('button') || t.closest('.hover-trigger')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block transition-all duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hover ? 2.5 : 1})`,
        mixBlendMode: 'difference'
      }}
    >
      <div className={`w-4 h-4 bg-white rounded-full ${hover ? 'opacity-50' : 'opacity-100'}`} />
      {hover && <div className="absolute inset-0 border border-white rounded-full animate-ping" />}
    </div>
  );
};

const Marquee = ({ text, reverse = false }) => (
  <div className="relative overflow-hidden py-8 border-y border-white/10 bg-white/5 backdrop-blur-sm z-10">
    <div className={`animate-marquee whitespace-nowrap flex gap-12 ${reverse ? 'reverse-marquee' : ''}`}>
      {Array(8).fill(text).map((t, i) => (
        <span
          key={i}
          className="text-5xl font-bold uppercase tracking-tighter text-neutral-500/30"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const LinkedInStoryCard = ({ post }) => (
  <div className="relative group w-full hover-trigger">
    {/* Background Blur Layer */}
    <div 
      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-3xl"
      style={{ backgroundImage: `url(${post.image})` }}
    />
    
    {/* The Card Container */}
    <div className="relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 h-full">
      
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-blue-600 rounded-full">
            <Linkedin size={12} className="text-white" />
          </div>
          <span className="text-xs font-bold font-sans-ui text-white">Paridhi Sharma</span>
        </div>
        <span className="text-[10px] font-sans-ui font-medium text-neutral-400">{post.date}</span>
      </div>

      {/* Main Image */}
      <div className="aspect-[4/5] overflow-hidden relative bg-neutral-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
           <h3 className="text-xl font-black italic mb-2 leading-tight">{post.title}</h3>
           <p className="text-sm text-neutral-300 font-sans-ui line-clamp-2 mb-4">
             {post.snippet}
           </p>
           <a 
             href={post.link} 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
           >
             Check out latest post <ArrowUpRight size={12} />
           </a>
        </div>
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black border border-white/10 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-neutral-900 overflow-hidden">
          <img 
            src={project.demoImage} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Content Side */}
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

          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all rounded-sm"
          >
            <Github size={20} /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

/* =======================
   MAIN PORTFOLIO
======================= */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <CustomCursor />

      {/* --- GLOBAL STYLES --- */}
      <style>{`
        body { 
          font-family: 'Times New Roman', Times, serif; 
          cursor: none; 
        }
        .font-sans-ui {
          font-family: system-ui, -apple-system, sans-serif;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .reverse-marquee {
          animation-direction: reverse;
        }
        .gradient-text {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Project Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px]"
          style={{ transform: `translateY(${scrolled * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-violet-900/20 rounded-full blur-[120px]"
          style={{ transform: `translateY(${-scrolled * 0.1}px)` }}
        />
      </div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${scrolled > 50 ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="text-2xl font-black tracking-tighter uppercase hover-trigger mix-blend-difference">
          Paridhi.sh
        </div>
        <nav className="flex gap-8 text-xs font-bold font-sans-ui uppercase tracking-widest mix-blend-difference">
          {['About', 'Work', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover-trigger hover:text-blue-400 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </header>

      {/* --- HERO --- */}
      <main className="relative pt-40 pb-32 px-6 md:px-12 z-10 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
        
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            {/* AVATAR */}
            <div className="w-20 h-20 rounded-full border-2 border-white/20 p-1">
              <img 
                src="PARIDHI.png" // Updated profile pic
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
              Aspiring Software Engineer focused on backend systems and distributed architectures. Currently a B.Tech CSE student at <span className="text-white italic">IGDTUW</span>, exploring the depths of Java, Kafka, and Machine Learning.
            </p>
            <div className="flex gap-8 text-sm uppercase tracking-widest text-neutral-500 font-bold font-sans-ui">
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href={SOCIALS.leetcode} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LeetCode</a>
            </div>
          </div>
        </Reveal>
      </main>

      <Marquee text="Backend Engineering • Distributed Systems • Machine Learning •" />

      {/* --- ABOUT --- */}
      <section id="about" className="py-40 px-6 md:px-12 relative z-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-6xl font-black tracking-tighter mb-8 sticky top-32">
                Experience
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-16">
            <Reveal delay={200}>
              <p className="text-4xl md:text-5xl leading-tight font-medium text-white">
                Designing systems that <span className="text-blue-500">scale</span>.
              </p>
            </Reveal>
            
            {/* Experience Card */}
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={300 + (i*100)}>
                <div className="border-l-2 border-white/20 pl-8 py-2">
                  <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                  <div className="flex justify-between items-center text-sm font-sans-ui font-bold text-neutral-500 uppercase tracking-widest mb-4">
                    <span>{exp.role}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl font-sans-ui">
                    {exp.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
               <a 
                 href={SOCIALS.resume} 
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-white text-black font-sans-ui font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
               >
                 <FileText size={16} /> Download Resume
               </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SELECTED WORK --- */}
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

      {/* --- GALLERY SECTION (MASONRY GRID) --- */}
      <section id="gallery" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <Camera className="text-blue-500" size={40} />
            <h2 className="text-6xl font-black tracking-tighter">Beyond Code</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} delay={i * 150} className={`${item.span} relative group hover-trigger overflow-hidden rounded-sm`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-sans-ui font-bold uppercase tracking-widest text-blue-400 block mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-white italic tracking-tight">
                  {item.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- LINKEDIN THOUGHTS (INSTAGRAM STORY STYLE) --- */}
      <section id="thoughts" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-20">
            <Linkedin className="text-blue-500" size={40} />
            <h2 className="text-5xl font-black tracking-tighter text-center">Featured on LinkedIn</h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LINKEDIN_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 200}>
              <LinkedInStoryCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- EXPERTISE --- */}
      <section id="expertise" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <Reveal>
          <h2 className="text-5xl font-black tracking-tighter mb-12 text-center">
            My Arsenal
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
          {SKILLS.map((skill, i) => (
            <Reveal key={i} delay={i * 100} className="bg-[#050505] p-12 group hover:bg-[#0a0a0a] transition-colors h-full">
              <div className="mb-8 text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">
                {skill.name}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans-ui">
                {skill.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="relative py-40 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#000] overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-block px-6 py-3 rounded-full border border-blue-500/30 bg-blue-900/10 text-xs font-sans-ui font-bold uppercase tracking-widest mb-12 text-blue-300">
              Get In Touch
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-[9vw] leading-[0.85] font-black tracking-tighter mb-16">
              Let’s build something <br />
              <span className="gradient-text">solid</span>
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col items-center gap-6">
              <a 
                href={`mailto:${SOCIALS.email}`} 
                className="hover-trigger group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-black border-b-2 border-white/20 pb-2 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <Mail size={32} /> {SOCIALS.email}
              </a>
              
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex gap-12 mt-24">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="GitHub">
                <Github size={32} />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="LinkedIn">
                <Linkedin size={32} />
              </a>
              <a href={SOCIALS.leetcode} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="LeetCode">
                <Code2 size={32} />
              </a>
               {/* Codolio Placeholder */}
              <a href={SOCIALS.codolio} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="Codolio">
                <Cpu size={32} />
              </a>
            </div>
          </Reveal>

          <div className="absolute bottom-11 text-xs text-neutral-600 uppercase tracking-widest font-sans-ui font-bold">
            © 2025 Paridhi Sharma · Engineered with React
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <Zap className="absolute top-20 right-20 text-white/5 w-96 h-96 -rotate-12 pointer-events-none" strokeWidth={0.5} />
      </footer>
    </div>
  );
}