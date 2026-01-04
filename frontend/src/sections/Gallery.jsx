import React, { useState } from 'react';
import Reveal from '../components/common/Reveal';
import GalleryCard from '../components/gallery/GalleryCard';
import { GALLERY } from '../data/gallery';
import { Camera } from 'lucide-react';

const Gallery = ({ setActiveGalleryItem }) => {
  const [hoveredGalleryItem, setHoveredGalleryItem] = useState(null);

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

  return (
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
        {GALLERY.map((item, i) => {
          const spanClass = getGallerySpan(i); // Calculate layout dynamically
          return (
            <Reveal key={item.id} delay={i * 100} className={`${spanClass} relative`}>
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
  );
};

export default Gallery;