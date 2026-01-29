import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../config/socials'; 

// --- CONFIGURATION ---
const STAR_COUNT = 800;

const COLOR_STRINGS = [
  'rgba(167, 139, 250, 0.8)', 
  'rgba(96, 165, 250, 0.8)',  
  'rgba(129, 140, 248, 0.8)', 
  'rgba(255, 255, 255, 0.9)'  
];

const Galaxy = () => {
  const canvasRef = useRef(null);

  // --- DATA TRANSFORMATION ---
  const socialLinks = Object.entries(SOCIALS)
    .filter(([key]) => key !== 'resume') 
    .map(([key, url]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1), 
      url: key === 'email' ? `mailto:${url}` : url      
    }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };
    let isMouseDown = false; 

    const starsByColor = [[], [], [], []];

    class Star {
      constructor(colorIndex) {
        this.colorIndex = colorIndex;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 1.5 + 0.5; 
        this.size = Math.random() * 1.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 50000) { 
          const dist = Math.sqrt(distSq);
          const strength = isMouseDown ? -2000 : 150; 
          const force = (strength * this.z) / (Math.max(dist, 10) * 5);
          this.vx += (dx / dist) * force * 0.1;
          this.vy += (dy / dist) * force * 0.1;
        }

        this.vx *= 0.96; 
        this.vy *= 0.96;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsByColor.forEach(arr => arr.length = 0);
      for (let i = 0; i < STAR_COUNT; i++) {
        const colorIdx = Math.floor(Math.random() * COLOR_STRINGS.length);
        starsByColor[colorIdx].push(new Star(colorIdx));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; 
      ctx.fillRect(0, 0, width, height);

      for (let c = 0; c < 4; c++) {
        const stars = starsByColor[c];
        if (stars.length === 0) continue;
        ctx.fillStyle = COLOR_STRINGS[c];
        ctx.beginPath();
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.update(); 
          ctx.moveTo(s.x | 0, s.y | 0);
          ctx.arc(s.x | 0, s.y | 0, s.size, 0, Math.PI * 2);
        }
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleDown = () => { isMouseDown = true; };
    const handleUp = () => { isMouseDown = false; };
    const handleTouchMove = (e) => {
        if(e.touches.length > 0) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleDown, { passive: true });
    window.addEventListener('touchend', handleUp);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      
      {/* INJECT FONT DIRECTLY IF NOT CONFIGURED IN TAILWIND */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 block" />

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
        >
            {/* TAGLINE: Matches "SOFTWARE ENGINEER INTERN" style */}
            <h2 className="font-sans-custom text-blue-200/60 font-medium text-xs md:text-sm tracking-[0.4em] mb-6 uppercase">
                Portfolio
            </h2>

            {/* MAIN TITLE: Matches "Experience" Serif Style */}
            {/* Added 'italic' class to the second line to match the elegant vibe commonly seen with this font */}
            <h1 className="font-serif-custom text-5xl md:text-8xl lg:text-9xl font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300 pb-2 drop-shadow-2xl">
                PARIDHI
            </h1>
            
            <h1 className="font-serif-custom text-5xl md:text-8xl lg:text-9xl font-light tracking-wide text-white/20 -mt-2 md:-mt-6 mix-blend-overlay">
                SHARMA
            </h1>

            {/* DIVIDER */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent my-10 opacity-40" />

            {/* LINKS: Clean Sans-Serif */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
                {socialLinks.map((social) => (
                    <a 
                        key={social.name}
                        href={social.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-sans-custom text-xs md:text-sm font-medium tracking-widest text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        {social.name}
                    </a>
                ))}
            </div>

            {/* INSTRUCTION */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="font-sans-custom text-[10px] md:text-xs text-blue-300/30 font-medium tracking-[0.2em] uppercase"
            >
                Move cursor to attract &nbsp;•&nbsp; Click & hold to disperse
            </motion.div>

        </motion.div>
      </div>

    </main>
  );
};

export default Galaxy;