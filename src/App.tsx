import React, { useState } from 'react';
import { Terminal, Gamepad2, Image, Youtube, Twitch, Mail, Github, Car, Palette, Menu, X, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from './data/projects.json';

interface MultimediaItem {
  title: string;
  description: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

interface ProjectData {
  projects: Project[];
  multimedia: MultimediaItem[];
  wip: Project[];
}

const typedProjectData = projectsData as ProjectData;

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
          {/* Main Hero Content */}
          <motion.div 
            className="terminal-window pl-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8 relative">
              {/* Terminal content on the left */}
              <div className="flex-1 z-10 py-8">
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
              </div>
              
              {/* Desktop Profile Image */}
              <motion.div
                className="md:relative md:w-[280px] lg:w-[350px] absolute right-0 md:right-0 top-0 bottom-0 overflow-hidden hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src="/images/profile-bw.png"
                  alt="Profile"
                  className="w-[800px] md:w-[600px] lg:w-[800px] h-full object-cover object-[80%_top] scale-125 md:scale-110 lg:scale-135"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Profile Image Box */}
          <motion.div 
            className="md:hidden mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="terminal-window overflow-hidden h-[300px] relative">
              <motion.img
                src="/images/profile-bw.png"
                alt="Profile"
                className="w-full h-full object-cover object-top scale-155"
              />
            </div>
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
              isCreativeTools={true}
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
            {typedProjectData.projects.map((project) => (
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

        {/* Multimedia Section */}
        <motion.section 
          id="multimedia" 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">MULTIMEDIA SHOWCASE</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {typedProjectData.multimedia.map((item, index) => (
              <MultimediaCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </motion.section>

        {/* Work in Progress Section */}
        <motion.section 
          id="wip" 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">WORK IN PROGRESS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {typedProjectData.wip.map((project) => (
              <ProjectCard
                key={project.id}
                title={`[WIP] ${project.title}`}
                description={project.description}
                image={project.image}
                githubUrl={project.githubUrl}
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
            
            {/* Contact Form */}
            <form 
              className="max-w-2xl mb-8"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                const webhookUrl = "https://discord.com/api/webhooks/1334197974577709200/x-9G1IuJjmjUW5f-gJN4zJPdYDRyT1PbMLvvwcUWsTEgpbFbBDUMENVBVCjNH6LU7cNM";
                
                try {
                  const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      content: `New Contact Form Submission\n\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`,
                    }),
                  });

                  if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                  } else {
                    throw new Error('Failed to send message');
                  }
                } catch (error) {
                  alert('Failed to send message. Please try again later.');
                }
              }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 terminal-text">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-md focus:border-emerald-400/50 focus:outline-none terminal-text"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 terminal-text">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-md focus:border-emerald-400/50 focus:outline-none terminal-text"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 terminal-text">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-md focus:border-emerald-400/50 focus:outline-none terminal-text"
                  placeholder="Enter your message"
                />
              </div>
              
              <button
                type="submit"
                className="bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-md hover:bg-emerald-500/20 transition-all glass-card border border-emerald-400/20 hover:border-emerald-400/40 terminal-text"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
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

      {/* Image Preview Modal */}
      <ImagePreviewModal
        image={typedProjectData.multimedia[0].image}
        title={typedProjectData.multimedia[0].title}
        isOpen={false}
        onClose={() => {}}
      />
    </div>
  );
}

function SkillCard({ icon, title, items, isCreativeTools = false }: { 
  icon: React.ReactNode; 
  title: string; 
  items: string[];
  isCreativeTools?: boolean;
}) {
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

function ImagePreviewModal({ 
  image, 
  title, 
  isOpen, 
  onClose 
}: { 
  image: string; 
  title: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the overlay itself, not the image
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-7xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={image} 
          alt={title} 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

function MultimediaCard({ 
  title, 
  description, 
  image
}: { 
  title: string; 
  description: string; 
  image: string;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="terminal-window overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsPreviewOpen(true)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover hover:grayscale-0 transition-all transform hover:scale-105" 
        />
        <div className="p-6">
          <h3 className="text-xl text-white mb-3 tracking-wide">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen && (
          <ImagePreviewModal
            image={image}
            title={title}
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;