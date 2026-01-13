import React from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';

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

export default LinkedInStoryCard;