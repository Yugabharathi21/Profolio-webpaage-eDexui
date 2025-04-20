export const animations = {
  matrixRain: `
    @keyframes matrix-rain {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }
  `,
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `,
  pulseGlow: `
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.3; }
    }
  `,
  gridScroll: `
    @keyframes grid-scroll {
      0% { transform: translateY(0); }
      100% { transform: translateY(50px); }
    }
  `,
  scanline: `
    @keyframes scanline {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }
  `
};

// Add animations to document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = Object.values(animations).join('\n');
  document.head.appendChild(style);
}

// Framer Motion variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
}; 