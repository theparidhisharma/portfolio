import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target;
      setHover(!!(t.closest('a') || t.closest('button') || t.closest('.hover-trigger')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block transition-all duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hover ? 2.5 : 1})`,
        mixBlendMode: 'difference'
      }}
    >
      <div className={`w-4 h-4 bg-white rounded-full ${hover ? 'opacity-50' : 'opacity-100'}`} />
      {hover && <div className="absolute inset-0 border border-white rounded-full animate-ping" />}
    </div>
  );
};

export default CustomCursor;