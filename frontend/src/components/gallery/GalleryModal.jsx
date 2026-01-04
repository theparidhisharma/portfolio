import React from 'react';
import { X } from 'lucide-react';

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

export default GalleryModal;