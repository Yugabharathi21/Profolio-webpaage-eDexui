import React, { useState } from 'react';
import { Terminal, Gamepad2, Image, Youtube, Twitch, Mail, Github, Car, Palette, Menu, X, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import projectsData from './data/projects.json';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black pixel-bg">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-white/90 text-xl font-['Share_Tech_Mono'] tracking-wider">[YBJ]</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">HOME</a>
              <a href="#skills" className="nav-link">SKILLS</a>
              <a href="#projects" className="nav-link">PROJECTS</a>
              <a href="#contact" className="nav-link">CONTACT</a>
              
              {/* Resume Button */}
              <div className="flex items-center ml-4 terminal-text">
                <a 
                  href="/documents/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all glass-card border border-emerald-400/20 hover:border-emerald-400/40"
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Resume</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <button 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-white/10">
              <a href="#home" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">HOME</a>
              <a href="#skills" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">SKILLS</a>
              <a href="#projects" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">PROJECTS</a>
              <a href="#contact" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">CONTACT</a>
              <a 
                href="/documents/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-4 text-emerald-400/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 pt-20">
          <motion.div 
            className="terminal-window p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              {...fadeInUp}
            >
              <Terminal className="w-5 h-5 text-white/80" />
              <span className="text-white/80 text-sm tracking-wider terminal-text">[system@terminal] ~ $</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-6 text-white tracking-tight"
              {...fadeInUp}
            >
              YUGA BHARATHI JAISANKAR
            </motion.h1>
            <motion.p 
              className="text-lg text-white/80 mb-6 font-light"
              {...fadeInUp}
            >
              II Year Computer Science Engineering @ Kongu Engineering College, Erode
            </motion.p>
            <motion.div 
              className="flex gap-6 mb-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <a 
                href="https://github.com/Yugabharathi21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@SPz-G21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yuga-bharathi-jaisankar-2a426a291/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Grid */}
        <motion.section 
          id="skills" 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">SYSTEM CAPABILITIES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              icon={<Gamepad2 className="w-6 h-6" />}
              title="FiveM Development"
              items={['Custom Script Development', 'Server Configuration', 'Resource Management']}
            />
            <SkillCard
              icon={<Image className="w-6 h-6" />}
              title="Design & Graphics"
              items={['Thumbnails', 'Banners', 'Logos', 'Stream Graphics']}
            />
            <SkillCard
              icon={<Car className="w-6 h-6" />}
              title="FiveM Assets"
              items={['Vehicle Liveries', 'Character Outfits', 'Custom Models']}
            />
            <SkillCard
              icon={<Palette className="w-6 h-6" />}
              title="Creative Tools"
              items={['Adobe Photoshop', 'After Effects', 'Premiere Pro', 'Blender', 'Figma']}
            />
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">FEATURED PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                technologies={project.technologies}
              />
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section 
          id="contact" 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">CONTACT</h2>
          <div className="terminal-window p-8">
            <p className="text-white/90 mb-4 terminal-text text-sm">$ contact.exe --init</p>
            <p className="text-white/70 mb-6 text-lg terminal-text">{'>'} Ready to collaborate? Let's connect!</p>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/yuga-bharathi-jaisankar-2a426a291/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all glass-card p-3"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Yugabharathi21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all glass-card p-3"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@SPz-G21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all glass-card p-3"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-white/80 pixel-border-thin inline-block p-2 tracking-wider terminal-text">[END OF LINE]</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <motion.div 
      className="terminal-window p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-white/80">{icon}</span>
        <h3 className="text-xl text-white tracking-wide">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div 
            key={item} 
            className="skill-badge"
          >
            <span className="text-emerald-400 mr-2">$</span>
            <span className="text-white/90">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  technologies 
}: { 
  title: string; 
  description: string; 
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}) {
  return (
    <motion.div 
      className="terminal-window overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all transform hover:scale-105" 
      />
      <div className="p-6">
        <h3 className="text-xl text-white mb-3 tracking-wide">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs bg-emerald-900/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-all glass-card px-3 py-2 text-sm"
          >
            <Github className="w-4 h-4" />
            <span className="terminal-text">View Source</span>
          </a>
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400/80 hover:text-emerald-400 transition-all glass-card px-3 py-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="terminal-text">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default App;