import React, { useState } from 'react';
import { Terminal, Gamepad2, Image, Youtube, Twitch, Mail, Github, Car, Palette, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black pixel-bg">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-white/90 text-xl font-['Outfit'] tracking-wider">[YBJ]</span>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">HOME</a>
              <a href="#skills" className="nav-link">SKILLS</a>
              <a href="#projects" className="nav-link">PROJECTS</a>
              <a href="#contact" className="nav-link">CONTACT</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-white/10">
              <a href="#home" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">HOME</a>
              <a href="#skills" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">SKILLS</a>
              <a href="#projects" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">PROJECTS</a>
              <a href="#contact" className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">CONTACT</a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 pt-20">
          <div className="terminal-window p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-white/80" />
              <span className="text-white/80 text-sm tracking-wider">[system@terminal] ~ $</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-white tracking-tight">YUGA BHARATHI JAISANKAR</h1>
            <p className="text-lg text-white/80 mb-6 font-light">II Year Computer Science Engineering @ Kongu Engineering College, Erode</p>
            <div className="flex gap-6 mb-6">
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Twitch className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="container mx-auto px-4 py-20">
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
        </section>

        {/* Projects */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">FEATURED PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="FiveM Server Scripts"
              description="Custom gameplay mechanics and server features"
              image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard
              title="Stream Design Package"
              description="Complete branding and overlay design for Twitch streamers"
              image="https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <h2 className="text-2xl text-white mb-12 pixel-border-thin inline-block p-3 tracking-wide">CONTACT</h2>
          <div className="terminal-window p-8">
            <p className="text-white/90 mb-4 font-mono text-sm">$ contact.exe --init</p>
            <p className="text-white/70 mb-6 text-lg">{'>'} Ready to collaborate? Let's connect!</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-all glass-card p-3">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all glass-card p-3">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all glass-card p-3">
                <Twitch className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-white/80 pixel-border-thin inline-block p-2 tracking-wider">[END OF LINE]</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="terminal-window p-6">
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
    </div>
  );
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="terminal-window overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all transform hover:scale-105" 
      />
      <div className="p-6">
        <h3 className="text-xl text-white mb-3 tracking-wide">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}

export default App;