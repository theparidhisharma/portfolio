import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

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

export default GalleryCard;