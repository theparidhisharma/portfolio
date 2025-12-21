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
  Phone,
  FileText,
  ExternalLink,
  X,
  ChevronRight,
  Camera,
  Palette,
  Users,
  Music,
  Trophy
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
    github: "https://github.com/theparidhisharma/RetargetIQ", 
    liveLink: "https://retarget-iq-frontend.vercel.app/", 
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
    github: "https://github.com/theparidhisharma/AutoIQ",
    liveLink: "#", 
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
    github: "https://github.com/theparidhisharma/StudentPortal",
    liveLink: "https://student-portal-navy-six.vercel.app/", 
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

const LEADERSHIP = [
  {
    role: "Website Developer",
    org: "Microsoft Student Club",
    desc: "Building and maintaining the official club website."
  },
  {
    role: "Technical Associate",
    org: "IEEE IGDTUW",
    desc: "Organizing technical workshops and managing events."
  },
  {
    role: "Coordinator",
    org: "Training & Placement Cell",
    desc: "Facilitating recruitment drives and corporate relations."
  },
  {
    role: "PR HEAD",
    org: "Tarannum IGDTUW",
    desc: "Managing PR for music society,IGDTUW."
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
  }
];

const GALLERY = [
  {
    id: 1,
    title: "Smart India Hackathon",
    category: "Finalist 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3852633?q=80&w=2336&auto=format&fit=crop",
    shortDesc: "National finalist among 500+ teams.",
    longDesc: "Reaching the grand finale of the Smart India Hackathon was a defining moment. Our team engineered a real-time waste management solution using IoT sensors and a centralized dashboard. Over 36 hours of non-stop coding, we tackled hardware-software integration challenges and pitched to industry experts."
  },
  {
    id: 2,
    title: "Tech Summit Delhi",
    category: "Volunteer",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2669&auto=format&fit=crop",
    shortDesc: "Managing logistics for 1000+ attendees.",
    longDesc: "As a volunteer at Tech Summit Delhi, I was responsible for speaker coordination and attendee registration. It was an exercise in crisis management and communication, ensuring smooth operations for over 1000 developers and tech leaders."
  },
  {
    id: 3,
    title: "Open Source Meetup",
    category: "Community",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    shortDesc: "Contributing to the dev ecosystem.",
    longDesc: "I am an active participant in the local Open Source community. From conducting workshops on 'Getting Started with Git' to contributing to documentation for community projects, I believe in the power of shared knowledge and collaborative building."
  },
  {
    id: 4,
    title: "Campus Robotics Club",
    category: "Lead",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop",
    shortDesc: "Mentoring juniors in automation.",
    longDesc: "Leading the Campus Robotics Club allowed me to merge my love for code with hardware. We built an autonomous line-following robot that won the inter-college championship. My role involved mentoring 20+ junior students and managing the club's technical resources.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-tech-futuristic-interface-992-large.mp4" 
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
    name: "Web & UI Engineering",
    icon: <Code2 size={24} />,
    desc: "React, REST APIs, Tailwind CSS, Responsive Design, Git"
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
  <div className="relative group w-full hover-trigger aspect-[4/5]">
    {/* Background Blur Layer */}
    <div 
      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-3xl"
      style={{ backgroundImage: `url(${post.image})` }}
    />
    
    {/* The Card Container */}
    <div className="relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 h-full flex flex-col">
      
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
      <div className="relative flex-grow bg-neutral-900 overflow-hidden">
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

const GalleryCard = ({ item, spanClass, setHoveredGalleryItem, hoveredGalleryItem, setActiveGalleryItem }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHoveredGalleryItem(item.id);
    const video = videoRef.current;
    if (item.video && video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Auto-play was prevented
            });
        }
    }
  };

  const handleMouseLeave = () => {
    setHoveredGalleryItem(null);
    const video = videoRef.current;
    if (item.video && video) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  return (
    <div 
      className={`${spanClass} relative group cursor-pointer overflow-hidden rounded-sm transition-all duration-500 ${hoveredGalleryItem && hoveredGalleryItem !== item.id ? 'blur-[2px] opacity-40 scale-95 grayscale' : 'scale-100 opacity-100'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveGalleryItem(item)}
    >
      <div className="w-full h-full relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.video ? 'group-hover:opacity-0' : ''}`}
        />
        
        {item.video && (
           <video
             ref={videoRef}
             src={item.video}
             muted
             loop
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
           />
        )}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 pointer-events-none" />
        
        <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${hoveredGalleryItem === item.id ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-sans-ui font-bold uppercase tracking-widest text-blue-400 block mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {item.category}
          </span>
          <h3 className="text-3xl font-black text-white italic tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-200 font-sans-ui line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
            {item.shortDesc}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
            Read Story <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryModal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black border border-white/10 transition-colors">
          <X size={24} />
        </button>
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-neutral-900">
           {item.video ? (
             <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
           ) : (
             <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
           )}
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2">{item.category}</span>
          <h2 className="text-3xl font-black mb-6 text-white leading-tight">{item.title}</h2>
          <p className="text-neutral-300 leading-relaxed font-sans-ui">{item.longDesc}</p>
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
  
  // State for dynamic content
  const [posts, setPosts] = useState(LINKEDIN_POSTS);
  const [galleryItems, setGalleryItems] = useState(GALLERY);
  
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredGalleryItem, setHoveredGalleryItem] = useState(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  // FUN FACT STATE
  const [funFactIndex, setFunFactIndex] = useState(0);
  const [funFactRevealed, setFunFactRevealed] = useState(false);
  const FUN_FACTS = [
    {
      icon: <Trophy size={18} />,
      label: "Gymnastics",
      text: "Competitive gymnast for 8 years (2011-2019)."
    },
    {
      icon: <Music size={18} />,
      label: "Music",
      text: "Singer: Won 3rd Solo at 'SYMPHONY, DELHI' & multiple Zonal 1st positions for East Delhi Choir."
    },
    {
      icon: <Palette size={18} />,
      label: "Kathak",
      text: "Trained in Kathak dance; performed at various cultural festivals."
    }
  ];
  const handleFunFactClick = () => {
    if (!funFactRevealed) setFunFactRevealed(true);
    else setFunFactIndex((prev) => (prev + 1) % FUN_FACTS.length);
  };

  // ALGORITHMIC LAYOUT GENERATOR
  const getGallerySpan = (index) => {
    const pattern = [
      "md:col-span-2 md:row-span-2", // 0: Big Square
      "md:col-span-1 md:row-span-1", // 1: Small Square
      "md:col-span-1 md:row-span-1", // 2: Small Square
      "md:col-span-2 md:row-span-1", // 3: Wide Rectangle
      "md:col-span-1 md:row-span-2", // 4: Tall Rectangle
      "md:col-span-1 md:row-span-1", // 5: Small Square
    ];
    return pattern[index % pattern.length];
  };

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

      {/* Modals */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {activeGalleryItem && (
        <GalleryModal item={activeGalleryItem} onClose={() => setActiveGalleryItem(null)} />
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
          {['About', 'Work', 'Expertise', 'Gallery', 'Contact'].map((item) => (
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
        {/* ROW 1: EXPERIENCE */}
        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4 relative">
             <div className="sticky top-32">
                <Reveal>
                  <h2 className="text-6xl font-black tracking-tighter mb-12 text-white">
                    Experience
                  </h2>
                </Reveal>
             </div>
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-sans-ui font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <FileText size={16} /> Download Resume
                </a>
            </Reveal>
          </div>
        </div>

        {/* ROW 2: COMMUNITY & FUN FACT */}
        <div className="grid md:grid-cols-12 gap-16 border-t border-white/10 pt-20">
           {/* LEFT COLUMN: FUN FACT */}
           <div className="md:col-span-4 relative">
              <Reveal delay={200}>
                <div 
                  onClick={handleFunFactClick}
                  className="hidden md:block cursor-pointer p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all sticky top-32"
                >
                  <div className="absolute -right-4 -top-4 bg-blue-500/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      {funFactRevealed ? "Did you know?" : "FUN FACTS ;)"}
                    </div>
                    
                    <div className="min-h-[100px] flex flex-col justify-center">
                      {funFactRevealed ? (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <div className="flex items-center gap-2 mb-2 text-white">
                            {FUN_FACTS[funFactIndex].icon}
                            <span className="font-bold">{FUN_FACTS[funFactIndex].label}</span>
                          </div>
                          <p className="text-sm text-neutral-400 leading-relaxed font-sans-ui">
                            {FUN_FACTS[funFactIndex].text}
                          </p>
                          <span className="text-[10px] text-neutral-600 mt-4 block uppercase tracking-widest">Click for another</span>
                        </div>
                      ) : (
                        <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                          FUN FACTS ;)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
           </div>
           
           {/* RIGHT COLUMN: COMMUNITY GRID */}
           <div className="md:col-span-8">
               <h3 className="text-2xl font-bold font-sans-ui uppercase tracking-widest text-neutral-500 mb-8">Community & Leadership</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {LEADERSHIP.map((role, i) => (
                    <Reveal key={i} delay={400 + (i * 100)}>
                      <div className="group border border-white/10 bg-white/5 p-6 rounded-lg hover:border-blue-500/50 transition-colors h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3 text-blue-400">
                            <Users size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">{role.org}</span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{role.role}</h4>
                        </div>
                        <p className="text-sm text-neutral-400 font-sans-ui leading-relaxed mt-4">
                          {role.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
               </div>
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

      {/* --- EXPERTISE (Reordered: Before Gallery) --- */}
      <section id="expertise" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <Reveal>
          <h2 className="text-5xl font-black tracking-tighter mb-12 text-center">
            My Arsenal
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
          {SKILLS.map((skill, i) => (
            <Reveal key={i} delay={i * 100} className="bg-[#050505] p-6 group hover:bg-[#0a0a0a] transition-colors h-full">
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

      {/* --- LINKEDIN THOUGHTS (Only Top 2) --- */}
      <section id="thoughts" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-20">
            <Linkedin className="text-blue-500" size={40} />
            <h2 className="text-5xl font-black tracking-tighter text-center">Featured on LinkedIn</h2>
          </div>
        </Reveal>
        
        {/* Responsive Grid for Dynamic Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <LinkedInStoryCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- GALLERY SECTION (SCALABLE + ALGORITHMIC LAYOUT) --- */}
      <section id="gallery" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <Camera className="text-blue-500" size={40} />
            <h2 className="text-6xl font-black tracking-tighter">Beyond Code</h2>
          </div>
        </Reveal>

        {/* Algorithmic Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[350px]" 
          onMouseLeave={() => setHoveredGalleryItem(null)}
        >
          {galleryItems.map((item, i) => {
            const spanClass = getGallerySpan(i); // Calculate layout dynamically
            return (
              <Reveal key={item.id} delay={i * 100} className={`${spanClass} relative group cursor-pointer overflow-hidden rounded-sm transition-all duration-500 ${hoveredGalleryItem && hoveredGalleryItem !== item.id ? 'blur-[2px] opacity-40 scale-95 grayscale' : 'scale-100 opacity-100'}`}>
                <GalleryCard 
                  item={item} 
                  spanClass="" 
                  setHoveredGalleryItem={setHoveredGalleryItem} 
                  hoveredGalleryItem={hoveredGalleryItem} 
                  setActiveGalleryItem={setActiveGalleryItem}
                />
              </Reveal>
            );
          })}
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

          <div className="absolute bottom-8 text-xs text-neutral-600 uppercase tracking-widest font-sans-ui font-bold">
            © 2025 Paridhi Sharma · Engineered with React
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <Zap className="absolute top-20 right-20 text-white/5 w-96 h-96 -rotate-12 pointer-events-none" strokeWidth={0.5} />
      </footer>
    </div>
  );
}