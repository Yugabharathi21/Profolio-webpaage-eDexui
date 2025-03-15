import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MultimediaCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  className?: string;
}

const MultimediaCard: React.FC<MultimediaCardProps> = ({ 
  title, 
  description, 
  image, 
  onClick,
  className = '' 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      className={`terminal-window overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 w-full h-6 bg-black/50 border-b border-white/10 flex items-center px-3 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-white/50 text-xs ml-3 terminal-text">design@ybj:~$ display {title.toLowerCase().replace(/\s+/g, '-')}.png</span>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        {/* Loading placeholder */}
        <div 
          className={`absolute inset-0 bg-emerald-900/20 backdrop-blur-sm transition-opacity duration-300 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="h-full w-full animate-pulse bg-emerald-500/10"></div>
        </div>

        <img 
          src={image} 
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg mb-1">{title}</h3>
          <p className="text-white/70 text-sm terminal-text">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MultimediaCard; 