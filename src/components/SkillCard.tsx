import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
  isCreativeTools?: boolean;
}

const SkillCard = ({ icon, title, items, isCreativeTools = false }: SkillCardProps) => {
  return (
    <motion.div
      className="terminal-window p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-emerald-400">{icon}</span>
        <h3 className="text-white text-lg font-medium">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-emerald-400 terminal-text">$</span>
            <span className="text-white/70 terminal-text">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard; 