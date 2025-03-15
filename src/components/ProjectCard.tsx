import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  technologies 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      className="terminal-window overflow-hidden group relative"
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
        <span className="text-white/50 text-xs ml-3 terminal-text">project@ybj:~$ cat {title.toLowerCase().replace(/\s+/g, '-')}.md</span>
      </div>

      {/* Project Content */}
      <div className="pt-6">
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
            className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-emerald-400">$</span>
            <h3 className="text-xl text-white tracking-wide">{title}</h3>
            <span className="animate-pulse text-emerald-400/50">▊</span>
          </div>
          <p className="text-white/70 mb-4 terminal-text">{description}</p>
          
          {/* Technologies with terminal style */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs bg-emerald-900/20 text-emerald-400 px-2 py-1 rounded-sm border border-emerald-400/20 terminal-text flex items-center gap-1"
              >
                <span className="text-emerald-400/50">&gt;</span>
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links with enhanced terminal style */}
          <div className="flex gap-3">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-all glass-card px-3 py-2 text-sm group/link"
            >
              <Github className="w-4 h-4" />
              <span className="terminal-text">git clone</span>
              <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-emerald-400/70">{githubUrl.split('/').pop()}</span>
            </a>
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400/80 hover:text-emerald-400 transition-all glass-card px-3 py-2 text-sm group/link"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="terminal-text">ssh</span>
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">{new URL(liveUrl).hostname}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 