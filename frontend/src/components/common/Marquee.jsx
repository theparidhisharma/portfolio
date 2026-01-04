import React from 'react';

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

export default Marquee;