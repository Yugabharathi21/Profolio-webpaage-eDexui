import React, { useState } from 'react';
import { Terminal, Gamepad2, Image, Youtube, Twitch, Mail, Github, Car, Palette, Menu, X, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from './data/projects.json';

// Add keyframe animations
const matrixRainKeyframes = `
@keyframes matrix-rain {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

@keyframes grid-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}
`;

const scanlineKeyframes = `
@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = matrixRainKeyframes + scanlineKeyframes;
  document.head.appendChild(style);
}

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
      {/* Cyberpunk Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-scroll 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_100%)]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.15) 0px, rgba(0, 255, 0, 0.15) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px',
          animation: 'matrix-rain 20s linear infinite'
        }}></div>
      </div>
      
      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 3px)',
          backgroundSize: '100% 3px',
          animation: 'scanline 10s linear infinite'
        }}></div>
      </div>

      {/* Glowing Corner Accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent transform translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      </div>

      {/* Binary Code Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 overflow-hidden" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'10\' y=\'20\' fill=\'%2300ff00\' font-family=\'monospace\' font-size=\'10\'%3E01%3C/text%3E%3Ctext x=\'30\' y=\'40\' fill=\'%2300ff00\' font-family=\'monospace\' font-size=\'10\'%3E10%3C/text%3E%3C/svg%3E")',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

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
            {/* Terminal Window Decorations */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black/50 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-white/50 text-xs ml-4 terminal-text">terminal@ybj:~</span>
            </div>
            <div className="pt-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8 relative">
                {/* Terminal content on the left */}
                <div className="flex-1 z-10 py-8">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    {...fadeInUp}
                  >
                    <Terminal className="w-5 h-5 text-white/80" />
                    <span className="text-white/80 text-sm tracking-wider terminal-text">[system@terminal] ~ $ whoami</span>
                    <span className="animate-pulse">▊</span>
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

        {/* About Me Section */}
        <motion.section 
          id="about"
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">ABOUT.EXE</h2>
          <div className="terminal-window p-8">
            <div className="flex flex-col gap-6">
              {/* Command History */}
              <motion.div 
                className="flex flex-col gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {/* System Info */}
                <div className="terminal-line">
                  <span className="text-emerald-400">$</span>
                  <span className="text-white/80 ml-2 terminal-text">neofetch</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 ml-4 terminal-text">
                  <div className="text-white/70">
                    <p><span className="text-emerald-400">OS:</span> Human 2.0</p>
                    <p><span className="text-emerald-400">Kernel:</span> Creative 5.4.0</p>
                    <p><span className="text-emerald-400">Uptime:</span> 20 years</p>
                    <p><span className="text-emerald-400">Shell:</span> Problem_Solver v3.0</p>
                    <p><span className="text-emerald-400">Resolution:</span> High Energy x Determination</p>
                  </div>
                  <div className="text-white/70">
                    <p><span className="text-emerald-400">DE:</span> Development_Environment 2024</p>
                    <p><span className="text-emerald-400">WM:</span> Work_Management 1.0</p>
                    <p><span className="text-emerald-400">Terminal:</span> Tech_Enthusiast</p>
                    <p><span className="text-emerald-400">CPU:</span> Brain @ 4.0GHz</p>
                    <p><span className="text-emerald-400">GPU:</span> Creative_Vision RTX</p>
                  </div>
                </div>

                {/* About Description */}
                <div className="mt-6">
                  <div className="terminal-line">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white/80 ml-2 terminal-text">cat about.md</span>
                  </div>
                  <div className="ml-4 mt-4 text-white/70 terminal-text space-y-4">
                    <p>
                      A passionate Computer Science Engineering student with a knack for creative problem-solving 
                      and a deep interest in technology. Currently exploring the vast realms of software development, 
                      with a special focus on FiveM development and multimedia design.
                    </p>
                    <p>
                      When not coding, you'll find me crafting visual experiences, from thumbnails to stream graphics, 
                      or diving deep into the world of game modding and asset creation.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6">
                  <div className="terminal-line">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white/80 ml-2 terminal-text">stats --quick</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-4 mt-4">
                    <div className="glass-card p-4 text-center">
                      <p className="text-emerald-400 text-2xl font-bold">2+</p>
                      <p className="text-white/70 text-sm terminal-text">Years Coding</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-emerald-400 text-2xl font-bold">{typedProjectData.projects.length + typedProjectData.wip.length}+</p>
                      <p className="text-white/70 text-sm terminal-text">Projects</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-emerald-400 text-2xl font-bold">{typedProjectData.multimedia.length}+</p>
                      <p className="text-white/70 text-sm terminal-text">Designs</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-emerald-400 text-2xl font-bold">∞</p>
                      <p className="text-white/70 text-sm terminal-text">Creativity</p>
                    </div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="mt-6">
                  <div className="terminal-line">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white/80 ml-2 terminal-text">current-status</span>
                  </div>
                  <div className="ml-4 mt-4 flex flex-wrap gap-3">
                    <span className="terminal-badge">🎓 Learning New Tech</span>
                    <span className="terminal-badge">💻 Building Projects</span>
                    <span className="terminal-badge">🎨 Creating Designs</span>
                    <span className="terminal-badge">🎮 Gaming</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

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

        <motion.section 
        id="multimedia" 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">MULTIMEDIA SHOWCASE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-hidden">
          {typedProjectData.multimedia.map((item, index) => (
            <MultimediaCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              className="overflow-hidden max-w-full"
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
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="terminal-window p-4 w-full max-w-2xl">
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-400/80 text-xs sm:text-sm font-mono mb-4 leading-tight"
            >
              {`
 ██╗   ██╗██████╗      ██╗
 ╚██╗ ██╔╝██╔══██╗     ██║
  ╚████╔╝ ██████╔╝     ██║
   ╚██╔╝  ██╔══██╗██   ██║
    ██║   ██████╔╝╚█████╔╝
    ╚═╝   ╚═════╝  ╚════╝ 
              `}
            </motion.pre>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2 terminal-text text-sm"
            >
              <p className="text-white/60">
                <span className="text-emerald-400">$</span> whoami
              </p>
              <p className="text-white/80 ml-4">Yuga Bharathi Jaisankar</p>
              
              <p className="text-white/60">
                <span className="text-emerald-400">$</span> uptime
              </p>
              <p className="text-white/80 ml-4">20 years of runtime, no crashes yet</p>
              
              <p className="text-white/60">
                <span className="text-emerald-400">$</span> skills --list | grep "passion"
              </p>
              <p className="text-white/80 ml-4">Coding with passion since 2022</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white/60">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="terminal-text"
            >
              © 2024 YBJ
            </motion.p>
            <span className="hidden sm:block">•</span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 terminal-text"
            >
              &lt;/&gt; with <span className="text-red-500 animate-pulse">❤</span> in React + TypeScript
            </motion.p>
            <span className="hidden sm:block">•</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-2"
            >
              <span className="terminal-text glass-card px-2 py-1">
                <span className="text-emerald-400">$</span> rm -rf depression
              </span>
              <span className="terminal-text glass-card px-2 py-1">
                <span className="text-emerald-400">$</span> sudo apt-get install happiness
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xs text-white/40 terminal-text text-center"
          >
            [Process completed with exit code 0] - No bugs were harmed in the making of this website
          </motion.p>
        </div>
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
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-105" 
        />
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
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-5xl w-full mx-auto my-8">
        {/* Terminal Window Header */}
        <div className="absolute top-0 left-0 w-full h-8 bg-black/50 border-b border-white/10 flex items-center px-4 gap-2 rounded-t-lg z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-white/50 text-xs ml-4 terminal-text">preview@ybj:~$ display {title.toLowerCase().replace(/\s+/g, '-')}.png</span>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-12 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg pt-8 pb-4 px-4">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={image} 
            alt={title} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          
          {/* Image Title */}
          <div className="mt-4 text-center">
            <p className="text-white/80 terminal-text text-sm">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MultimediaCard({ 
  title, 
  description, 
  image,
  className
}: { 
  title: string; 
  description: string; 
  image: string;
  className?: string;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <motion.div 
        className={`terminal-window overflow-hidden group cursor-pointer ${className || ''}`}
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