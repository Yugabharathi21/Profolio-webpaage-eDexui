import { FC, memo } from 'react';
import { motion } from 'framer-motion';

const LoadingFallback: FC = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <motion.div 
      className="text-emerald-400 flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="w-2 h-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div 
        className="w-2 h-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div 
        className="w-2 h-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </motion.div>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

export default LoadingFallback; 