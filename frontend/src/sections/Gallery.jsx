import { useState } from "react";
import Reveal from "../components/common/Reveal";
import GalleryCard from "../components/gallery/GalleryCard";
import GalleryModal from "../components/gallery/GalleryModal";
import { GALLERY } from "../data/gallery";
import { Camera } from "lucide-react";

export default function Gallery() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const getGallerySpan = (i) => {
    const pattern = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-2",
      "md:col-span-1 md:row-span-1"
    ];
    return pattern[i % pattern.length];
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-center gap-4 mb-20">
          <Camera size={40} className="text-blue-500" />
          <h2 className="text-6xl font-black">Beyond Code</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[350px]">
        {GALLERY.map((item, i) => (
          <Reveal key={item.id} delay={i * 100} className={getGallerySpan(i)}>
            <GalleryCard
              item={item}
              hoveredGalleryItem={hovered}
              setHoveredGalleryItem={setHovered}
              setActiveGalleryItem={setActive}
            />
          </Reveal>
        ))}
      </div>

      {active && <GalleryModal item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
