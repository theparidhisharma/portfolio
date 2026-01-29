import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import GalleryCard from '../components/gallery/GalleryCard';
import { fetchGallery } from '../services/gallery.api.js';

const Gallery = ({ setHoveredGalleryItem, hoveredGalleryItem, setActiveGalleryItem }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery().then(setGallery);
  }, []);

  // ALGORITHMIC LAYOUT GENERATOR (KEEP AS-IS)
  const getGallerySpan = (index) => {
    const pattern = [
      "md:col-span-2 md:row-span-2", // Big square
      "md:col-span-1 md:row-span-1", // Small square
      "md:col-span-1 md:row-span-1", // Small square
      "md:col-span-2 md:row-span-1", // Wide rectangle
      "md:col-span-1 md:row-span-2", // Tall rectangle
      "md:col-span-1 md:row-span-1", // Small square
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section
      id="gallery"
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
    >
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
        {gallery.map((item, i) => {
          const spanClass = getGallerySpan(i);

          return (
            <Reveal
              key={item.id}
              delay={i * 100}
              className={`${spanClass} relative group cursor-pointer overflow-hidden rounded-sm transition-all duration-500 ${
                hoveredGalleryItem && hoveredGalleryItem !== item.id
                  ? 'blur-[2px] opacity-40 scale-95 grayscale'
                  : 'scale-100 opacity-100'
              }`}
            >
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
