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
    <div className="min-h-screen bg-black text-[#e5e5e5] overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      <CustomCursor />

      {/* Modals */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {activeGalleryItem && (
        <GalleryModal item={activeGalleryItem} onClose={() => setActiveGalleryItem(null)} />
      )}

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${scrolled > 50 ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        {/* LOGO: Serif to match Hero Title */}
        <div className="font-serif-custom text-2xl font-bold tracking-tight uppercase hover-trigger mix-blend-difference text-white">
          Paridhi.sh
        </div>
        
        {/* NAV: Sans-Serif for readability */}
        <nav className="hidden md:flex gap-8 text-xs font-medium font-sans-custom uppercase tracking-widest mix-blend-difference text-white/80">
          {['About', 'Work', 'Expertise', 'Gallery', 'Contact'].map((item) => (
            <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover-trigger hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </header>

      {/* --- SECTIONS --- */}
      <Hero />
      
      {/* Marquee acts as a nice divider after the galaxy */}
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