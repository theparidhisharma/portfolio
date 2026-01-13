import React, { useState, useEffect } from 'react';
import CustomCursor from '../components/common/CustomCursor';
import Marquee from '../components/common/Marquee';
import ProjectModal from '../components/project/ProjectModal';
import GalleryModal from '../components/gallery/GalleryModal';

// Sections
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Expertise from '../sections/Expertise';
import Thoughts from '../sections/Thoughts';
import Gallery from '../sections/Gallery';
import Footer from '../sections/Footer';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredGalleryItem, setHoveredGalleryItem] = useState(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <CustomCursor />

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

      {/* --- SECTIONS --- */}
      <Hero />
      <Marquee text="Backend Engineering • Distributed Systems • Machine Learning •" />
      <About />
      <Work setActiveProject={setActiveProject} />
      <Expertise />
      <Thoughts />
      <Gallery 
        setHoveredGalleryItem={setHoveredGalleryItem}
        hoveredGalleryItem={hoveredGalleryItem}
        setActiveGalleryItem={setActiveGalleryItem}
      />
      <Footer />
    </div>
  );
}